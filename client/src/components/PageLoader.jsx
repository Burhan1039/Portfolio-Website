import { motion, AnimatePresence } from 'framer-motion';

function PageLoader({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#060b15]"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0.4 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.8 }}
            className="h-12 w-12 rounded-full border-4 border-brand-500/30 border-t-brand-400"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PageLoader;
