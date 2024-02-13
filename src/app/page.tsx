"use client";

import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Stacks from "@/components/Stacks";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, gap: "0" }}
      animate={{ opacity: 1, gap: "32px" }}
      transition={{ duration: 0.25 }}
      className="flex flex-col max-w-[720px] gap-8 w-full px-4 py-16 mx-auto"
    >
      <Header />
      <About />
      <Stacks />
      <Projects />
      <Contacts />
    </motion.div>
  );
}
