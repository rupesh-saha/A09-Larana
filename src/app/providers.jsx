"use client";

import { ToastProvider } from "@heroui/react";

export function Providers({ children }) {
  return (
    <>
      {/* Set your global toast position here */}
      <ToastProvider placement="bottom-center" />
      {children}
    </>
  );
}