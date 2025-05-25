import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Search, Filter, Users } from 'lucide-react'

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')

  // Sample student data - you can replace with actual data
  const students = [
    { id: 1, name: "Aadhav Krishnan", instagram: "aadhav_k", linkedin: "aadhav-krishnan", image: "/api/placeholder/300/300" },
    { id: 2, name: "Abhiram Nair", instagram: "abhiram_nair", linkedin: "abhiram-nair", image: "/api/placeholder/300/300" },
    { id: 3, name: "Adithya Menon", instagram: "adithya_m", linkedin: "adithya-menon", image: "/api/placeholder/300/300" },
    { id: 4, name: "Aishwarya Pillai", instagram: "aishwarya_p", linkedin: "aishwarya-pillai", image: "/api/placeholder/300/300" },
    { id: 5, name: "Akash Kumar", instagram: "akash_kumar", linkedin: "akash-kumar", image: "/api/placeholder/300/300" },
    { id: 6, name: "Ananya Sharma", instagram: "ananya_s", linkedin: "ananya-sharma", image: "/api/placeholder/300/300" },
    { id: 7, name: "Arjun Reddy", instagram: "arjun_reddy", linkedin: "arjun-reddy", image: "/api/placeholder/300/300" },
    { id: 8, name: "Arun Prakash", instagram: "arun_prakash", linkedin: "arun-prakash", image: "/api/placeholder/300/300" },
    { id: 9, name: "Aswin Jose", instagram: "aswin_jose", linkedin: "aswin-jose", image: "/api/placeholder/300/300" },
    { id: 10, name: "Athira Mohan", instagram: "athira_mohan", linkedin: "athira-mohan", image: "/api/placeholder/300/300" },
    { id: 11, name: "Deepika Nair", instagram: "deepika_nair", linkedin: "deepika-nair", image: "/api/placeholder/300/300" },
    { id: 12, name: "Devika Menon", instagram: "devika_menon", linkedin: "devika-menon", image: "/api/placeholder/300/300" },
    { id: 13, name: "Gautham Krishnan", instagram: "gautham_k", linkedin: "gautham-krishnan", image: "/api/placeholder/300/300" },
    { id: 14, name: "Gokul Raj", instagram: "gokul_raj", linkedin: "gokul-raj", image: "/api/placeholder/300/300" },
    { id: 15, name: "Harsha Vardhanan", instagram: "harsha_v", linkedin: "harsha-vardhanan", image: "/api/placeholder/300/300" },
    { id: 16, name: "Jishnu Prakash", instagram: "jishnu_p", linkedin: "jishnu-prakash", image: "/api/placeholder/300/300" },
    { id: 17, name: "Karthik Menon", instagram: "karthik_m", linkedin: "karthik-menon", image: "/api/placeholder/300/300" },
    { id: 18, name: "Keerthi Nair", instagram: "keerthi_nair", linkedin: "keerthi-nair", image: "/api/placeholder/300/300" },
    { id: 19, name: "Krishna Kumar", instagram: "krishna_kumar", linkedin: "krishna-kumar", image: "/api/placeholder/300/300" },
    { id: 20, name: "Lakshmi Priya", instagram: "lakshmi_priya", linkedin: "lakshmi-priya", image: "/api/placeholder/300/300" },
    { id: 21, name: "Manoj Krishna", instagram: "manoj_krishna", linkedin: "manoj-krishna", image: "/api/placeholder/300/300" },
    { id: 22, name: "Meera Nair", instagram: "meera_nair", linkedin: "meera-nair", image: "/api/placeholder/300/300" },
    { id: 23, name: "Niranjan Pillai", instagram: "niranjan_p", linkedin: "niranjan-pillai", image: "/api/placeholder/300/300" },
    { id: 24, name: "Pradeep Kumar", instagram: "pradeep_kumar", linkedin: "pradeep-kumar", image: "/api/placeholder/300/300" },
    { id: 25, name: "Priya Krishnan", instagram: "priya_k", linkedin: "priya-krishnan", image: "/api/placeholder/300/300" },
    { id: 26, name: "Rahul Nair", instagram: "rahul_nair", linkedin: "rahul-nair", image: "/api/placeholder/300/300" },
    { id: 27, name: "Rajesh Kumar", instagram: "rajesh_kumar", linkedin: "rajesh-kumar", image: "/api/placeholder/300/300" },
    { id: 28, name: "Rohith Krishna", instagram: "rohith_krishna", linkedin: "rohith-krishna", image: "/api/placeholder/300/300" },
    { id: 29, name: "Sandeep Menon", instagram: "sandeep_m", linkedin: "sandeep-menon", image: "/api/placeholder/300/300" },
    { id: 30, name: "Shreya Nair", instagram: "shreya_nair", linkedin: "shreya-nair", image: "/api/placeholder/300/300" },
    // Add more students to reach 69 total
    { id: 31, name: "Siddharth Raj", instagram: "siddharth_raj", linkedin: "siddharth-raj", image: "/api/placeholder/300/300" },
    { id: 32, name: "Sree Krishna", instagram: "sree_krishna", linkedin: "sree-krishna", image: "/api/placeholder/300/300" },
    { id: 33, name: "Suresh Kumar", instagram: "suresh_kumar", linkedin: "suresh-kumar", image: "/api/placeholder/300/300" },
    { id: 34, name: "Swathi Nair", instagram: "swathi_nair", linkedin: "swathi-nair", image: "/api/placeholder/300/300" },
    { id: 35, name: "Varun Krishnan", instagram: "varun_k", linkedin: "varun-krishnan", image: "/api/placeholder/300/300" },
    // Continue adding more names...
    { id: 36, name: "Vishnu Prakash", instagram: "vishnu_p", linkedin: "vishnu-prakash", image: "/api/placeholder/300/300" },
    { id: 37, name: "Vivek Nair", instagram: "vivek_nair", linkedin: "vivek-nair", image: "/api/placeholder/300/300" },
    { id: 38, name: "Aditya Singh", instagram: "aditya_singh", linkedin: "aditya-singh", image: "/api/placeholder/300/300" },
    { id: 39, name: "Anjali Menon", instagram: "anjali_menon", linkedin: "anjali-menon", image: "/api/placeholder/300/300" },
    { id: 40, name: "Arya Krishnan", instagram: "arya_k", linkedin: "arya-krishnan", image: "/api/placeholder/300/300" },
    // Continue with more realistic names...
    { id: 41, name: "Divya Nair", instagram: "divya_nair", linkedin: "divya-nair", image: "/api/placeholder/300/300" },
    { id: 42, name: "Hari Krishnan", instagram: "hari_k", linkedin: "hari-krishnan", image: "/api/placeholder/300/300" },
    { id: 43, name: "Kavya Menon", instagram: "kavya_menon", linkedin: "kavya-menon", image: "/api/placeholder/300/300" },
    { id: 44, name: "Nithin Kumar", instagram: "nithin_kumar", linkedin: "nithin-kumar", image: "/api/placeholder/300/300" },
    { id: 45, name: "Pooja Nair", instagram: "pooja_nair", linkedin: "pooja-nair", image: "/api/placeholder/300/300" },
    { id: 46, name: "Ravi Prakash", instagram: "ravi_prakash", linkedin: "ravi-prakash", image: "/api/placeholder/300/300" },
    { id: 47, name: "Sanjay Kumar", instagram: "sanjay_kumar", linkedin: "sanjay-kumar", image: "/api/placeholder/300/300" },
    { id: 48, name: "Sneha Pillai", instagram: "sneha_pillai", linkedin: "sneha-pillai", image: "/api/placeholder/300/300" },
    { id: 49, name: "Unnikrishnan", instagram: "unnikrishnan", linkedin: "unnikrishnan", image: "/api/placeholder/300/300" },
    { id: 50, name: "Vidya Nair", instagram: "vidya_nair", linkedin: "vidya-nair", image: "/api/placeholder/300/300" },
    // Add remaining students to reach 69
    { id: 51, name: "Ajith Kumar", instagram: "ajith_kumar", linkedin: "ajith-kumar", image: "/api/placeholder/300/300" },
    { id: 52, name: "Bindu Menon", instagram: "bindu_menon", linkedin: "bindu-menon", image: "/api/placeholder/300/300" },
    { id: 53, name: "Chandran Nair", instagram: "chandran_nair", linkedin: "chandran-nair", image: "/api/placeholder/300/300" },
    { id: 54, name: "Devi Priya", instagram: "devi_priya", linkedin: "devi-priya", image: "/api/placeholder/300/300" },
    { id: 55, name: "Geetha Krishnan", instagram: "geetha_k", linkedin: "geetha-krishnan", image: "/api/placeholder/300/300" },
    { id: 56, name: "Jagath Menon", instagram: "jagath_menon", linkedin: "jagath-menon", image: "/api/placeholder/300/300" },
    { id: 57, name: "Lekha Nair", instagram: "lekha_nair", linkedin: "lekha-nair", image: "/api/placeholder/300/300" },
    { id: 58, name: "Madhav Kumar", instagram: "madhav_kumar", linkedin: "madhav-kumar", image: "/api/placeholder/300/300" },
    { id: 59, name: "Nandana Pillai", instagram: "nandana_p", linkedin: "nandana-pillai", image: "/api/placeholder/300/300" },
    { id: 60, name: "Prakash Raj", instagram: "prakash_raj", linkedin: "prakash-raj", image: "/api/placeholder/300/300" },
    { id: 61, name: "Ranjith Kumar", instagram: "ranjith_kumar", linkedin: "ranjith-kumar", image: "/api/placeholder/300/300" },
    { id: 62, name: "Saritha Nair", instagram: "saritha_nair", linkedin: "saritha-nair", image: "/api/placeholder/300/300" },
    { id: 63, name: "Tejas Menon", instagram: "tejas_menon", linkedin: "tejas-menon", image: "/api/placeholder/300/300" },
    { id: 64, name: "Vineeth Kumar", instagram: "vineeth_kumar", linkedin: "vineeth-kumar", image: "/api/placeholder/300/300" },
    { id: 65, name: "Yamuna Nair", instagram: "yamuna_nair", linkedin: "yamuna-nair", image: "/api/placeholder/300/300" },
    { id: 66, name: "Anoop Krishnan", instagram: "anoop_k", linkedin: "anoop-krishnan", image: "/api/placeholder/300/300" },
    { id: 67, name: "Bhavana Menon", instagram: "bhavana_menon", linkedin: "bhavana-menon", image: "/api/placeholder/300/300" },
    { id: 68, name: "Deepak Nair", instagram: "deepak_nair", linkedin: "deepak-nair", image: "/api/placeholder/300/300" },
    { id: 69, name: "Sruthi Pillai", instagram: "sruthi_pillai", linkedin: "sruthi-pillai", image: "/api/placeholder/300/300" }
  ]

  const filteredAndSortedStudents = useMemo(() => {
    let filtered = students.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })
  }, [searchTerm, sortBy])

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
            <span className="glitch-text neon-text text-cyber-purple" data-text="69 LEGENDS">
              69 LEGENDS
            </span>
          </h2>
          <p className="text-xl text-cyber-pink font-mono mb-8">
            &gt; The minds behind FUSE_
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2 text-cyber-blue font-mono">
              <Users className="w-5 h-5" />
              <span>Total: {students.length} Students</span>
            </div>
            <div className="text-cyber-green font-mono">
              Displaying: {filteredAndSortedStudents.length}
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-blue w-4 h-4" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-cyber-gray/20 border border-cyber-blue/30 rounded-lg pl-10 pr-4 py-3 text-white font-mono focus:border-cyber-pink focus:outline-none focus:ring-2 focus:ring-cyber-pink/20 w-80"
            />
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <Filter className="text-cyber-green w-4 h-4" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-cyber-gray/20 border border-cyber-green/30 rounded-lg px-4 py-3 text-white font-mono focus:border-cyber-pink focus:outline-none"
            >
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </motion.div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredAndSortedStudents.map((student, index) => (
            <motion.div
              key={student.id}
              className="cyber-card group text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.02 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
              }}
            >
              {/* Neon Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg blur-sm"></div>
              
              {/* Profile Image */}
              <div className="relative mb-4 mx-auto w-24 h-24 overflow-hidden rounded-full border-2 border-cyber-blue/30 group-hover:border-cyber-pink transition-colors duration-300">
                <img 
                  src={student.image} 
                  alt={student.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Flickering effect */}
                <div className="absolute inset-0 bg-cyber-blue/10 animate-flicker opacity-0 group-hover:opacity-100"></div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-cyber font-bold text-cyber-blue mb-4 group-hover:text-cyber-pink transition-colors duration-300">
                {student.name}
              </h3>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {/* Instagram */}
                <motion.a
                  href={`https://instagram.com/${student.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-cyber-pink/30 text-cyber-pink hover:bg-cyber-pink hover:text-black transition-all duration-300 group-hover:border-cyber-pink"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-4 h-4" />
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href={`https://linkedin.com/in/${student.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300 group-hover:border-cyber-blue"
                  whileHover={{ scale: 1.2, rotate: -360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-pink/10 via-transparent to-cyber-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"></div>
              
              {/* Scanlines Effect */}
              <div className="absolute inset-0 bg-scanlines opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedStudents.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-cyber text-cyber-red mb-2">No Students Found</h3>
            <p className="text-cyber-blue font-mono">Try adjusting your search terms</p>
          </motion.div>
        )}

        {/* Fun Stats */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card text-center">
              <div className="text-4xl font-cyber font-bold text-cyber-blue mb-2">69</div>
              <div className="text-cyber-pink font-mono">Total Legends</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-4xl font-cyber font-bold text-cyber-green mb-2">4</div>
              <div className="text-cyber-orange font-mono">Years Together</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-4xl font-cyber font-bold text-cyber-purple mb-2">∞</div>
              <div className="text-cyber-yellow font-mono">Memories Created</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Students
