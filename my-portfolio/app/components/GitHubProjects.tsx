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
            <p className="text-gray-600">
              {repo.description || "No description"}
            </p>
            <span className="text-sm text-gray-500">{repo.language}</span>
          </div>
        ))}
      </div>
    </section>
  );
}