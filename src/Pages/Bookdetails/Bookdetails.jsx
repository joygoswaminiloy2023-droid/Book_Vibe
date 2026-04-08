
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Bookcontext } from '../../Components/Bookcontext/Bookprovider';


const Bookdetails = () => {
          const {id}=useParams();
 
   const books=useLoaderData();
   const expectedbooks=books.find((books)=>books.bookId==id);


   /////////
const {handleread,handlewish}=useContext(Bookcontext);


    return (
     
          <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10 bg-gray-100 p-8 rounded-xl shadow">

        {/* LEFT IMAGE */}
        <div className="bg-gray-200 rounded-xl flex items-center justify-center p-6">
          <img
            src={expectedbooks.image}
            alt={expectedbooks.bookName}
            className="w-72 object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {expectedbooks.bookName}
          </h1>

          <p className="mt-2 text-gray-600">
            By : <span className="font-medium">{expectedbooks.author}</span>
          </p>

          <hr className="my-4" />

          <p className="text-gray-700 font-medium">{expectedbooks.category}</p>

          <hr className="my-4" />

          {/* REVIEW */}
          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-800">Review :</span>{" "}
            {expectedbooks.review}
          </p>

          {/* TAGS */}
          <div className="mt-4 flex gap-3 flex-wrap">
            <span className="font-semibold">Tag:</span>
            {expectedbooks.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <hr className="my-6" />

          {/* DETAILS */}
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-medium text-gray-500">
                Number of Pages:
              </span>{" "}
              {expectedbooks.totalPages}
            </p>

            <p>
              <span className="font-medium text-gray-500">Publisher:</span>{" "}
              {expectedbooks.publisher}
            </p>

            <p>
              <span className="font-medium text-gray-500">
                Year of Publishing:
              </span>{" "}
              {expectedbooks.yearOfPublishing}
            </p>

            <p>
              <span className="font-medium text-gray-500">Rating:</span>{" "}
              {expectedbooks.rating}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-4">
            <button onClick={()=>handleread(expectedbooks)} className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-200">
              Read
            </button>

            <button onClick={()=>handlewish(expectedbooks)} className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Bookdetails;