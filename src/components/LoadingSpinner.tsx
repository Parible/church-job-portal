// "use client";

// import React from "react";

// export default function LoadingSpinner({
//   size = 40,
//   thickness = 5,
//   label = "Loading...",
// }: {
//   size?: number;
//   thickness?: number;
//   label?: string;
// }) {
//   return (
//     <div
//       className="inline-block animate-spin rounded-full border-t-transparent border-solid border-blue-900"
//       style={{
//         width: size,
//         height: size,
//         borderWidth: thickness,
//       }}
//       role="status"
//       aria-label={label}
//     />
//   );
// }
"use client";

import React from "react";

export default function LoadingSpinner({
  size = 40,
  thickness = 5,
  label = "Loading...",
  speed = 0.8, // seconds per rotation
}: {
  size?: number;
  thickness?: number;
  label?: string;
  speed?: number; // optional spin speed
}) {
  return (
    <div
      className="inline-block rounded-full border-t-transparent border-solid border-blue-900"
      style={{
        width: size,
        height: size,
        borderWidth: thickness,
        animation: `spin ${speed}s linear infinite`,
      }}
      role="status"
      aria-label={label}
    />
  );
}
