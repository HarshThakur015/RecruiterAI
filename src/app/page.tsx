"use client";
import React, { useEffect, useRef, useState } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Link from "next/link";
import { Sparkles } from "lucide-react";
// @ts-ignore
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export default function Home() {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<any>(null);

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            setVantaEffect(
                NET({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x00c6ff,
                    backgroundColor: 0x020024,
                    points: 20.0,
                    maxDistance: 20.0,
                    spacing: 20.0,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <main ref={vantaRef} className="min-h-screen flex items-center justify-center bg-black overflow-hidden relative">
            <div className="h-[40rem] w-full flex items-center justify-center relative z-10">
                <PinContainer
                    title="/recruiterAi.com"
                    href="/landing-page"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            RecruiterAI
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                The AI-powered recruiting automation platform for modern teams.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-slate-900/40 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-105">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                    <span className="text-white font-black text-5xl font-sans select-none">R</span>
                                </div>
                                <div className="text-2xl font-bold text-white tracking-tight">
                                    Recruiter<span className="text-blue-500">AI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </PinContainer>
            </div>
        </main>
    );
}
