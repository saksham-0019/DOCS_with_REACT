// React aur icons ko import karte hain.
import React from 'react';
import { FaFileLines } from "react-icons/fa6"; // File icon import karte hain
import { ImDownload } from "react-icons/im"; // Download icon import karte hain
import { IoClose } from "react-icons/io5"; // Close icon import karte hain
import { MdDelete } from "react-icons/md"; // Delete icon import karte hain
import { motion } from 'framer-motion'; // Motion effects ke liye framer-motion import karte hain

// Card component banate hain jo props accept karta hai.
function Card({ data, reference, onDelete, onClick }) {
  return (
    // motion.div component use karte hain jo drag functionality provide karta hai
    <motion.div
      drag // Element ko drag karne ka option dete hain
      dragConstraints={reference} // Drag constraints define karte hain
      dragElastic={0.3} // Elasticity effect add karte hain jab element drag hota hai
      whileDrag={{ scale: 1.1 }} // Drag karte waqt element ko scale karte hain
      dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }} // Bouncing effect define karte hain jab drag transition hota hai
      className="relative w-60 h-80 rounded-[40px] bg-zinc-900/90 px-8 py-10 overflow-hidden text-white shadow-lg flex-shrink-0"
      onClick={onClick} // Card pe click hone par onClick function trigger hota hai
    >
      {/* File Icon ke liye section */}
      <div className="flex justify-center mb-4">
        <FaFileLines className="text-4xl" /> {/* File icon render karte hain */}
      </div>

      {/* Description dikhane ke liye */}
      <p className="text-xs mt-4 leading-tight font-semibold text-center">
        {data.desc} {/* Card description ko show karte hain */}
      </p>

      {/* Bottom section mein file size aur tag dikhana */}
      <div className="absolute bottom-0 w-full left-0 flex flex-col">
        {/* File Size aur Icon ke liye */}
        <div className="flex items-center mb-1 py-3 px-8 justify-between">
          <h5>{data.filesize}</h5> {/* File size dikhate hain */}
          
          {/* Close ya Download icon dikhate hain */}
          <span className="w-7 h-7 bg-slate-500 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose size="1em" color="#fff" /> // Agar card close ho sakta hai toh close icon show karo
            ) : (
              <ImDownload size="1em" color="#fff" /> // Agar download ho sakta hai toh download icon show karo
            )}
          </span>
        </div>

        {/* Agar tag open hai toh usko render karte hain */}
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${data.tag.tagColor} flex items-center justify-center`}
          >
            <h3 className="font-semibold text-sm text-slate-300">
              {data.tag.tagTitle} {/* Tag title ko show karte hain */}
            </h3>
          </div>
        )}
      </div>

      {/* Delete button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Isse click event parent element tak propagate nahi hota
          onDelete(); // Delete function trigger karte hain
        }}
        className="absolute top-2 right-2 text-white font-bold py-1 px-2 rounded flex items-center justify-center"
      >
        <MdDelete size="1.5em" /> {/* Delete icon ko render karte hain */}
      </button>
    </motion.div>
  );
}

export default Card; // Card component ko export karte hain
