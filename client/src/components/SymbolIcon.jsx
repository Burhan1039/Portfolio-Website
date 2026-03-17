const iconMap = {
  spark: (
    <path
      d="M12 2.5l1.9 4.7L18.5 9l-4.6 1.8L12 15.5l-1.9-4.7L5.5 9l4.6-1.8L12 2.5zM5 14l.9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14zm14 0l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z"
      fill="currentColor"
    />
  ),
  rocket: (
    <>
      <path d="M14.5 4.5c2.4.3 4.7 2.6 5 5l-4.5 4.5c-1.2-.5-2.2-1.5-2.7-2.7l2.2-2.2z" fill="currentColor" />
      <path d="M9.6 9.5c1.3-2.7 3.8-4.6 7.1-5l1.3-.2-.2 1.3c-.4 3.2-2.3 5.8-5 7.1" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 13.5L5 17l-.7 2.5L6.8 19l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14.5" cy="9.5" r="1.2" fill="currentColor" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M4 12.3l8 4.5 8-4.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16.8l8 4.2 8-4.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="4" width="7" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="14" y="4" width="7" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="8.5" y="15" width="7" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 6.5h4M12 9.5v5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19.5h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M6.5 16.5l3.5-4 2.7 2.4 4.8-6.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.5 8.5h2v2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  quote: (
    <path
      d="M6.8 7C5.3 8.6 4.5 10.2 4.5 12c0 2.7 1.6 4.7 4.1 4.7 2 0 3.4-1.5 3.4-3.6 0-2-1.4-3.5-3.2-3.5-.3 0-.6 0-.8.1.3-1.2 1-2.3 2-3.5L6.8 7zm8.8 0c-1.5 1.6-2.3 3.2-2.3 5 0 2.7 1.6 4.7 4.1 4.7 2 0 3.4-1.5 3.4-3.6 0-2-1.4-3.5-3.2-3.5-.3 0-.6 0-.8.1.3-1.2 1-2.3 2-3.5L15.6 7z"
      fill="currentColor"
    />
  ),
  shield: (
    <>
      <path d="M12 3l7 2.8v5.4c0 4.2-2.7 7.8-7 9.8-4.3-2-7-5.6-7-9.8V5.8L12 3z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 12.2l2 2 4-4.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

function SymbolIcon({ name, className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      {iconMap[name]}
    </svg>
  );
}

export default SymbolIcon;
