import * as React from "react";

export function Button({ className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
