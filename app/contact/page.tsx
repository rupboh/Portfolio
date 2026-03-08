"use client";

import { motion } from "framer-motion";
import { containerVariants, fadeInUp } from "@/lib/animations";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <motion.section
      className="min-h-screen py-20 px-6 bg-light-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-light-900 mb-6"
          variants={fadeInUp}
        >
          Get in <span className="text-primary">Touch</span>
        </motion.h1>

        <motion.p
          className="text-xl text-light-600 mb-12"
          variants={fadeInUp}
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md border border-light-200"
          variants={fadeInUp}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-light-900 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-light-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-light-50"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-light-900 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-light-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-light-50"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-light-900 font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-light-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-light-50"
              placeholder="Subject"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-light-900 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-light-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-light-50"
              placeholder="Your message"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-secondary transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>

          {submitted && (
            <motion.div
              className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Message sent successfully! I&aposll get back to you soon.
            </motion.div>
          )}
        </motion.form>

        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div
            className="text-center"
            variants={fadeInUp}
          >
            <h3 className="text-lg font-semibold text-light-900 mb-2">Email</h3>
            <p className="text-light-600">rupalbohra2502@gmail.com</p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={fadeInUp}
          >
            <h3 className="text-lg font-semibold text-light-900 mb-2">Phone</h3>
            <p className="text-light-600">+91 9929067407</p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={fadeInUp}
          >
            <h3 className="text-lg font-semibold text-light-900 mb-2">Location</h3>
            <p className="text-light-600">Kota, Rajasthan</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

