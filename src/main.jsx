import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from './Layout/Rootlayout.jsx';
import Home from './Pages/Home.jsx';
import Book from './Pages/Book.jsx';
import Pagetoread from './Pages/Pagetoread.jsx';
import Bookdetails from './Pages/Bookdetails/Bookdetails.jsx';
import Errorpage from './Components/Errorpage.jsx';
import BookProvider from './Components/Bookcontext/Bookprovider.jsx';
import { ToastContainer } from 'react-toastify';





const router= createBrowserRouter(
[
{
  path:"/",
element:<Rootlayout></Rootlayout>,
children: [
  {
    index:true,
    element:<Home></Home>
  },
  {
    path:"/books",
    element:<Book></Book>
  },
  {
    path:"/page_to_read",
    element:<Pagetoread></Pagetoread>
  },
  {
    path:"/bookdetails/:id",
    element:<Bookdetails></Bookdetails>,
    loader:()=>fetch("/booksData.json")
  }


  ],
errorElement:<Errorpage></Errorpage>

}

]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
    </BookProvider>
  </StrictMode>,
)
