import React, { useContext } from 'react';
import { Bookcontext } from '../Components/Bookcontext/Bookprovider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {  ArrowDownUp, BookOpenCheck, BookOpenText, Calendar, PackageSearch, Star, WandSparkles } from 'lucide-react';


const Book = () => {
    const {storedbooks,wishbooks}=useContext(Bookcontext);
   

    return (
    <div className="max-w-6xl mx-auto mt-12 p-6 bg-white shadow-xl rounded-2xl my-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-8 ">
<h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
  <BookOpenText size={36} className="text-indigo-500" />
  My Books
</h1>
        <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1 bg-green-500 rounded-xl text-white">Sorted By <ArrowDownUp size={18} /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
 <li>
  <a className="flex items-center gap-2">
    <PackageSearch className="text-purple-500" size={18} />
    <span className="text-gray-700">Number Of Pages</span>
  </a>
</li>

<li>
  <a className="flex items-center gap-2">
    <Calendar className="text-blue-500" size={18} />
    <span className="text-gray-700">Publish Date</span>
  </a>
</li>

<li>
  <a className="flex items-center gap-2">
    <Star className="text-yellow-500 fill-yellow-400" size={18} />
    <span className="text-gray-700">Rating</span>
  </a>
</li>
  </ul>
</div>
         
      </div>

      {/* Tabs */}
      <Tabs>
        <TabList className="flex gap-6 border-b pb-2 text-lg font-medium">

          {/* Read List Tab */}
          <Tab
            className="cursor-pointer px-4 py-2 flex items-center gap-2"
            selectedClassName="border-b-4 border-green-500 text-green-600 font-semibold"
          >
           <BookOpenCheck
  size={18}
  className="text-green-500 group-hover:scale-110 transition"
/>
            Read List
          </Tab>

          {/* Wish List Tab */}
          <Tab
            className="cursor-pointer px-4 py-2 flex items-center gap-2"
            selectedClassName="border-b-4 border-yellow-500 text-yellow-600 font-semibold"
          >
            <WandSparkles size={18} />
            Wish List
          </Tab>
        </TabList>

        {/* ===================== READ LIST ===================== */}

        <TabPanel>
          <div className="mt-6">

            {/* Counter */}
            <div className="mb-6 p-4 bg-green-50 rounded-xl">
              <h2 className="text-lg font-semibold text-green-700">
                Total Read Books: {storedbooks.length}
              </h2>
            </div>

            {/* Books Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {storedbooks.map((book, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-4 shadow hover:shadow-lg transition"
                >
                  <img
                    src={book.image}
                    alt=""
                    className="h-40 w-2xl object-contain bg-gray-100 rounded-lg mb-3"
                  />

                  <h3 className="text-lg font-bold text-gray-800">
                    {book.bookName}
                  </h3>

                  <p className="text-gray-500 text-sm mb-2">
                    by {book.author}
                  </p>

                  <div className="flex justify-between text-sm mt-3">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                      {book.category}
                    </span>

                  <span className="flex items-center gap-1 text-gray-600">
  <Star size={16} className="text-yellow-500 fill-yellow-400" />
  {book.rating}
</span>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </TabPanel>

        {/* ===================== WISH LIST ===================== */}

        <TabPanel>
          <div className="mt-6">

            {/* Counter */}
            <div className="mb-6 p-4 bg-yellow-50 rounded-xl">
              <h2 className="text-lg font-semibold text-yellow-700">
                Wishlist Books: {wishbooks.length}
              </h2>
            </div>

            {/* Books Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {wishbooks.map((book, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-4 shadow hover:shadow-lg transition"
                >
                 <img
                        src={book.image}
                          alt={book.bookName}
                          className="h-40 w-2xl object-contain bg-gray-100 rounded-lg mb-3"
                        />

                  <h3 className="text-lg font-bold text-gray-800">
                    {book.bookName}
                  </h3>

                  <p className="text-gray-500 text-sm mb-2">
                    by {book.author}
                  </p>

                  <div className="flex justify-between text-sm mt-3">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded">
                      {book.category}
                    </span>

                    <span className="flex items-center gap-1 text-gray-600">
  <Star size={16} className="text-yellow-500 fill-yellow-400" />
  {book.rating}
</span>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </TabPanel>

      </Tabs>
    </div>
    );
};

export default Book;