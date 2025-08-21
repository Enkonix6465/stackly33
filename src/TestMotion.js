import React from "react";
import { motion } from "framer-motion";

export default function TestMotion() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="w-32 h-32 bg-green-500 rounded-xl shadow-lg"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </div>
  );
}
