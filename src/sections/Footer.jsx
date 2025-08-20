import { mySocials } from "../constants";

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
          {mySocials.map((social) => (
            <a
              href={social.href}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={social.name}
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-6 h-6 opacity-80 group-hover:opacity-100 transition"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 

 
