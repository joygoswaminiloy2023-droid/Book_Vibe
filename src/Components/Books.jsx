import React, { use } from 'react';
import Book from './book';

    const books=fetch('/booksData.json').then(res=>res.json());
const Books = () => {

    
    const booklist=use(books);
   
    return (
    <div className="container mx-auto my-10">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
    {booklist.map((book,ind) => (
      <Book key={ind} book={book} />
    ))}
  </div>
</div>
    );
};

export default Books;