import { Phone, Mail, Facebook, Github } from "lucide-react";

const ProfileSection = () => {
  return (
    <div className="space-y-6">
      <p className="text-base text-gray-700 leading-relaxed">
        Passionate front-end developer with a focus on creating responsive,
        user-friendly, and visually appealing web applications. Skilled in
        modern web technologies and committed to delivering high-quality code.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Phone size={24} className="text-purple-500" />
          <a href="tel:0797983494" className="text-purple-600 hover:underline">
            0797983494
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Mail size={24} className="text-purple-500" />
          <a
            href="mailto:buiquangvinhvt2709@gmail.com"
            className="text-purple-600 hover:underline"
          >
            buiquangvinhvt2709@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Facebook size={24} className="text-purple-500" />
          <a
            href="https://www.facebook.com/nhotihon.05/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
          >
            Quang Vinh
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Github size={24} className="text-purple-500" />
          <a
            href="https://github.com/quangvinh-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
          >
            Quang Vinh
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
