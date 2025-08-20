import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rahul-singh-patel-166a15256",
    icon: <FaLinkedin className="w-6 h-6" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/RahulSinghPatel18", // Add your GitHub link here
    icon: <FaGithub className="w-6 h-6" />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/", // Add your WhatsApp link here
    icon: <FaWhatsapp className="w-6 h-6" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rahul._singh18?igsh=ZndjeHBydWV1NWhn", // Add your Instagram link here
    icon: <FaInstagram className="w-6 h-6" />,
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900/80 border-t border-neutral-800 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold text-white tracking-wide">Rahul</span>
          <span className="hidden md:inline-block text-neutral-500">|</span>
          <span className="text-neutral-400 text-sm">© 2025. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <a
            href="/terms"
            className="text-neutral-400 hover:text-white transition-colors text-sm"
          >
            Terms & Conditions
          </a>
          <span className="text-neutral-600">|</span>
          <a
            href="/privacy"
            className="text-neutral-400 hover:text-white transition-colors text-sm"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              href={social.href}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={social.name}
            >
              <span className="opacity-80 group-hover:opacity-100 transition text-white group-hover:text-indigo-500">
                {social.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
