"use client";
import Link from "next/link";
import { Home } from "lucide-react"; 
import AnimatedBorderButton from "@/components/ui/AnimatedBorderButton";

const NotFound = () => {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center pt-32">
      {/* Subtle Background Element */}
      <div className="absolute -z-10 text-[20vw] font-bold text-zinc-500/20 select-none">
        404
      </div>

      <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
        Lost in space?
      </h2>
      
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md mb-10">
        We couldn&apos;t find the page you&apos;re looking for. It might have been moved, 
        or the URL might be incorrect.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        
        <AnimatedBorderButton>
          <Link 
            href="/"
            className="flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </AnimatedBorderButton>
        {/* <button 
          onClick={() => window.history.back()}
          className="flex items-center justify-center gap-2 px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all font-medium cursor-pointer"
        >
          <MoveLeft size={18} />
          Go Back
        </button> */}
      </div>

      <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-900">
        <p className="text-sm text-zinc-500">
          Need help? <Link href="/support" className="underline underline-offset-4">Contact Support</Link>
        </p>
      </div>
    </main>
  );
};

export default NotFound;