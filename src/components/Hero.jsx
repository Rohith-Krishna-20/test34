import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [glitchText, setGlitchText] = useState('FUSE')

  useEffect(() => {
    setIsLoaded(true)
    
    // Glitch effect for title
    const glitchInterval = setInterval(() => {
      const chars = ['F', 'U', 'S', 'E', '₣', 'Ʉ', '§', 'Ɇ', 'F̵', 'U̴', 'S̷', 'E̸']
      let newText = ''
      for (let i = 0; i < 4; i++) {
        newText += Math.random() > 0.8 ? chars[Math.floor(Math.random() * chars.length)] : 'FUSE'[i]
      }
      setGlitchText(newText)
      
      setTimeout(() => setGlitchText('FUSE'), 100)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  const scrollToNext = () => {
    document.querySelector('#trips').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker/40 via-cyber-darker/60 to-cyber-darker z-10"></div>
        <img 
          src="/api/placeholder/1920/1080" 
          alt="FUSE Class Group Photo"
          className="w-full h-full object-cover"
        />
        {/* Scanlines overlay */}
        <div className="absolute inset-0 bg-scanlines opacity-30 z-20"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-30 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          {/* Main Title */}
          <motion.h1 
            className="text-6xl md:text-9xl font-cyber font-black mb-4 relative"
            data-text={glitchText}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-purple neon-text">
              {glitchText}
            </span>
          </motion.h1>
          
          {/* Year Range */}
          <motion.div 
            className="text-2xl md:text-4xl font-mono text-cyber-green mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="animate-pulse">{'>'}</span> 2021 — 2025 <span className="animate-pulse">{'<'}</span>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-2xl text-cyber-blue font-cyber uppercase tracking-wider mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Electronics & Communication Engineering
            <br />
            <span className="text-cyber-pink">Model Engineering College</span>
          </motion.p>
          
          {/* Batch Info */}
          <motion.div 
            className="inline-block bg-cyber-gray/20 backdrop-blur-sm border border-cyber-blue/30 rounded-lg p-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="text-white font-mono">
              <span className="text-cyber-orange">BATCH:</span> Nov 2021 — May 2025
              <br />
              <span className="text-cyber-orange">STUDENTS:</span> 69 Legends
              <br />
              <span className="text-cyber-orange">STATUS:</span> <span className="text-cyber-green animate-pulse">GRADUATED</span>
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            <button 
              onClick={scrollToNext}
              className="cyber-button group"
            >
              <Play className="inline mr-2 w-4 h-4 group-hover:animate-pulse" />
              Start Journey
            </button>
            <button 
              onClick={() => document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' })}
              className="cyber-button border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-black"
            >
              View Memories
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          onClick={scrollToNext}
          className="flex flex-col items-center text-cyber-blue hover:text-cyber-pink transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-mono mb-2">SCROLL_DOWN</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.button>
      </motion.div>

      {/* Matrix-style falling code effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyber-green font-mono text-xs opacity-20"
            style={{ left: `${i * 10}%` }}
            animate={{ y: ['0vh', '100vh'] }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {Array(20).fill(0).map((_, j) => (
              <div key={j} className="mb-2">
                {Math.random().toString(36).substring(2, 8)}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Hero
