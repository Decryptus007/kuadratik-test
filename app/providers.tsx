"use client";

import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/lib/store";

// Dynamically import AnimatedCursor with SSR disabled
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
  loading: () => null,
});

function AnimatedCursorWrapper() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only run on client
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);
  
  if (!isDesktop) return null;
  
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={2}
    />
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  // Use a state to track if we're on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render anything until we're on the client
  if (!isClient) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {null}
          </TooltipProvider>
        </PersistGate>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnimatedCursorWrapper />
          {children}
        </TooltipProvider>
      </PersistGate>
    </Provider>
  );
}
