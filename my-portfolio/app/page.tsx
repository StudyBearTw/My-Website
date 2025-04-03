"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

const GitHubPortfolio = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const username = "StudyBearTw"; // 你的 GitHub 使用者名稱

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
    <div className="max-w-4xl mx-auto p-4">
      {/* 個人簡介 */}
      <section className="text-center mb-12">
        <img
          src="/profile.jpg" // 你的大頭貼
          alt="Profile Picture"
          className="w-32 h-32 mx-auto rounded-full shadow-md"
        />
        <h1 className="text-3xl font-bold mt-4">Your Name</h1>
        <p className="text-gray-600">Software Engineer | Web Developer</p>
        <p className="mt-2 text-gray-700 max-w-lg mx-auto">
          Hi! I'm a passionate developer who loves building web applications and exploring new technologies.
        </p>
      </section>

      {/* 作品集 */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6">My GitHub Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <div key={repo.id} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {repo.name}
                </a>
              </h3>
              <p className="text-gray-600">{repo.description || "No description"}</p>
              <span className="text-sm text-gray-500">{repo.language}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 聯絡方式 */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-700">Feel free to reach out to me!</p>
        <div className="mt-4">
          <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">your.email@example.com</a>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/StudyBearTw" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default GitHubPortfolio;
