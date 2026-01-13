"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, TrendingUp, Layers, Coins, ShieldCheck, Link as LinkIcon } from "lucide-react";

const services = [
  {
    title: "Smart Contract Development",
    subtitle: "EVM & Solana",
    description: "Build secure, audited smart contracts for Ethereum, Polygon, Arbitrum, and Solana ecosystems.",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
    size: "large",
  },
  {
    title: "DeFi & Trading Platforms",
    subtitle: "DEX & AMM",
    description: "Decentralized exchanges, liquidity pools, and advanced trading infrastructure.",
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-500",
    size: "medium",
  },
  {
    title: "ZK Solutions & L2s",
    subtitle: "Scalability & Privacy",
    description: "Zero-knowledge proofs, Layer 2 solutions, and privacy-preserving protocols.",
    icon: ShieldCheck,
    gradient: "from-green-500 to-emerald-500",
    size: "medium",
  },
  {
    title: "Investment Platforms",
    subtitle: "Staking & Yield",
    description: "Tokenized assets, staking platforms, and yield optimization strategies.",
    icon: Coins,
    gradient: "from-orange-500 to-red-500",
    size: "large",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`glass rounded-2xl p-6 sm:p-8 hover:border-accent-blue/50 transition-all cursor-pointer group ${
        service.size === "large" ? "col-span-1 lg:col-span-2" : "col-span-1"
      }`}
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="w-full h-full text-white" />
      </div>
      
      <h3 className="text-2xl font-display font-bold mb-2">{service.title}</h3>
      <p className="text-sm text-gray-400 mb-2">{service.subtitle}</p>
      <p className="text-gray-300 leading-relaxed">{service.description}</p>

      <div className="mt-6 flex items-center gap-2 text-accent-blue group-hover:gap-4 transition-all">
        <span className="text-sm font-semibold">Learn more</span>
        <LinkIcon className="w-4 h-4" />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive Web3 solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

