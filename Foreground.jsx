// React, useState, aur useRef ko import karte hain.
import React, { useState, useRef } from 'react';

// Card component ko import karte hain.
import Card from './Card';

// Foreground naam ka ek functional component banate hain jo props le raha hai.
function Foreground({ setSelectedCard }) {
  
  // Ek ref banate hain jo kisi DOM element ko refer karega.
  const ref = useRef(null);

  // Cards ki initial state banate hain (yeh ek array hai jo har card ki details store karta hai).
  const [cards, setCards] = useState([
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, beatae.", // Description of the card
      filesize: "0.9 MB", // File size
      close: true, // Close button ki availability
      tag: { isOpen: true, tagTitle: "Click it for more details", tagColor: "bg-sky-900" }, // Tag details
    },
    {
      desc: "Another example description for the file.",
      filesize: "1.2 MB",
      close: false,
      tag: { isOpen: true, tagTitle: "View details", tagColor: "bg-green-600" },
    },
    {
      desc: "File description goes here. Some random text.",
      filesize: "0.7 MB",
      close: true,
      tag: { isOpen: false, tagTitle: "", tagColor: "" },
    },
    {
      desc: "File description goes here. Some random text.",
      filesize: "0.7 MB",
      close: true,
      tag: { isOpen: false, tagTitle: "", tagColor: "" },
    },
    {
      desc: ("work","eat","sleep","repeat."),
      filesize: "1.2 MB",
      close: false,
      tag: { isOpen: true, tagTitle: "To-Do", tagColor: "bg-green-600" },
    },
    
    
  ]);

  // Ek function banate hain jo ek card ko delete karega.
  const deleteCard = (index) => {
    // Filter ka use karke ek nayi array banate hain jisme selected index ka card nahi hota.
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards); // State update karte hain.
  };

  // Component ka main JSX return karte hain.
  return (
    // Main container jo cards ko render karega.
    <div
      ref={ref} // Div ko reference assign karte hain.
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap justify-center items-center overflow-hidden"
    >
      {/* Cards array ko map karte hain aur har card ke liye ek Card component render karte hain */}
      {cards.map((item, index) => (
        <Card
          key={index} // Har card ke liye unique key assign karte hain.
          data={item} // Card ka data props ke through bhejte hain.
          reference={ref} // Ref ko bhi as a prop pass karte hain.
          onDelete={() => deleteCard(index)} // Delete button ke liye function pass karte hain.
          onClick={() => setSelectedCard(item)} // Card select karne par selectedCard ko update karte hain.
        />
      ))}
    </div>
  );
}

// Foreground component ko export karte hain.
export default Foreground;

