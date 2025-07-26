"use client";

import React from "react";

export function ButtonLoadingSpinner({
  size = 22,
  thickness = 3,
  label = "Loading...",
  color = "border-t-white",
  className = "",
}: {
  size?: number;
  thickness?: number;
  label?: string;
  color?: string;
  className?: string;
}) {
  return (
    <div
      role="status"
      aria-label={label}
      className={`inline-block animate-spin rounded-full border border-solid border-neutral-200 ${color} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderTopColor: "white", // actual visible arc
        borderRightColor: "transparent", // gap
        borderBottomColor: "white",
        borderLeftColor: "white",
        borderWidth: thickness,
      }}
    />
  );
}

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
