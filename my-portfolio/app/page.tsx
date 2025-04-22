import ProfileHeader from "./components/ProfileHeader";
import IntroSection from "./components/IntroSection";
import SkillsSection from "./components/SkillsSection";
import GitHubProjects from "./components/GitHubProjects";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Profile Header Section */}
      <header className="bg-gradient-to-b from-gray-100 to-white shadow-md">
        <ProfileHeader />
      </header>

      {/* Intro, Experience, and Skills Section */}
      <main className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-8">
          <ExperienceSection />
          <IntroSection />
          <SkillsSection />
        </div>
      </main>

      {/* GitHub Projects Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-8">
        <GitHubProjects />
      </section>

      {/* Contact Section */}
      <footer className="bg-white py-20 px-8 shadow-inner">
        <ContactSection />
      </footer>
    </div>
  );
}