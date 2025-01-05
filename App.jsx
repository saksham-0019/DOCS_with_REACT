
// React aur useState ka import karte hain, jo ki ek hook hai state manage karne ke liye.
import React, { useState } from 'react';

// Close button ke liye ek icon import karte hain.
import { CgCloseR } from "react-icons/cg";

// Background aur Foreground components ko import karte hain.
import Background from './components/Background';
import Foreground from './components/Foreground';

// App naam ka ek React component banate hain.
const App = () => {
  // State banate hain 'selectedCard' ke liye, jo initially null hoti hai.
  const [selectedCard, setSelectedCard] = useState(null);

  // Component ka main JSX return karte hain.
  return (
    // Ek div jo full-screen layout define karta hai.
    <div className="relative w-full h-screen bg-zinc-800">
      
      {/* Background component ko render karte hain */}
      <Background />
      
      {/* Foreground component render karte hain aur setSelectedCard function ko pass karte hain props ke through */}
      <Foreground setSelectedCard={setSelectedCard} />
      
      {/* Agar selectedCard ki value null nahi hai tabhi yeh block chalega */}
      {selectedCard && (
        // Sidebar ke liye ek fixed div banate hain.
        <div className="fixed top-0 right-0 w-80 h-full bg-zinc-900 text-white p-5 z-[4] shadow-lg">
          
          {/* Card ke details dikhane ke liye */}
          <h2 className="text-xl font-bold mb-3">Card Details</h2>
          <p><strong>Description:</strong> {selectedCard.desc}</p> {/* Description dikhate hain */}
          <p><strong>File Size:</strong> {selectedCard.filesize}</p> {/* File size dikhate hain */}
          
          {/* Agar tag ka 'isOpen' property true hai tabhi tag title dikhate hain */}
          {selectedCard.tag.isOpen && (
            <p><strong>Tag:</strong> {selectedCard.tag.tagTitle}</p>
          )}

          {/* Close button banate hain */}
          <button
            onClick={() => setSelectedCard(null)} // Button click hone par selectedCard ko null karte hain
            className="mt-5 flex items-center justify-center bg-slate-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            {/* Icon ke saath button ka text */}
            <CgCloseR className="mr-2 text-2xl" /> Close
          </button>
        </div>
      )}
    </div>
  );
};

// Component ko export karte hain taki yeh use ho sake.
export default App;
