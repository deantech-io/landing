"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Brain } from "lucide-react";

const benefits = [
  {
    title: "Security First",
    description: "Every line of code undergoes rigorous audits. We build with security as the foundation, not an afterthought.",
    icon: Shield,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Speed to Market",
    description: "Agile development processes and deep expertise mean faster delivery without compromising quality.",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Deep Industry Knowledge",
    description: "Years of experience across DeFi, NFTs, DAOs, and blockchain infrastructure. We know what works.",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We don't just build — we architect the future of Web3
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-8 text-center hover:border-accent-purple/50 transition-all"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-4 flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

