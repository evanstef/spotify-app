"use client"

import React, { useState,useEffect } from 'react';

const ElementToHide = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClickOutside = (event : any) => {
        const element = document.getElementById('elementToHide');
        if (element && !element.contains(event.target)) {
            setIsVisible(false); // Set isVisible menjadi false jika area di luar elemen diklik
        }
    };

    // Tambahkan event listener ketika komponen dimount
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        // Tampilkan elemen berdasarkan nilai isVisible
        <div id="elementToHide" className={`bg-gray-200 p-4 ${isVisible ? '' : 'hidden'}`}>
            Element to hide. Click outside this element to hide it.
        </div>
    );
};

export default ElementToHide;