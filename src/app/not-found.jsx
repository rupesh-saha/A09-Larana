import FooterBar from '@/Components/FooterBar';
import NavBar from '@/Components/NavBar';
import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
  return (
    <>
    <NavBar/>

      <div className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden px-6 mt-23">

        {/* Premium Background Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/3 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-[100px] pointer-events-none"></div>

        {/* The 404 Glassy Container */}
        <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center rounded-3xl bg-white/60 p-12 backdrop-blur-xl border border-white/50 shadow-2xl shadow-blue-900/5">

          {/* Massive Gradient 404 */}
          <h1 className="text-8xl md:text-[150px] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#0066FF] to-blue-300 drop-shadow-sm leading-none mb-6">
            404
          </h1>

          {/* Error Messaging */}
          <h2 className="mb-3 text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Page Not Found
          </h2>
          <p className="mb-10 text-gray-500 font-medium leading-relaxed max-w-md">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link
              href="/"
              className="flex w-full sm:w-auto items-center justify-center rounded-xl bg-[#0066FF] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-105 active:scale-95"
            >
              Back to Home
            </Link>
            <Link
              href="/all-appointments"
              className="flex w-full sm:w-auto items-center justify-center rounded-xl bg-white border border-gray-200 px-8 py-3.5 text-base font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-[#0066FF] active:scale-95"
            >
              Find a Doctor
            </Link>
          </div>
        </div>
      </div>

    <FooterBar/>
    </>
  );
};

export default ErrorPage;