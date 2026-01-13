"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Your Gateway to{" "}
              <span className="gradient-text">Web3 Innovation</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Developing decentralized solutions on EVM, Solana, Bitcoin, ZK, and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-web3-gradient text-white font-semibold rounded-full overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-web3-gradient-hover opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-white font-semibold rounded-full border border-white/20 hover:border-accent-blue/50 transition-all"
            >
              View Case Studies
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

