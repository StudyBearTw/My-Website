import ProfileHeader from "./components/ProfileHeader";
import IntroSection from "./components/IntroSection";
import SkillsSection from "./components/SkillsSection";
import GitHubProjects from "./components/GitHubProjects";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <ProfileHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <IntroSection />
        <SkillsSection />
      </div>
      <GitHubProjects />
      <ContactSection />
    </div>
  );
}