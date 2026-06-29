export default function SocialLinks() {
  return (
    <div className="fixed bottom-6 left-8 z-40 flex items-center gap-4">
      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-50 hover:opacity-100 transition-opacity cursor-none"
        aria-label="LinkedIn"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>

      {/* ArtStation */}
      <a
        href="https://artstation.com"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-50 hover:opacity-100 transition-opacity cursor-none"
        aria-label="ArtStation"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
          <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 002.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 00-2.164-1.333H9.38l9.112 15.826 2.51 4.35A2.424 2.424 0 0024 19.748v-2zm-11.37-5.217L7.905 6.105 3.172 14.531h9.458z"/>
        </svg>
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-50 hover:opacity-100 transition-opacity cursor-none"
        aria-label="YouTube"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </a>
    </div>
  );
}