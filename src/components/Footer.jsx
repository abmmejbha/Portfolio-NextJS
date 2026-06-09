import React from "react";

export default function Footer() {
  return (
    <div className="bg-bg-secondary px-8 py-6 flex flex-col items-center gap-6">
      <div className="flex gap-6">
        <a
          className="text-text-secondary text-sm hover:text-text-primary transition-colors"
          href="https://linkedin.com/in/abm-mejbha-092786202"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="text-text-secondary text-sm hover:text-text-primary transition-colors"
          href="https://github.com/abmmejbha"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="text-text-secondary text-sm hover:text-text-primary transition-colors"
          href="https://instagram.com/suweet.ka"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <p className="text-text-primary text-sm">
        &copy; {new Date().getFullYear()} ABM Mejbha. All rights reserved.
      </p>
    </div>
  );
}
