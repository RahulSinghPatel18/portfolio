import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "rahulsinghpatel2002@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Optionally handle clipboard error
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <motion.button
        onClick={copyToClipboard}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 1.05 }}
        className="inline-flex text-sm items-center gap-2 px-5 py-3 rounded-full bg-primary border border-gray-400 text-white shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        style={{ minWidth: "12rem" }}
        aria-label="Copy Email Address"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.span
              className="flex items-center gap-2 w-full"
              key="copied"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <img src="assets/copy-done.svg" className="w-5" alt="copy done icon" />
              Email Copied
            </motion.span>
          ) : (
            <motion.span
              className="flex items-center gap-2 w-full"
              key="copy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <img src="assets/copy.svg" className="w-5" alt="copy icon" />
              Copy Email Address
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default CopyEmailButton;
