"use client";

import { motion } from "framer-motion";

export interface StatCounterProps {
  value: string;
  label: string;
}

/** Metric box for the stats ribbon — big value, small label. */
export function StatCounter({ value, label }: StatCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="text-center"
    >
      <p className="text-3xl font-bold text-white md:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-white/80">{label}</p>
    </motion.div>
  );
}
