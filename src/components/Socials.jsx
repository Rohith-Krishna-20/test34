import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Instagram, ExternalLink, Heart, Users, TrendingUp } from 'lucide-react'

const Socials = () => {
  const [followersCount, setFollowersCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    // Animate followers count
    const targetCount = 1250
    const duration = 2000
    const stepTime = duration / targetCount
    
    let currentCount = 0
    const timer = setInterval(() => {
      currentCount += Math.ceil(targetCount / 100)
      if (currentCount >= targetCount) {
        currentCount = targetCount
        clearInterval(timer)
      }
      setFollowersCount(currentCount)
    }, stepTime)

    return () => clearInterval(timer)
  }, [])

  const socialPosts = [
    {
      id: 1,
      image: "/api/placeholder/400/400",
      caption: "Graduation day vibes! 🎓 Four years of memories, friendships, and learning. #FUSE2025 #Graduation",
      likes: 245,
      date: "2 days ago"
    },
    {
      id: 2,
      image: "/api/placeholder/400/400",
      caption: "Farewell party was emotional but amazing! Going to miss these faces 😭❤️ #FarewellFUSE",
      likes: 189,
      date: "1 week ago"
    },
    {
      id: 3,
      image: "/api/placeholder/400/400",
      caption: "Last lab session together! ECE squad forever 💙 #LabLife #FUSE #ECE",
      likes: 156,
      date: "2 weeks ago"
    },
    {
      id: 4,
      image: "/api/placeholder/400/400",
      caption: "Tech fest winners! Our project on IoT won first place 🏆 #TechFest #Innovation",
      likes: 201,
      date: "3 weeks ago"
    }
  ]

  const classHandles = [
    {
      platform: "Instagram",
      handle: "@fuse_ece_2025",
      followers: "1.2K",
      icon: Instagram,
      color: "cyber-pink",
      description: "Official class Instagram with all our memories and updates"
    }
  ]

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
            <span className="glitch-text neon-text text-cyber-orange" data-text="SOCIAL LINKS">
              SOCIAL LINKS
            </span>
          </h2>
          <p className="text-xl text-cyber-blue font-mono">
            &gt; Stay connected with FUSE_
          </p>
        </motion.div>

        {/* Main Social Handle */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {classHandles.map((social, index) => (
            <div key={index} className="cyber-card text-center max-w-2xl mx-auto">
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-${social.color} mb-4`}>
                  <social.icon className={`w-10 h-10 text-${social.color}`} />
                </div>
                <h3 className="text-3xl font-cyber font-bold text-cyber-blue mb-2">{social.platform}</h3>
                <p className={`text-2xl font-mono text-${social.color} mb-4`}>{social.handle}</p>
                <p className="text-gray-300 mb-6">{social.description}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <motion.div 
                    className="text-3xl font-cyber font-bold text-cyber-green"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {followersCount.toLocaleString()}
                  </motion.div>
                  <div className="text-sm font-mono text-gray-400">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-cyber font-bold text-cyber-purple">127</div>
                  <div className="text-sm font-mono text-gray-400">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-cyber font-bold text-cyber-orange">69</div>
                  <div className="text-sm font-mono text-gray-400">Following</div>
                </div>
              </div>

              {/* Follow Button */}
              <motion.a
                href="https://instagram.com/fuse_ece_2025"
                target="_blank"
                rel="noopener noreferrer"
                className={`cyber-button border-${social.color} text-${social.color} hover:bg-${social.color} hover:text-black inline-flex items-center`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="mr-2 w-5 h-5" />
                Follow Us
                <ExternalLink className="ml-2 w-4 h-4" />
              </motion.a>
            </div>
          ))}
        </motion.div>

        {/* Recent Posts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-cyber font-bold text-center mb-12 text-cyber-pink">
            Recent Posts
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="cyber-card group cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Post Image */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={post.image} 
                    alt="Social post"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/60 to-transparent"></div>
                  
                  {/* Instagram overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-pink/20 via-cyber-purple/20 to-cyber-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Post Info */}
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm line-clamp-3">{post.caption}</p>
                  
                  <div className="flex items-center justify-between">
                    <motion.button
                      className="flex items-center space-x-2 text-cyber-pink hover:text-cyber-blue transition-colors duration-300"
                      onClick={() => setIsLiked(!isLiked)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                      <span className="font-mono text-sm">{post.likes}</span>
                    </motion.button>
                    
                    <span className="text-gray-500 font-mono text-xs">{post.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Engagement Stats */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-cyber font-bold text-center mb-12 text-cyber-green">
            Social Engagement
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="cyber-card text-center"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="w-12 h-12 text-cyber-green mx-auto mb-4" />
              <div className="text-2xl font-cyber font-bold text-cyber-green mb-2">15.2K</div>
              <div className="text-cyber-blue font-mono">Total Likes</div>
            </motion.div>
            
            <motion.div 
              className="cyber-card text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-12 h-12 text-cyber-purple mx-auto mb-4" />
              <div className="text-2xl font-cyber font-bold text-cyber-purple mb-2">2.8K</div>
              <div className="text-cyber-blue font-mono">Comments</div>
            </motion.div>
            
            <motion.div 
              className="cyber-card text-center"
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink className="w-12 h-12 text-cyber-orange mx-auto mb-4" />
              <div className="text-2xl font-cyber font-bold text-cyber-orange mb-2">856</div>
              <div className="text-cyber-blue font-mono">Shares</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cyber-card max-w-2xl mx-auto">
            <h4 className="text-2xl font-cyber font-bold text-cyber-blue mb-4">
              Want to be featured?
            </h4>
            <p className="text-gray-300 mb-6">
              Tag us in your posts with <span className="text-cyber-pink font-mono">#FUSE2025</span> and 
              <span className="text-cyber-blue font-mono"> #ECEBatch</span> to get featured on our social media!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-cyber-pink/20 border border-cyber-pink/30 rounded-full text-cyber-pink font-mono text-sm">
                #FUSE2025
              </span>
              <span className="px-4 py-2 bg-cyber-blue/20 border border-cyber-blue/30 rounded-full text-cyber-blue font-mono text-sm">
                #ECEBatch
              </span>
              <span className="px-4 py-2 bg-cyber-green/20 border border-cyber-green/30 rounded-full text-cyber-green font-mono text-sm">
                #ModelEngineering
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Socials
