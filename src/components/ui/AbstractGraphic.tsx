// export default function AbstractGraphic() {
//   return (
//     <div className="w-full max-w-md">
//       <svg
//         viewBox="0 0 300 300"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-full h-auto"
//       >
//         <circle cx="150" cy="150" r="100" fill="#4B5563" fillOpacity="0.05" />
//         <circle cx="180" cy="120" r="40" fill="#4B5563" fillOpacity="0.1" />
//         <circle cx="120" cy="180" r="30" fill="#4B5563" fillOpacity="0.1" />
//         <path
//           d="M120 140 Q150 110 180 140"
//           stroke="#4B5563"
//           strokeOpacity="0.3"
//           strokeWidth="3"
//           fill="none"
//         />
//       </svg>
//     </div>
//   );
// }
export default function PremiumIllustration() {
  return (
    <div className="w-full max-w-md">
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <rect width="500" height="500" rx="40" fill="url(#grad)" />
        <circle cx="140" cy="160" r="50" fill="#fff" fillOpacity="0.05" />
        <circle cx="220" cy="240" r="30" fill="#fff" fillOpacity="0.08" />
        <path
          d="M140 160 Q220 100 300 180"
          stroke="#ffffff"
          strokeOpacity="0.1"
          strokeWidth="4"
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0f0f0f" />
            <stop offset="100%" stopColor="#1e1e1e" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
