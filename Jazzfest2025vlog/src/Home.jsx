import { Player } from '@lottiefiles/react-lottie-player';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import musicNote from './Music notes.json';
import jazzCat from './assets/jazz-2025.jpg'

export default function Home() {
  return (
    <div>
      <div id="main-title">
        <h1 className="text-4xl font-bold mb-6">JazzFest 2025 Highlights</h1>
      </div>
      <span className="body-page"></span>
      <Player
        autoplay
        loop
        src={musicNote}
        style={{ height: '200px', width: '200px', margin: '0 auto' }}
      />
      <motion.img
        src= {jazzCat} 
        alt="jazz-cat-2025"
        className="bouncy-image"
        animate={{ x: 100 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
      />
    </div>
    
  );
}