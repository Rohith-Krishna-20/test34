import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, ChevronDown, ChevronUp, Image, Video } from 'lucide-react'

const Trips = () => {
  const [expandedTrip, setExpandedTrip] = useState(null)

  const trips = [
    {
      id: 1,
      title: "Industrial Visit - TechCorp",
      date: "March 2024",
      location: "Technopark, Trivandrum",
      description: "An enlightening visit to one of Kerala's leading tech companies, exploring cutting-edge technologies and industry practices.",
      participants: 65,
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300", "/api/placeholder/400/300"],
      videos: ["sample-video-1.mp4"],
      highlights: ["Factory Tour", "Tech Demos", "Industry Insights", "Career Guidance"]
    },
    {
      id: 2,
      title: "Educational Tour - ISRO",
      date: "January 2024",
      location: "Vikram Sarabhai Space Centre",
      description: "A fascinating journey into India's space program, witnessing rocket assembly and satellite technologies.",
      participants: 69,
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
      videos: ["sample-video-2.mp4"],
      highlights: ["Rocket Assembly", "Mission Control", "Satellite Tech", "Space Research"]
    },
    {
      id: 3,
      title: "College Excursion",
      date: "November 2023",
      location: "Munnar, Kerala",
      description: "A memorable trip to the beautiful hill station, perfect for bonding and creating lasting memories.",
      participants: 67,
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300", "/api/placeholder/400/300", "/api/placeholder/400/300"],
      videos: [],
      highlights: ["Tea Gardens", "Scenic Views", "Group Activities", "Photography"]
    },
    {
      id: 4,
      title: "Technical Workshop",
      date: "September 2023",
      location: "IIT Madras",
      description: "Intensive workshop on emerging technologies and research methodologies in ECE.",
      participants: 58,
      images: ["/api/placeholder/400/300"],
      videos: ["sample-video-3.mp4"],
      highlights: ["Research Labs", "Expert Sessions", "Hands-on Training", "Project Demos"]
    }
  ]

  const toggleExpanded = (tripId) => {
    setExpandedTrip(expandedTrip === tripId ? null : tripId)
  }

  return (
    <div className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-cyber font-black mb-4">
            <span className="glitch-text neon-text text-cyber-pink" data-text="TRIPS & TOURS">
              TRIPS & TOURS
            </span>
          </h2>
          <p className="text-xl text-cyber-blue font-mono">
            &gt; Journey through our adventures_
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-cyber-blue via-cyber-pink to-cyber-purple h-full"></div>

          {trips.map((trip, index) => (
            <motion.div
              key={trip.id}
              className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-cyber-pink rounded-full border-4 border-cyber-darker flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>

              {/* Content card */}
              <motion.div 
                className={`ml-12 md:ml-0 cyber-card ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <h3 className="text-2xl font-cyber font-bold text-cyber-blue mb-2">{trip.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-cyber-green font-mono">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {trip.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {trip.participants}
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-cyber-orange mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="font-mono">{trip.location}</span>
                </div>

                <p className="text-gray-300 mb-4">{trip.description}</p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-cyber-purple font-bold mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {trip.highlights.map((highlight, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-cyber-purple/20 border border-cyber-purple/30 rounded-full text-sm font-mono"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expand button */}
                <motion.button
                  onClick={() => toggleExpanded(trip.id)}
                  className="cyber-button w-full flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {expandedTrip === trip.id ? (
                    <>Hide Gallery <ChevronUp className="ml-2 w-4 h-4" /></>
                  ) : (
                    <>View Gallery <ChevronDown className="ml-2 w-4 h-4" /></>
                  )}
                </motion.button>

                {/* Expanded content */}
                {expandedTrip === trip.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 p-4 border-t border-cyber-blue/30"
                  >
                    {/* Image gallery */}
                    {trip.images.length > 0 && (
                      <div className="mb-6">
                        <h5 className="text-cyber-blue font-bold mb-3 flex items-center">
                          <Image className="w-4 h-4 mr-2" />
                          Photos
                        </h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {trip.images.map((image, i) => (
                            <motion.div
                              key={i}
                              className="relative group overflow-hidden rounded-lg border border-cyber-blue/30"
                              whileHover={{ scale: 1.05 }}
                            >
                              <img 
                                src={image} 
                                alt={`${trip.title} - Photo ${i + 1}`}
                                className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-mono text-sm">View</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Video section */}
                    {trip.videos.length > 0 && (
                      <div>
                        <h5 className="text-cyber-green font-bold mb-3 flex items-center">
                          <Video className="w-4 h-4 mr-2" />
                          Videos
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {trip.videos.map((video, i) => (
                            <div 
                              key={i}
                              className="relative bg-cyber-gray/20 rounded-lg p-4 border border-cyber-green/30 flex items-center justify-center h-24"
                            >
                              <span className="text-cyber-green font-mono text-sm">
                                Video {i + 1} - {video}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trips
