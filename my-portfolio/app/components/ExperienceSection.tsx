"use client";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const schools = [
    { name: "國立高雄師範大學－軟體工程管理學系", year: "2023 - 現在" },
    { name: "台中市立第二高級中學", year: "2020 - 2023" },
    { name: "台中市立居仁國中", year: "2017 - 2020" },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">🎓 學習經歷</h2>
      <div className="relative border-l-4 border-gray-300 pl-6">
        {schools.map((school, index) => (
          <motion.div
          key={index}
          className="mb-8 last:mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          {/* 節點 */}
          <div className="absolute -left-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
          {/* 學校名稱與年份 */}
          <div>
            <h3 className="text-lg font-semibold">{school.name}</h3>
            <p className="text-gray-600">{school.year}</p>
          </div>
        </motion.div>
        ))}
      </div>
    </section>
  );
}