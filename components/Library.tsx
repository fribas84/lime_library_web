import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import useLibraryContract from "../hooks/useLibraryContract";
import Table from 'react-bootstrap/Table';
import { Button, Form, Modal } from "react-bootstrap";
import Borrowed from "./Borrowed";
import NewBook from "./NewBook";
import {ethers} from 'ethers'
import ErrorHandler from "./ErrorHandler";
import LoaderTransaction from "./LoaderTransaction";
import Book from "./Book";


type LibraryContract = {
    contractAddress: string;
}

interface Book {
    isbn: number;
    stock: number;
  }

const Library = ({contractAddress}: LibraryContract) => {
    const usLibraryContract = useLibraryContract(contractAddress);
    const { account, library } = useWeb3React<Web3Provider>();
    const [borrowed, setBorrowed]  = useState<number>(0);
    const [books, setBooks] = useState<number[]>();
    const [showNewBookModal, setNewBookModal]= useState<boolean>(false);
    const [showLoaderModal, setShowLoaderModal] = useState<boolean>(false);
    const [txHash,setTxHash] = useState<string>();
    const [errorMsg,setErrorMsg] = useState<string>();
    const [showErrorHandler, setShowErrorHandler] = useState<boolean>(false);
    const [bookList,setBooksList] = useState<Book[]>();
    const [cannotBorrow,setCannotBorrow] = useState<boolean>();


    useEffect(()=>{
        const fetchBookData = async () => {
            await loadBooks();
            await getBorrowed();
        }
        fetchBookData();
    },[])

    const getBorrowed = async () =>{
        const _borrowed = await usLibraryContract.hasBorrowed();
        console.log(cannotBorrow);
        setBorrowed(parseToDec(_borrowed));
        console.log(borrowed);
        if(borrowed != 0){
            setCannotBorrow(true);
        }
    }
    const handleNewBookModal = () =>{ 
        if(showNewBookModal==false){
            setNewBookModal(true);
        }
        else{
            setNewBookModal(false);
        }
    }  
    
    const handleCleanErrors= () => {
        setShowErrorHandler(false);
        setErrorMsg("");
      }
    
    const errorTrigger = (msg:string) =>{
        setShowErrorHandler(true);
        setErrorMsg(msg);
    }
    const handleNewBook = async (isbn:number,qty:number) =>{
        let isbnHex = ethers.BigNumber.from(isbn).toHexString()
        isbnHex = ethers.utils.hexZeroPad(isbnHex,6);
        try {
            
            const tx = await usLibraryContract.addBook(isbnHex,qty);
            setTxHash(tx.hash);
            setShowLoaderModal(true);
            const txReceipt = await tx.wait();
            setShowLoaderModal(false);
          }
          catch(err){
             errorTrigger(err.message);
        }
        loadBooks();
        
    }

    const parseToDec = hex =>parseInt(hex,16);
    const loadBooks = async () =>{
        const rawAvailableBooks = await usLibraryContract.getAvailableBooks();
        setBooks(rawAvailableBooks.map(book => parseToDec(book)));
    }


    const getStock = async(isbn:number)=>{
        let isbnHex = ethers.BigNumber.from(isbn).toHexString()
        isbnHex = ethers.utils.hexZeroPad(isbnHex,6);
        try{
            return await usLibraryContract.getStock(isbnHex);
        }
        catch(err){
            errorTrigger(err.message);
        }
    }

    const handleBorrow = async (book:number) =>{
        if(await getStock(book)>1)
        {
            try{
                const options = {value: ethers.utils.parseEther("0.001")};
                const isbnHex = ethers.BigNumber.from(book).toHexString();
                const tx = await usLibraryContract.borrow(isbnHex,options);;
                setTxHash(tx.hash);
                setShowLoaderModal(true);
                const txReceipt = await tx.wait();
                setShowLoaderModal(false);
                setCannotBorrow(true);
            }
            catch(err){
                errorTrigger(err.message);
            }
            
        }
        else{
            errorTrigger("No Stock Available.");
        }
        getBorrowed();
    }   
    
    const handleReturn = async () =>{
        try{
            const tx = await usLibraryContract.returnBook();
            setTxHash(tx.hash);
            setShowLoaderModal(true);
            const txReceipt = await tx.wait();
            setShowLoaderModal(false);
            setCannotBorrow(false);
        }
        catch(err){
            
            errorTrigger(err.message);
        }
        
    }

    const getHistory = async (book:number) =>{
        let isbnHex = ethers.BigNumber.from(book).toHexString()
        isbnHex = ethers.utils.hexZeroPad(isbnHex,6);
        try{
            return await usLibraryContract.getBookHistory(isbnHex);
        }
        catch(err){
            errorTrigger(err.message);
        }
    }
    return(
        <div>
            <ErrorHandler showErrorHandler={showErrorHandler} errorMsg={errorMsg} handleCleanErrors={handleCleanErrors}/>
            <div className="upperTable">
            <Borrowed borrowed={borrowed} />
            <div className="button-wrapper">
            <Button variant="success" onClick={handleNewBookModal}>New Book</Button>
 
            </div>
         
            <div className="button-wrapper" hidden={!cannotBorrow}>
                    <Button variant="warning" onClick={handleReturn}> Return book</Button>
            </div>
               
          
            
            </div>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ISBN</th>
                    <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {books?.map( book   =>{
                        return(
                            <tr key={book}>
                                <td>{book}</td>
                                <Book
                                            cannotBorrow={cannotBorrow}
                                            book={book}
                                            handleBorrow={handleBorrow} 
                                            getHistory={getHistory}/>                                            
                                
                            </tr>    
                            )})
                    }

                </tbody>
            
            </Table>

            <NewBook showNewBookModal={showNewBookModal} handleNewBookModal={handleNewBookModal} handleNewBook={handleNewBook} /> 
            <LoaderTransaction showLoaderModal={showLoaderModal} txHash={txHash}/>


                    
            <style jsx>{`
            .results-form {
            display: flex;
            flex-direction: column;
            }

            .button-wrapper {
                margin: 5px;
                float: right;
            }
            .bookRentWrapper {
                float:left;
            }
            .upperTable {
                position:inline;
            }
            .actionButton {
                margin:1px;
                padding:1px;
            }

            
            `}</style>
        </div>
    );

};

export default Library;


