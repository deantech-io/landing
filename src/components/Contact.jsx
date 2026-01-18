"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to build your Web3 project? Let's discuss.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-dark-secondary/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-dark-secondary/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-dark-secondary/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-web3-gradient text-white font-semibold rounded-full flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:denys@deantech.io" className="text-gray-400 hover:text-white transition-colors">
                      denys@deantech.io
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telegram</h4>
                    <a href="https://t.me/DenysRiabtsev" className="text-gray-400 hover:text-white transition-colors">
                      @DenysRiabtsev
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold mb-4">Social Media</h3>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-lg bg-dark-secondary/50 border border-white/10 flex items-center justify-center hover:border-accent-blue transition-colors"
                  aria-label="Twitter"
                >
                  <span className="text-white font-bold">𝕏</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/deantech"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-lg bg-dark-secondary/50 border border-white/10 flex items-center justify-center hover:border-accent-purple transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="text-white font-bold">in</span>
                </motion.a>
                <motion.a
                  href="https://t.me/DenysRiabtsev"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-lg bg-dark-secondary/50 border border-white/10 flex items-center justify-center hover:border-accent-blue transition-colors"
                  aria-label="Telegram"
                >
                  <span className="text-white font-bold">TG</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


