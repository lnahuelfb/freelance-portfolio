const LogoFinanzApp = ({ size = 48 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} fill="none">
    <circle cx="32" cy="32" r="30" stroke="#22c55e" strokeWidth="4" />
    <rect x="18" y="20" width="6" height="24" rx="2" fill="#22c55e" />
    <rect x="30" y="12" width="6" height="32" rx="2" fill="#22c55e" />
    <rect x="42" y="26" width="6" height="18" rx="2" fill="#22c55e" />
  </svg>
);
export default LogoFinanzApp;