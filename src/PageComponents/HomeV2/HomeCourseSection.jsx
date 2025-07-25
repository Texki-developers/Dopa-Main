import React from 'react'
import ComponentHeader from '../ComponentHeader'
import PrimaryCourseCard from '../Courses/CourseCard/PrimaryCourseCard'
import Center from '@/Components/BasicComponents/Center/Center'
import { motion } from 'framer-motion'

export default function HomeCourseSection({Course}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Center>
      <motion.div 
        className='p-4 md:px-16 w-full common-space-x'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ComponentHeader 
            url='/Assets/icons/course.png' 
            heading='Courses' 
            alt='⁠best entrance coaching center in kerala' 
            className='md:!justify-center'
          />
        </motion.div>
        
        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'
          variants={containerVariants}
        >
          {Course && Course.map((items, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <PrimaryCourseCard data={items} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Center>
  )
}
