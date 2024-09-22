"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { LOADER_DURATION } from "@/lib/consts";
import "@/styles/loader.css";

interface LoaderContextType {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const useLoader = () => {
    const context = useContext(LoaderContext);
    if (!context) {
        throw new Error("useLoader must be used within a LoaderProvider");
    }
    return context;
};

interface LoaderProviderProps {
    children: ReactNode;
}

export function LoaderProvider({ children }: LoaderProviderProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: "-100%" }}
                    transition={{ duration: 0.5, ease: "easeIn", delay: LOADER_DURATION - 0.5 }}
                    className="fixed inset-0 flex items-center justify-center bg-[#f3eee6] w-full h-[100dvh] overflow-hidden"
                    style={{ zIndex: 9999 }}
                    onAnimationComplete={() => {
                        console.log("onAnimationComplete");
                        setIsLoading(false);
                    }}
                >
                    <div className="flex flex-col items-center cup-container">
                        <div className="cup mb-3">
                            <span className="steam"></span>
                            <span className="steam"></span>
                            <span className="steam"></span>
                            <div className="cup-handle"></div>
                        </div>
                        <p className="text-lg font-semibold text-[#352a22]">Cargando...</p>
                    </div>
                </motion.div>
            )}
            {children}
        </LoaderContext.Provider>
    );
}
