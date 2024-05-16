import type { AppProps } from "next/app";
import { Menubar } from "@/components/Menubar";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { WebApp } from "@grammyjs/web-app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Toaster />
    <main
      className="relative h-screen bg-cover overflow-x-hidden overflow-y-hidden"
      style={{ background: `url('/img/stars.png')` }}
    >
      <div className="h-full">
        <Component {...pageProps} />
        <div className="container mx-auto px-6">
          <Menubar />
        </div>
      </div>
    </main>
    </>
  );
}
