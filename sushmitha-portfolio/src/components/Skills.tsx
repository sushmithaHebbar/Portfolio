"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { CheckCircle2 } from "lucide-react";

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-[10%] bg-primary">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Technical <span className="text-accent">Skills</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {portfolioData.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="flex items-center gap-3 p-4 bg-primary/80 border border-accent/20 rounded-lg shadow-sm hover:shadow-[0_0_15px_#0ef/30] transition-all"
                        >
                            <CheckCircle2 className="text-accent" size={20} />
                            <span className="font-medium">{skill}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 bg-primary/30 p-8 rounded-2xl border border-accent/10">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className="w-10 h-1 bg-accent rounded-full inline-block"></span>
                        Other Passions
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {portfolioData.hobbies.map((hobby, index) => (
                            <span
                                key={index}
                                className="px-6 py-2 bg-accent/10 text-accent border border-accent/30 rounded-full font-medium"
                            >
                                {hobby}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
