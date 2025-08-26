import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';




export default function Hero() {
    const navigate = useNavigate();
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <img
        src="/src/assets/hero.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        >
          Make Your Event Unforgettable
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-4 text-lg md:text-xl text-gray-200"
        >
          We plan, manage, and deliver world-class events tailored just for you.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-lg"
          onClick={() => navigate('/Services')}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}
