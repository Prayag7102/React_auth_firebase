import { motion } from "framer-motion";


export const PageWrapper = ({ children }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  };


export const SmoothScroll = ({ children }) => {
    return (
      <motion.div
      
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        style={{ overflow: 'hidden' }}
      >
        {children}
      </motion.div>
    );
  };
  