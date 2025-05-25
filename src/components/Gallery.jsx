import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shuffle, X, Play, Image, Video, Filter } from 'lucide-react'

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [filter, setFilter] = useState('all')
  const [randomMemory, setRandomMemory] = useState(null)

  const mediaItems = [
    { id: 1, type: 'image', src: '/api/placeholder/400/300', title: 'Graduation Day', category: 'graduation', date: 'May 2025' },
    { id: 2, type: 'video', src: '/api/placeholder/400/300', title: 'Farewell Speech', category: 'farewell', date: 'May 2025' },
    { id: 3, type: 'image', src: '/api/placeholder/400/300', title: 'Lab Session', category: 'academic', date: 'March 2024' },
    { id: 4, type: 'image', src: '/api/placeholder/400/300', title: 'Group Photo', category: 'friends', date: 'April 2024' },
    { id: 5, type: 'video', src: '/api/placeholder/400/300', title: 'Tech Fest Highlights', category: 'events', date: 'April 2024' },
    { id: 6, type: 'image', src: '/api/placeholder/400/300', title: 'Onam Celebration', category: 'festivals', date: 'September 2023' },
    { id: 7, type: 'image', src: '/api/placeholder/400/300', title: 'Study Session', category: 'academic', date: 'February 2024' },
    { id: 8, type: 'video', src: '/api/placeholder/400/300', title: 'Sports Day', category: 'sports', date: 'January 2024' },
    { id: 9, type: 'image', src: '/api/placeholder/400/300', title: 'Canteen Moments', category: 'friends', date: 'March 2023' },
    { id: 10, type: 'image', src: '/api/placeholder/400/300', title: 'Project Presentation', category: 'academic', date: 'April 2025' },
    { id: 11, type: 'video', src: '/api/placeholder/400/300', title: 'Industrial Visit', category: 'trips', date: 'March 2024' },
    { id: 12, type: 'image', src: '/api/placeholder/400/300', title: 'Random Fun', category: 'friends', date: 'January 2023' },
    { id: 13, type: 'image', src: '/api/placeholder/400/300', title: 'Workshop', category: 'academic', date: 'November 2023' },
    { id: 14, type: 'image', src: '/api/placeholder/400/300', title: 'College Fest', category: 'events', date: 'February 2024' },
    { id: 15, type: 'video', src: '/api/placeholder/400/300', title: 'Reunion Planning', category: 'friends', date: 'May 2025' },
  ]

  const categories = [
    { key: 'all', label: 'All Memories', color: 'cyber-blue' },
    { key: 'graduation', label: 'Graduation', color: 'cyber-pink' },
    { key: 'academic', label: 'Academic', color: 'cyber-green' },
    { key: 'friends', label: 'Friends', color: 'cyber-orange' },
    { key: 'events', label: 'Events', color: 'cyber-purple' },
    { key: 'trips', label: 'Trips', color: 'cyber-yellow' },
    { key: 'festivals', label: 'Festivals', color: 'neon-pink' },
    { key: 'sports', label: 'Sports', color: 'neon-blue' },
  ]

  const filteredMedia = filter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === filter)

  const showRandomMemory = () => {
    const randomItem = mediaItems[Math.floor(Math.random() * mediaItems.length)]
    setRandomMemory(randomItem)
    setTimeout(() => setRandomMemory(null), 3000)
  }

  const openModal = (item) => {
    setSelectedMedia(item)
  }

  const closeModal = () => {
    setSelectedMedia(null)
  }

  // Lazy loading effect
  useEffect(() => {
    const imageElements = document.querySelectorAll('.lazy-image')
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.classList.add('loaded')
          observer.unobserve(img)
        }
      })
    })

    imageElements.forEach(img => imageObserver.observe(img))

    return () => imageObserver.disconnect()
  }, [filteredMedia])

  return (
    <div className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-cyber font-black mb-4">
            <span className="glitch-text neon-text text-cyber-green" data-text="MEMORY VAULT">
              MEMORY VAULT
            </span>
          </h2>
          <p className="text-xl text-cyber-orange font-mono mb-8">
            &gt; Random memories from our journey_
          </p>
          
          {/* Random Memory Button */}
          <motion.button
            onClick={showRandomMemory}
            className="cyber-button border-cyber-orange text-cyber-orange hover:bg-cyber-orange hover:text-black mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Shuffle className="inline mr-2 w-4 h-4" />
            Random Memory
          </motion.button>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-4 py-2 rounded-full border font-mono text-sm transition-all duration-300 ${
                filter === category.key 
                  ? `bg-${category.color} text-black border-${category.color}` 
                  : `border-${category.color} text-${category.color} hover:bg-${category.color}/20`
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="inline mr-1 w-3 h-3" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Media Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredMedia.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="relative overflow-hidden rounded-lg border border-cyber-blue/30 hover:border-cyber-pink/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,128,0.3)]">
                  {/* Media Item */}
                  <div className="relative aspect-square">
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="lazy-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-0"
                      style={{ transition: 'opacity 0.3s' }}
                      onLoad={(e) => e.target.style.opacity = 1}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-white font-cyber font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-cyber-blue font-mono text-xs">{item.date}</p>
                      </div>
                    </div>

                    {/* Media Type Icon */}
                    <div className="absolute top-4 right-4">
                      {item.type === 'video' ? (
                        <div className="bg-cyber-green/80 rounded-full p-2">
                          <Video className="w-4 h-4 text-black" />
                        </div>
                      ) : (
                        <div className="bg-cyber-blue/80 rounded-full p-2">
                          <Image className="w-4 h-4 text-black" />
                        </div>
                      )}
                    </div>

                    {/* Play Button for Videos */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-cyber-green/80 rounded-full p-4">
                          <Play className="w-8 h-8 text-black" />
                        </div>
                      </div>
                    )}

                    {/* Glitch Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-cyber-pink via-transparent to-cyber-blue mix-blend-overlay"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredMedia.length >= 12 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button className="cyber-button">
              Load More Memories
            </button>
          </motion.div>
        )}

        {/* Random Memory Overlay */}
        <AnimatePresence>
          {randomMemory && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="absolute inset-0 bg-cyber-darker/90 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              
              <motion.div
                className="relative max-w-2xl w-full"
                initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotateY: -180 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <div className="bg-cyber-gray/95 backdrop-blur-md border-2 border-cyber-orange rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-cyber font-bold text-cyber-orange mb-4 animate-pulse">
                    RANDOM MEMORY
                  </h3>
                  <img 
                    src={randomMemory.src} 
                    alt={randomMemory.title}
                    className="w-full h-64 object-cover rounded-lg border border-cyber-orange/30 mb-4"
                  />
                  <h4 className="text-xl font-cyber text-white mb-2">{randomMemory.title}</h4>
                  <p className="text-cyber-blue font-mono">{randomMemory.date}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="absolute inset-0 bg-cyber-darker/90 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              />
              
              <motion.div
                className="relative bg-cyber-gray/95 backdrop-blur-md border border-cyber-blue/30 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-cyber-pink hover:text-white transition-colors duration-300 z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-center">
                  <img 
                    src={selectedMedia.src} 
                    alt={selectedMedia.title}
                    className="w-full max-h-96 object-contain rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-cyber font-bold text-cyber-blue mb-2">{selectedMedia.title}</h3>
                  <p className="text-cyber-green font-mono">{selectedMedia.date}</p>
                  
                  {selectedMedia.type === 'video' && (
                    <div className="mt-4 p-4 bg-cyber-green/10 border border-cyber-green/20 rounded-lg">
                      <p className="text-cyber-green font-mono text-sm">
                        Video content would be displayed here
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Gallery
