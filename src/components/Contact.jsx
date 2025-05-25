import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, Linkedin, Github, Coffee, Code, Heart, Send, User, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const developerInfo = {
    name: "Rohith Krishna",
    role: "Full-Stack Developer",
    description: "Passionate developer who brought FUSE's memories to life through code",
    email: "rohithkrishna.dev@gmail.com",
    instagram: "rohith_krishna_dev",
    linkedin: "rohith-krishna-dev",
    github: "rohithkrishna"
  }

  const techStack = [
    "React", "Tailwind CSS", "Framer Motion", "Vite", "JavaScript"
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
            <span className="glitch-text neon-text text-cyber-yellow" data-text="CONTACT & CREDITS">
              CONTACT & CREDITS
            </span>
          </h2>
          <p className="text-xl text-cyber-green font-mono">
            &gt; Made with caffeine and code_
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Developer Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-cyber-blue overflow-hidden">
                  <img 
                    src="/api/placeholder/150/150" 
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-cyber font-bold text-cyber-blue mb-2">
                  {developerInfo.name}
                </h3>
                <p className="text-cyber-pink font-mono mb-4">{developerInfo.role}</p>
                <p className="text-gray-300 text-sm">{developerInfo.description}</p>
              </div>

              {/* Fun Tagline */}
              <motion.div 
                className="text-center mb-6 p-4 bg-cyber-green/10 border border-cyber-green/20 rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center justify-center space-x-2 text-cyber-green font-mono">
                  <Coffee className="w-4 h-4" />
                  <span>Fueled by coffee</span>
                  <Code className="w-4 h-4" />
                  <span>Powered by passion</span>
                  <Heart className="w-4 h-4 text-cyber-pink" />
                </div>
              </motion.div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-cyber-purple font-bold mb-3">Built with:</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span 
                      key={tech}
                      className="px-3 py-1 bg-cyber-purple/20 border border-cyber-purple/30 rounded-full text-sm font-mono"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <motion.a
                  href={`mailto:${developerInfo.email}`}
                  className="flex items-center space-x-3 text-cyber-blue hover:text-cyber-pink transition-colors duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="font-mono">{developerInfo.email}</span>
                </motion.a>

                <motion.a
                  href={`https://instagram.com/${developerInfo.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-cyber-pink hover:text-cyber-blue transition-colors duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <Instagram className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="font-mono">@{developerInfo.instagram}</span>
                </motion.a>

                <motion.a
                  href={`https://linkedin.com/in/${developerInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-cyber-blue hover:text-cyber-green transition-colors duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <Linkedin className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="font-mono">@{developerInfo.linkedin}</span>
                </motion.a>

                <motion.a
                  href={`https://github.com/${developerInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-cyber-green hover:text-cyber-orange transition-colors duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <Github className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="font-mono">@{developerInfo.github}</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card">
              <h3 className="text-2xl font-cyber font-bold text-cyber-blue mb-6">
                Get In Touch
              </h3>
              
              {isSubmitted ? (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-6xl mb-4">✨</div>
                  <h4 className="text-2xl font-cyber text-cyber-green mb-2">Message Sent!</h4>
                  <p className="text-cyber-blue font-mono">Thanks for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-cyber-pink font-mono mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-cyber-gray/20 border border-cyber-blue/30 rounded-lg px-4 py-3 text-white font-mono focus:border-cyber-pink focus:outline-none focus:ring-2 focus:ring-cyber-pink/20 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-cyber-green font-mono mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-cyber-gray/20 border border-cyber-blue/30 rounded-lg px-4 py-3 text-white font-mono focus:border-cyber-pink focus:outline-none focus:ring-2 focus:ring-cyber-pink/20 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-cyber-orange font-mono mb-2">
                      <MessageSquare className="inline w-4 h-4 mr-2" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-cyber-gray/20 border border-cyber-blue/30 rounded-lg px-4 py-3 text-white font-mono focus:border-cyber-pink focus:outline-none focus:ring-2 focus:ring-cyber-pink/20 transition-all duration-300 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="cyber-button w-full flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Website Stats */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-cyber font-bold text-center mb-12 text-cyber-purple">
            Website Statistics
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="cyber-card text-center">
              <div className="text-2xl font-cyber font-bold text-cyber-blue mb-2">7</div>
              <div className="text-cyber-pink font-mono text-sm">Sections</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-2xl font-cyber font-bold text-cyber-green mb-2">69</div>
              <div className="text-cyber-orange font-mono text-sm">Students</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-2xl font-cyber font-bold text-cyber-purple mb-2">500+</div>
              <div className="text-cyber-yellow font-mono text-sm">Photos</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-2xl font-cyber font-bold text-cyber-pink mb-2">∞</div>
              <div className="text-cyber-blue font-mono text-sm">Memories</div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-16 pt-8 border-t border-cyber-blue/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 font-mono text-sm mb-4">
            © 2025 FUSE ECE Batch. Made with{' '}
            <Heart className="inline w-4 h-4 text-cyber-pink mx-1" />
            and lots of{' '}
            <Coffee className="inline w-4 h-4 text-cyber-orange mx-1" />
          </p>
          <p className="text-cyber-blue font-mono text-xs">
            &gt; system.exit("Thanks for visiting our legacy")_
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
