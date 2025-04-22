"use client";
import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">💼 我的技能</h2>
        <div className="space-y-12">
          {/* 技術能力 */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">💻 技術能力</h3>
            <p className="text-lg leading-relaxed">
              Python, Java, React, Node, HTML, JavaScript, CSS, SQL, Git, GitHub
            </p>
          </motion.div>

          {/* 語言能力 */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">🌍 語言能力</h3>
            <p className="text-lg leading-relaxed">
              TOEIC 760，能閱讀技術文件並與國際開發者溝通
            </p>
          </motion.div>

          {/* 目前學習目標 */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">🚀 目前學習目標</h3>
            <p className="text-lg leading-relaxed">
              語言模型辨識假新聞、全端應用整合、LSTM 股市預測
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}