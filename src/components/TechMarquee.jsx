"use client";

import { motion } from "framer-motion";
import { Hexagon, Code2, Coins, Shield } from "lucide-react";

const technologies = [
  { name: "Ethereum", icon: Hexagon, color: "text-blue-400" },
  { name: "Solana", icon: Code2, color: "text-purple-400" },
  { name: "Bitcoin", icon: Coins, color: "text-orange-400" },
  { name: "Zero Knowledge", icon: Shield, color: "text-green-400" },
  { name: "Rust", icon: Code2, color: "text-red-400" },
  { name: "Solidity", icon: Code2, color: "text-blue-300" },
];

export default function TechMarquee() {
  // Duplicate array for seamless loop
  const duplicatedTech = [...technologies, ...technologies, ...technologies];

  return (
    <section className="relative py-16 overflow-hidden bg-dark-secondary/50">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-blue/5 to-transparent" />
      
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedTech.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`first-${index}`}
                  className="flex items-center gap-3 flex-shrink-0 px-8"
                >
                  <Icon className={`w-8 h-8 ${tech.color}`} />
                  <span className="text-xl font-semibold text-white whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

