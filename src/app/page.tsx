import Image from "next/image";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProfileSection from "@/components/ProfileSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-800 p-6 sm:p-10 font-sans max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar: Fixed Height, No Scroll */}
        <div className="md:w-1/3">
          <div className="bg-white p-6 rounded-3xl shadow-lg h-full md:min-h-[calc(100vh-5rem)] md:sticky md:top-10 flex flex-col justify-start border-l-4 border-purple-600">
            <div className="flex justify-center mb-4">
              <div className="p-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full">
                <Image
                  src="/profile-1.jpg"
                  alt="Profile"
                  width={130}
                  height={130}
                  className="rounded-full border-4 border-white shadow-md"
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-800">
                Bùi <span className="text-purple-600">Quang Vinh</span>
              </h1>
              <p className="text-lg font-medium text-purple-600 mt-1">
                Front-End Developer
              </p>
            </div>
            <div className="mt-6">
              <ProfileSection />
            </div>
          </div>
        </div>

        {/* Right Content: No internal scroll, just page scroll */}
        <div className="md:w-2/3 flex flex-col gap-8">
          <div className="bg-white p-6 rounded-3xl shadow-lg  border-t-4 border-purple-500">
            <ExperienceSection />
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg  border-t-4 border-purple-500">
            <SkillsSection />
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg  border-t-4 border-purple-500">
            <EducationSection />
          </div>
        </div>
      </div>
    </div>
  );
}
