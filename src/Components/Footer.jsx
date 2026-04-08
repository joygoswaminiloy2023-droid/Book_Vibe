import React from 'react';
import  logo from '../assets/book.ico'

const Footer = () => {
    return (
  <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mt-auto">

  <aside>
    <div className="flex items-center gap-2">
      <img src={logo} alt="logo" className="w-8 h-8" />
      <h1 className="text-xl font-bold text-gray-800">
        Book <span className="text-green-600">Vibe</span>
      </h1>
    </div>

    <p className="mt-2 text-sm text-gray-500">
      ACME Industries Ltd. <br />
      Providing reliable tech since 1992
    </p>
  </aside>

  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>

  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>

  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>

</footer>
    );
};

export default Footer;