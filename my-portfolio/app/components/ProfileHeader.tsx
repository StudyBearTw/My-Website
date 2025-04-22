"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

const ProfileHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null); // 參考按鈕位置

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get<Repository[]>(
          "https://api.github.com/users/StudyBearTw/repos",
          {
            params: {
              sort: "updated", // 按最近更新排序
              per_page: 2, // 只抓取前兩個
            },
          }
        );
        setRepositories(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    if (isModalOpen) {
      fetchRepositories();
    }
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/headphoto.jpg"
          alt="薛恩明"
          width={250}
          height={250}
          className="rounded-full mx-auto shadow-md"
        />
        <h1 className="text-5xl font-semibold mt-6">薛恩明</h1>
        <p className="text-lg text-gray-600 mt-2">Software Engineer & AI Developer</p>
        <button
          ref={buttonRef}
          onClick={handleOpenModal}
          className="mt-6 text-lg px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          最近的我的 GitHub 專案
        </button>
      </motion.div>

      {/* 背景半透明效果 */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-white bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* 中央滑出視窗 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg z-50 w-96 p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="text-xl font-bold mb-4">近期作品</h2>
            <ul className="space-y-2">
              {repositories.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {repo.name}
                  </a>
                  <p className="text-sm text-gray-600">{repo.description || "無描述"}</p>
                </li>
              ))}
            </ul>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              關閉
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProfileHeader;