"use client";

import { Building2, ShieldCheck, HeartPulse, Building } from "lucide-react";

export default function TrustBar() {
    return (
        <section className="bg-white border-b border-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                    <p className="text-sm md:text-base text-gray-500 uppercase tracking-widest font-bold whitespace-nowrap">
                        Prestazioni in convenzione con:
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 w-full">
                        <div className="flex items-center gap-2 font-extrabold text-2xl text-primary transition-all hover:scale-105">
                            <ShieldCheck className="w-8 h-8 stroke-2" />
                            SSN
                        </div>
                        <div className="flex items-center gap-2 font-extrabold text-2xl text-primary transition-all hover:scale-105">
                            <Building2 className="w-8 h-8 stroke-2" />
                            EMEC
                        </div>
                        <div className="flex items-center gap-2 font-extrabold text-2xl text-primary transition-all hover:scale-105">
                            <HeartPulse className="w-8 h-8 stroke-2" />
                            FASDAC
                        </div>
                        <div className="flex items-center gap-2 font-extrabold text-2xl text-primary transition-all hover:scale-105">
                            <Building className="w-8 h-8 stroke-2" />
                            CAMPA
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
