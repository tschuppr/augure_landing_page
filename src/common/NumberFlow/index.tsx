import { animate, motion, useInView, useTransform, useMotionValue } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export const NumberFlow = () => {
  const finalNumbers = 10080
  const [trigger, setTrigger] = useState(true)
  const number = useMotionValue(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const rounded = useTransform(() => Math.round(number.get()))
  useEffect(() => {
    if (isInView && trigger) {
      number.set(0)
      setTrigger(false)
    }

    const controls = animate(number, finalNumbers, {
      ease: [0, 1, 0, 1],
      duration: 7
    })

    return () => {
      controls.stop()
    }
  }, [isInView])

  return (
    <div ref={ref} style={{ display: 'block', textAlign: 'center' }}>
      <h6 style={{ display: 'inline-block', textAlign: 'center' }}>
        <motion.div>{rounded}</motion.div>
      </h6>
      <h6 style={{ display: 'inline-block', textAlign: 'center', margin: '10px' }}>€</h6>
      <p>Valeur constatée en moyenne dans nos pharmacies partenaires</p>
    </div>
  )
}
