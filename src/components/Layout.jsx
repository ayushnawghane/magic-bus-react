import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="flex-1 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
