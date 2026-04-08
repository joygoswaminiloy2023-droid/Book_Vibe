import { Star } from 'lucide-react';
import React from 'react';
import { Link} from 'react-router';

const Book = ({book}) => {

    const { bookName,bookId,author, image,rating,tags,category } = book;



    return (
<Link to={`/bookdetails/${bookId}`} className="bg-base-100 rounded-2xl p-5 shadow-lg  hover:shadow-xl transition w-80 ">

  {/* Image */}
  <div className="bg-base-200 rounded-xl p-6 flex justify-center items-center">
    <img
      src={image}
      alt="Book"
      className="h-40 object-contain"
    />
  </div>

  {/* Tags */}
  <div className="flex gap-2 mt-4">
 {tags.map((cat,index)=>(<span key={index} className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
      {cat}
    </span>)
    )}
  </div>

  {/* Title */}
  <h2 className="mt-3 text-lg font-semibold leading-snug">
   {bookName}
  </h2>

  {/* Author */}
  <p className="text-sm text-black mt-1">
    {author}
  </p>

  {/* Divider */}
  <div className="border-t border-dashed border-gray-200 my-3"></div>

  {/* Bottom Row */}
  <div className="flex justify-between items-center text-sm">
    <span className="text-black">{category}</span>

    <div className="flex items-center gap-1">
      <span>{ rating}</span>
  <Star size={16} className="text-yellow-500 fill-yellow-400" />
    </div>
  </div>

</Link>
    );
};

export default Book;