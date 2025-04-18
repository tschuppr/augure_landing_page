import { motion, useInView } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const scrambleDigits = (target, number) => {
  const length = target.toString().length
  let result = number
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10)
  }
  return result
}

export const NumberFlow = () => {
  const finalNumbers = 11089
  const [number, setNumber] = useState(150)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (isInView) {
      // Start scrambling
      const target = finalNumbers
      intervalRef.current = setInterval(() => {
        setNumber(scrambleDigits(target, number))
      }, 500)

      // Settle on final number after 1 second
      timeoutRef.current = setTimeout(() => {
        clearInterval(intervalRef.current)
        setNumber(target)
      }, 2000)
    }

    // Cleanup on unmount or visibility change
    return () => {
      clearInterval(intervalRef.current)
      clearTimeout(timeoutRef.current)
    }
  }, [isInView])
  return (
    <div
      ref={ref}
      className="flex items-center justify-center h-screen bg-gray-900 text-white text-6xl font-bold"
    >
      {/* <AnimatePresence initial={false}> */}
      <motion.div
        key={number}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.3 }}
      >
        <h6>{number}</h6>
      </motion.div>
      <p>Valeur constatée en moyenne dans nos pharmacies partenaires</p>
      {/* </AnimatePresence> */}
    </div>
  )
}
