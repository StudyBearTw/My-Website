"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const username = "StudyBearTw";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get<Repo[]>(
          `https://api.github.com/users/${username}/repos`
        );
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="bg-gray-50 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">💻 我的 GitHub 專案</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }} // 懸停時放大並上移
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {repo.name}
              </a>
            </h3>
            <p className="text-gray-600 mb-4">
              {repo.description || "No description available"}
            </p>
            <span className="text-sm text-gray-500">{repo.language || "N/A"}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}