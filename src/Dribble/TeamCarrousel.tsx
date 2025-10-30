import { useState } from "react";
import { motion } from "framer-motion";


const teamMembers = [
  { name: "Camila Wilson", role: "Pro inert Gateway Support", image: "./images/camila.jpg" },
  { name: "Olive Nacelle", role: "VP of Customer Success", image: "./images/olive.jpg" },
  { name: "Sophie Chamberlain", role: "Specialized Support", image: "./images/sophie.jpg" },
  { name: "Jessica Dubrow", role: "Premium Support", image: "./images/jessica.jpg" },
  { name: "Orlando Diggs", role: "Customer Success Lead", image: "./images/orlando.jpg" },
  { name: "Orlando Diggs", role: "Customer Success Lead", image: "./images/orlando.jpg" },
  { name: "Orlando Diggs", role: "Customer Success Lead", image: "./images/orlando.jpg" },
  { name: "Orlando Diggs", role: "Customer Success Lead", image: "./images/orlando.jpg" }
];

export default function TeamCarousel() {
  const [currentIndex] = useState(0);
  const [phone, SetPhone] = useState("");


  return (
    <div className="relative w-full justify-center items-center overflow-hidden">
      
      <motion.div
        key={currentIndex}
        className="flex space-x-5"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        
      >
        <div className="w-60 p-4 bg-white rounded-lg shadow-lg text-center">
          <img src={teamMembers[currentIndex].image} alt={teamMembers[currentIndex].name} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h3 className="text-lg font-semibold">{teamMembers[currentIndex].name}</h3>
          <p className="text-gray-500">{teamMembers[currentIndex].role}</p>
        </div>
      </motion.div>
      
    </div>
  );
}
