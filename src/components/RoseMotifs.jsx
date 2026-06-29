export default function RoseMotifs() {
  return (
    <>
      {/* Left rose motif */}
      <div className="rose-motif-left flex flex-col items-center justify-around py-16">
        {[...Array(4)].map((_, i) => (
          <svg key={i} viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-28">
            <ellipse cx="40" cy="60" rx="18" ry="26" fill="#8C5E5E" />
            <ellipse cx="22" cy="52" rx="14" ry="22" fill="#8C5E5E" transform="rotate(-30 22 52)" />
            <ellipse cx="58" cy="52" rx="14" ry="22" fill="#8C5E5E" transform="rotate(30 58 52)" />
            <ellipse cx="30" cy="38" rx="12" ry="18" fill="#8C5E5E" transform="rotate(-50 30 38)" />
            <ellipse cx="50" cy="38" rx="12" ry="18" fill="#8C5E5E" transform="rotate(50 50 38)" />
            <ellipse cx="40" cy="34" rx="10" ry="16" fill="#8C5E5E" />
            <ellipse cx="24" cy="72" rx="10" ry="20" fill="#8C5E5E" transform="rotate(-20 24 72)" />
            <ellipse cx="56" cy="72" rx="10" ry="20" fill="#8C5E5E" transform="rotate(20 56 72)" />
            <rect x="38" y="86" width="4" height="30" fill="#5a3a2a" />
            <ellipse cx="33" cy="100" rx="6" ry="3" fill="#5a3a2a" transform="rotate(-30 33 100)" />
          </svg>
        ))}
      </div>
      {/* Right rose motif */}
      <div className="rose-motif-right flex flex-col items-center justify-around py-16">
        {[...Array(4)].map((_, i) => (
          <svg key={i} viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-28">
            <ellipse cx="40" cy="60" rx="18" ry="26" fill="#8C5E5E" />
            <ellipse cx="22" cy="52" rx="14" ry="22" fill="#8C5E5E" transform="rotate(-30 22 52)" />
            <ellipse cx="58" cy="52" rx="14" ry="22" fill="#8C5E5E" transform="rotate(30 58 52)" />
            <ellipse cx="30" cy="38" rx="12" ry="18" fill="#8C5E5E" transform="rotate(-50 30 38)" />
            <ellipse cx="50" cy="38" rx="12" ry="18" fill="#8C5E5E" transform="rotate(50 50 38)" />
            <ellipse cx="40" cy="34" rx="10" ry="16" fill="#8C5E5E" />
            <ellipse cx="24" cy="72" rx="10" ry="20" fill="#8C5E5E" transform="rotate(-20 24 72)" />
            <ellipse cx="56" cy="72" rx="10" ry="20" fill="#8C5E5E" transform="rotate(20 56 72)" />
            <rect x="38" y="86" width="4" height="30" fill="#5a3a2a" />
            <ellipse cx="33" cy="100" rx="6" ry="3" fill="#5a3a2a" transform="rotate(-30 33 100)" />
          </svg>
        ))}
      </div>
    </>
  );
}