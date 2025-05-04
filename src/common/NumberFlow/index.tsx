import { animate, motion, useInView, useTransform, useMotionValue } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

import { StyledP } from './styles'
interface NumberFlowProps {
  final_number: number
}

export const NumberFlow = ({ final_number }: NumberFlowProps) => {
  const finalNumbers = final_number
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
    <StyledP ref={ref} style={{ display: 'inline-block', textAlign: 'center' }}>
      <motion.div>{rounded}</motion.div>
    </StyledP>
  )
}
