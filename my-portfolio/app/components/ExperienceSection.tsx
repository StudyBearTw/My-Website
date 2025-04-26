"use client";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const schools = [
    { name: "國立高雄師範大學－軟體工程管理學系", year: "2023 - 現在" },
    { name: "台中市立第二高級中學", year: "2020 - 2023" },
    { name: "台中市立居仁國中", year: "2017 - 2020" },
  ];

  const labInfo = {
    topic: "新聞真假辨識系統",
    professor: "葉道明教授",
    members: "薛恩明、葉育豪、戴振倫",
    role: "後端語言模型訓練",
    duration: "2024 - 現在",
  };

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

      {/* 實驗室資訊 */}
      <motion.div className="mt-16 bg-gray-50 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-xl font-bold mb-4">🔬 專題資訊</h3>
        <p className="text-lg">
          <span className="font-semibold">題目：</span> {labInfo.topic}
        </p>
        <p className="text-lg mt-2">
          <span className="font-semibold">指導教授</span> {labInfo.professor}
        </p>
        <p className="text-lg mt-2">
          <span className="font-semibold">組員：</span> {labInfo.members}
        </p>
        <p className="text-lg mt-2">
          <span className="font-semibold">負責部分：</span> {labInfo.role}
        </p>
        <p className="text-lg mt-2">
          <span className="font-semibold">期間：</span> {labInfo.duration}
        </p>
      </motion.div>
    </section>
  );
}