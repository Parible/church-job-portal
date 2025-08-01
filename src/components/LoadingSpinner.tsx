"use client";

import React, { memo } from "react";

export const ButtonLoadingSpinner = memo(function ButtonLoadingSpinner({
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
        borderWidth: thickness,
        borderTopColor: "white",
        borderRightColor: "transparent",
        borderBottomColor: "white",
        borderLeftColor: "white",
      }}
    />
  );
});

const LoadingSpinner = memo(function LoadingSpinner({
  size = 40,
  thickness = 5,
  label = "Loading...",
}: {
  size?: number;
  thickness?: number;
  label?: string;
}) {
  return (
    <div
      role="status"
      aria-label={label}
      className="inline-block animate-spin rounded-full border-solid border-blue-900 border-t-transparent"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: thickness,
      }}
    />
  );
});

export default LoadingSpinner;
