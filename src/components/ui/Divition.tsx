import { motion } from "framer-motion"

const Divition = () => {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="h-1 w-12 mx-auto bg-indigo-500 origin-left rounded-full"
    />
  )
}
export default Divition