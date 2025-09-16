"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AnimatedCursor from "react-animated-cursor";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={2}
        />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
}
