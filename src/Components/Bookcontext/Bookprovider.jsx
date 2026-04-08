import React, { createContext, useState} from 'react';
import { toast } from 'react-toastify';

export const Bookcontext=createContext();




const BookProvider = ({children}) => {
    
const [storedbooks,setStoredbooks]=useState([])
const [wishbooks,setWishbooks]=useState([])

const handleread=(books)=>{
        const isinwish=wishbooks.find(book=>book.bookId==books.bookId)
const isexist=storedbooks.find(b=>b.bookId===books.bookId)
if(isexist){
    toast.error(`${books.bookName} already added`);
}
else if(isinwish){
 toast.error(`${books.bookName} already added to wishlist`);
}
else{
    setStoredbooks([...storedbooks,books]);
    toast.success(`${books.bookName} added to readlist`)
}

}

const handlewish=(books)=>{
    const isinread=storedbooks.find(book=>book.bookId==books.bookId)
const isexist=wishbooks.find(b=>b.bookId===books.bookId)
if(isexist){
     toast.errort(`${books.bookName} already added`);
}
else if(isinread){
     toast.error(`${books.bookName} already in Readlist`); 
}

else{
    setWishbooks([...wishbooks,books]);
        toast.success(`${books.bookName} added to wishlist`)
}

}

const data={
    handleread,setStoredbooks,storedbooks,

    handlewish,setWishbooks,wishbooks
}
    return <Bookcontext.Provider value={data}>
        {children}
    </Bookcontext.Provider>
        
    
};

export default BookProvider;