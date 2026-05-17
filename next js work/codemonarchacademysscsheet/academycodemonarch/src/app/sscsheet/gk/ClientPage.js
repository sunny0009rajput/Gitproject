"use client";

import dynamic from "next/dynamic";

const MainPage = dynamic(() => import("./MainPage"), {
  ssr: false,
  loading: () => <div className="p-4 text-center">Loading...</div>,
});

export default function ClientPage() {
  return <MainPage />;
}
