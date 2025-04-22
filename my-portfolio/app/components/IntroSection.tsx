"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-left text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/photo.JPG"
          alt="自我介紹圖示"
          width={200}
          height={200}
          className="mx-auto mb-6"
        />
        <h2 className="text-4xl font-bold mb-6">👋 自我介紹</h2>
        <p className="text-lg leading-relaxed">
        嗨，我是來自 高雄師範大學軟體工程管理學系的大三學生，個性樂觀、開朗，喜歡挑戰也熱愛與人交流。
        在學期間我積極參與各種專案的開發累積我的作品集，尤其對於 AI、自然語言處理（NLP） 領域特別有興趣。
        </p>
        <p className="text-lg leading-relaxed mt-4">
        在大三專題中，我擔任「新聞真假辨識系統」的共同主持人，負責從零開始訓練後端的語言模型，深入探索模型設計、資料處理與效能優化的完整流程。
        這段經歷不僅讓我更扎實掌握技術，也培養了解決問題的思維與團隊合作的能力。
        </p>
        <p className="text-lg leading-relaxed mt-4">
        我相信，技術是實現想法的工具，而溝通與熱情則是讓團隊一起前進的關鍵！
        </p>
      </motion.div>
    </section>
  );
}