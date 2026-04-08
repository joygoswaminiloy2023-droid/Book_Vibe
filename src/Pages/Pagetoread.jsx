import React, { use } from 'react';
import Chart from '../Components/Chart';

 const books=fetch('/booksData.json').then(res=>res.json());

const Pagetoread = () => {
        const booklist=use(books);
    return (
   <div className='my-10 '>
   <Chart allbooks={booklist}></Chart>
   
   </div>
    );
};

export default Pagetoread;