import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Users, X, Image, Video, Star } from 'lucide-react'

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const events = [
    {
      id: 1,
      title: "TECHFEST 2024",
      date: "April 15-17, 2024",
      location: "MEC Campus",
      description: "Annual technical festival showcasing innovation and creativity in engineering.",
      type: "Festival",
      participants: 500,
      images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"],
      videos: ["techfest-highlights.mp4"],
      highlights: ["Tech Exhibitions", "Coding Competitions", "Robotics Show", "Guest Lectures"],
      rating: 5
    },
    {
      id: 2,
      title: "Farewell Celebration",
      date: "May 10, 2025",
      location: "College Auditorium",
      description: "Emotional farewell ceremony celebrating four years of friendship and learning.",
      type: "Celebration",
      participants: 200,
      images: ["/api/placeholder/600/400", "/api/placeholder/600/400"],
      videos: ["farewell-moments.mp4"],
      highlights: ["Speeches", "Award Ceremony", "Cultural Programs", "Memory Lane"],
      rating: 5
    },
    {
      id: 3,
      title: "ECE Symposium",
      date: "February 28, 2024",
      location: "Department Seminar Hall",
      description: "Academic symposium featuring paper presentations and research discussions.",
      type: "Academic",
      participants: 120,
      images: ["/api/placeholder/600/400"],
      videos: [],
      highlights: ["Paper Presentations", "Research Talks", "Industry Interaction", "Awards"],
      rating: 4
    },
    {
      id: 4,
      title: "Onam Celebration",
      date: "September 8, 2023",
      location: "College Grounds",
      description: "Traditional Kerala festival celebration with cultural programs and feast.",
      type: "Cultural",
      participants: 300,
      images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"],
      videos: ["onam-celebration.mp4"],
      highlights: ["Pookalam Competition", "Traditional Dance", "Onam Sadhya", "Games"],
      rating: 5
    },
    {
      id: 5,
      title: "Sports Day",
      date: "January 20, 2024",
      location: "College Sports Complex",
      description: "Inter-batch sports competition with various indoor and outdoor games.",
      type: "Sports",
      participants: 180,
      images: ["/api/placeholder/600/400", "/api/placeholder/600/400"],
      videos: ["sports-day.mp4"],
      highlights: ["Cricket Tournament", "Football Match", "Badminton", "Athletic Events"],
      rating: 4
    },
    {
      id: 6,
      title: "Fresher's Day",
      date: "December 15, 2021",
      location: "Main Auditorium",
      description: "Welcome ceremony for the new batch with entertainment and introduction programs.",
      type: "Welcome",
      participants: 150,
      images: ["/api/placeholder/600/400"],
      videos: [],
      highlights: ["Welcome Speech", "Talent Show", "Ice Breaking", "Cultural Programs"],
      rating: 4
    }
  ]

  const getEventTypeColor = (type) => {
    const colors = {
      Festival: "text-cyber-pink border-cyber-pink",
      Celebration: "text-cyber-blue border-cyber-blue",
      Academic: "text-cyber-green border-cyber-green",
      Cultural: "text-cyber-orange border-cyber-orange",
      Sports: "text-cyber-purple border-cyber-purple",
      Welcome: "text-cyber-yellow border-cyber-yellow"
    }
    return colors[type] || "text-cyber-blue border-cyber-blue"
  }

  const openModal = (event) => {
    setSelectedEvent(event)
  }

  const closeModal = () => {
    setSelectedEvent(null)
  }

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
            <span className="glitch-text neon-text text-cyber-blue" data-text="EVENTS & FUNCTIONS">
              EVENTS & FUNCTIONS
            </span>
          </h2>
          <p className="text-xl text-cyber-pink font-mono">
            &gt; Memories that defined us_
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="cyber-card group cursor-pointer h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 0 30px rgba(0,255,255,0.3)"
              }}
              onClick={() => openModal(event)}
            >
              {/* Event Image */}
              <div className="relative overflow-hidden rounded-t-lg mb-4 h-48">
                <img 
                  src={event.images[0]} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/80 to-transparent"></div>
                
                {/* Event Type Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border ${getEventTypeColor(event.type)} bg-cyber-darker/80 backdrop-blur-sm`}>
                  <span className="text-xs font-mono font-bold">{event.type.toUpperCase()}</span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < event.rating ? 'text-cyber-yellow fill-current' : 'text-gray-500'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Event Info */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-cyber font-bold text-cyber-blue mb-2 group-hover:text-cyber-pink transition-colors duration-300">
                  {event.title}
                </h3>
                
                <div className="flex items-center text-sm text-cyber-green font-mono mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                
                <div className="flex items-center text-sm text-cyber-orange font-mono mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
                
                <p className="text-gray-300 text-sm mb-4 flex-1">{event.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-cyber-purple font-mono">
                    <Users className="w-4 h-4 mr-1" />
                    {event.participants}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {event.images.length > 0 && (
                      <div className="flex items-center text-xs text-cyber-blue">
                        <Image className="w-3 h-3 mr-1" />
                        {event.images.length}
                      </div>
                    )}
                    {event.videos.length > 0 && (
                      <div className="flex items-center text-xs text-cyber-green">
                        <Video className="w-3 h-3 mr-1" />
                        {event.videos.length}
                      </div>
                    )}
                  </div>
                </div>

                {/* Highlights Preview */}
                <div className="mt-3 pt-3 border-t border-cyber-blue/20">
                  <div className="flex flex-wrap gap-1">
                    {event.highlights.slice(0, 2).map((highlight, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-cyber-blue/10 border border-cyber-blue/20 rounded text-xs font-mono text-cyber-blue"
                      >
                        {highlight}
                      </span>
                    ))}
                    {event.highlights.length > 2 && (
                      <span className="px-2 py-1 text-xs font-mono text-cyber-pink">
                        +{event.highlights.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <motion.div 
                className="absolute inset-0 bg-cyber-darker/90 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              />
              
              {/* Modal Content */}
              <motion.div
                className="relative bg-cyber-gray/95 backdrop-blur-md border border-cyber-blue/30 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-cyber-pink hover:text-white transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Header */}
                <div className="mb-6">
                  <h3 className="text-3xl font-cyber font-bold text-cyber-blue mb-2">{selectedEvent.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-mono">
                    <div className="flex items-center text-cyber-green">
                      <Calendar className="w-4 h-4 mr-2" />
                      {selectedEvent.date}
                    </div>
                    <div className="flex items-center text-cyber-orange">
                      <MapPin className="w-4 h-4 mr-2" />
                      {selectedEvent.location}
                    </div>
                    <div className="flex items-center text-cyber-purple">
                      <Users className="w-4 h-4 mr-2" />
                      {selectedEvent.participants} participants
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6">{selectedEvent.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-cyber-pink font-bold mb-3">Event Highlights:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {selectedEvent.highlights.map((highlight, i) => (
                      <span 
                        key={i}
                        className="px-3 py-2 bg-cyber-pink/10 border border-cyber-pink/20 rounded text-sm font-mono text-center"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Images */}
                {selectedEvent.images.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-cyber-blue font-bold mb-3 flex items-center">
                      <Image className="w-4 h-4 mr-2" />
                      Photo Gallery
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedEvent.images.map((image, i) => (
                        <motion.div
                          key={i}
                          className="relative group overflow-hidden rounded-lg border border-cyber-blue/30"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src={image} 
                            alt={`${selectedEvent.title} - Photo ${i + 1}`}
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Videos */}
                {selectedEvent.videos.length > 0 && (
                  <div>
                    <h4 className="text-cyber-green font-bold mb-3 flex items-center">
                      <Video className="w-4 h-4 mr-2" />
                      Video Gallery
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedEvent.videos.map((video, i) => (
                        <div 
                          key={i}
                          className="bg-cyber-gray/20 rounded-lg p-6 border border-cyber-green/30 flex items-center justify-center h-32"
                        >
                          <span className="text-cyber-green font-mono">
                            Video {i + 1}: {video}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Events
