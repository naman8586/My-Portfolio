import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Footer = () => {
  return (
    <div className="mt-20 py-12 bg-gray-100 dark:bg-darkTheme">
      <div className="text-center mb-8">
        <div className="flex items-center gap-2 justify-center text-gray-700 dark:text-white">
          <Image src={assets.mail_icon} alt="Mail Icon" className="w-6" />
          <span className="text-lg font-medium">namanverma8586@gmail.com</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
          © Naman Soni. All rights reserved
        </p>
        <ul className="flex justify-center gap-8 text-gray-700 dark:text-gray-300">
          <li>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://github.com/naman8586" 
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-900 dark:hover:text-white hover:underline"
            >
              Github
            </a>
          </li>
          <li>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://www.linkedin.com/in/naman-soni-6977952b1/" 
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-900 dark:hover:text-white hover:underline"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://x.com/_verma__naman_" 
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-900 dark:hover:text-white hover:underline"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;