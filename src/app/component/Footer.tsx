import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 mt-12 bg-white">
            <div className="container mx-auto px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left font-sans">
            
                <p className="text-sm md:text-base font-medium text-gray-800">
                    বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                </p>

                
                <p className="text-xs md:text-sm font-normal text-gray-500">
                    সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হতে পারে।
                </p>
            </div>
        </footer>
    );
};

export default Footer;