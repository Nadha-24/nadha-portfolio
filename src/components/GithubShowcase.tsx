"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, BookOpen, Users, ExternalLink, RefreshCw } from "lucide-react";

interface GithubProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  public_repos: number;
  html_url: string;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const fallbackProfile: GithubProfile = {
  avatar_url: "/images/profile.jpg",
  name: "Nadha Saafiya",
  login: "Nadha-24",
  bio: "Information Technology Student | UI/UX Designer & Full-Stack Developer",
  followers: 5,
  public_repos: 14,
  html_url: "https://github.com/Nadha-24",
};

const fallbackRepos: GithubRepo[] = [
  {
    id: 1,
    name: "FoundryBOT",
    description: "An evidence-driven startup viability analysis platform using Retrieval-Augmented Generation (RAG) to evaluate startup ideas against historical datasets.",
    html_url: "https://github.com/Nadha-24/FoundryBOT",
    stargazers_count: 2,
    forks_count: 0,
    language: "Python",
  },
  {
    id: 2,
    name: "FlowRoute",
    description: "A smart traffic navigation app suggesting optimal routes based on user mood and real-time conditions.",
    html_url: "https://github.com/Nadha-24",
    stargazers_count: 1,
    forks_count: 0,
    language: "Python",
  },
  {
    id: 3,
    name: "nadha-portfolio",
    description: "Premium Next.js portfolio website showcasing professional experience, projects, services, and dynamic integrations.",
    html_url: "https://github.com/Nadha-24",
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
  }
];

export default function GithubShowcase() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGithubData() {
      try {
        setIsLoading(true);
        setError(false);

        // Fetch profile
        const profileRes = await fetch("https://api.github.com/users/Nadha-24");
        if (!profileRes.ok) throw new Error("Failed to fetch profile");
        const profileData = await profileRes.json();

        // Fetch repos (sorted by updated date, top 4 repos)
        const reposRes = await fetch("https://api.github.com/users/Nadha-24/repos?sort=updated&per_page=4");
        if (!reposRes.ok) throw new Error("Failed to fetch repos");
        const reposData = await reposRes.json();

        setProfile({
          avatar_url: profileData.avatar_url,
          name: profileData.name || "Nadha Saafiya",
          login: profileData.login,
          bio: profileData.bio || "Information Technology Student | Developer",
          followers: profileData.followers,
          public_repos: profileData.public_repos,
          html_url: profileData.html_url,
        });
        
        // Filter out fork repositories and format
        const formattedRepos = reposData
          .filter((repo: any) => !repo.fork)
          .map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || "No description provided.",
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            language: repo.language || "JavaScript",
          }));

        setRepos(formattedRepos.slice(0, 4));
      } catch (err) {
        console.error(err);
        setError(true);
        // Load fallback details
        setProfile(fallbackProfile);
        setRepos(fallbackRepos);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  return (
    <section className="relative py-12 z-10 overflow-hidden text-text-theme">
      {/* Visual background flows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-2">Open Source</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">GitHub Showcase</h2>
          <div className="h-[2px] w-8 bg-accent-blue mt-3 rounded-full" />
        </div>

        {isLoading ? (
          /* Loading Skeleton States */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-4 p-8 rounded-3xl glass-card border border-card-border flex flex-col items-center justify-between min-h-[340px] animate-pulse">
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="w-24 h-24 rounded-full bg-input-bg border border-card-border" />
                <div className="h-6 w-3/4 bg-input-bg rounded-md" />
                <div className="h-4 w-1/2 bg-input-bg rounded-md" />
                <div className="h-12 w-full bg-input-bg rounded-xl mt-2" />
              </div>
              <div className="h-10 w-full bg-input-bg rounded-xl mt-6" />
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-6 rounded-2xl glass-card border border-card-border flex flex-col justify-between min-h-[160px] animate-pulse">
                  <div className="flex flex-col gap-3">
                    <div className="h-5 w-1/2 bg-input-bg rounded-md" />
                    <div className="h-10 w-full bg-input-bg rounded-md" />
                  </div>
                  <div className="h-4 w-1/3 bg-input-bg rounded-md mt-4" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Real Data Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: Profile Details */}
            {profile && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-4 p-8 rounded-3xl glass-card border border-card-border flex flex-col justify-between items-center text-center relative overflow-hidden bg-bg-theme min-h-[380px]"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/5 rounded-bl-full blur-xl pointer-events-none" />
                
                <div className="flex flex-col items-center gap-4 w-full">
                  {/* Profile Avatar */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={profile.avatar_url}
                      alt={profile.name}
                      className="relative w-24 h-24 rounded-full object-cover border-2 border-card-border"
                    />
                  </div>

                  {/* Profile Metadata */}
                  <div className="flex flex-col mt-2">
                    <h3 className="text-xl font-bold tracking-wide text-white">{profile.name}</h3>
                    <span className="text-xs text-accent-blue font-semibold mt-0.5">@{profile.login}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-xs opacity-60 leading-relaxed font-light mt-1 max-w-[240px]">
                    {profile.bio}
                  </p>

                  {/* Tiny details grid */}
                  <div className="grid grid-cols-2 gap-4 w-full mt-4 border-t border-card-border pt-4">
                    <div className="flex flex-col items-center p-2 rounded-xl bg-input-bg border border-card-border">
                      <Users className="w-4 h-4 text-accent-purple mb-1" />
                      <span className="text-sm font-bold">{profile.followers}</span>
                      <span className="text-[9px] opacity-40 uppercase font-semibold">Followers</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-xl bg-input-bg border border-card-border">
                      <BookOpen className="w-4 h-4 text-accent-blue mb-1" />
                      <span className="text-sm font-bold">{profile.public_repos}</span>
                      <span className="text-[9px] opacity-40 uppercase font-semibold">Public Repos</span>
                    </div>
                  </div>
                </div>

                {/* Primary CTA */}
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 mt-6 bg-gradient-to-r from-accent-blue to-accent-purple text-white text-xs font-bold rounded-2xl hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  View GitHub Profile
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            )}

            {/* Right Grid: Repositories List */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch flex-1">
                {repos.map((repo, idx) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="p-6 rounded-2xl glass-card border border-card-border hover:border-accent-blue/30 hover:bg-input-bg/30 transition-all duration-300 group flex flex-col justify-between text-left bg-bg-theme relative"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-accent-blue tracking-wide truncate group-hover:text-glow-blue transition-colors">
                          {repo.name}
                        </span>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-theme/40 hover:text-accent-blue p-1 rounded-md transition-colors"
                          aria-label={`View repository ${repo.name}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <p className="text-xs opacity-60 leading-relaxed font-light min-h-[36px] line-clamp-2">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4 border-t border-card-border/50 pt-3 text-[10px]">
                      {/* Language Indicator */}
                      <div className="flex items-center gap-1.5 font-semibold opacity-70">
                        <span className="w-2 h-2 rounded-full bg-accent-blue" />
                        <span>{repo.language}</span>
                      </div>

                      {/* Stars & Forks */}
                      <div className="flex items-center gap-3 opacity-60">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500/20" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5 text-accent-purple" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {error && (
                <div className="flex items-center gap-2 mt-4 px-4 py-2.5 bg-input-bg border border-card-border rounded-xl text-[10px] text-text-theme/40 font-semibold justify-center">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-accent-blue" />
                  <span>API rate limit exceeded. Loaded cached repositories.</span>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
