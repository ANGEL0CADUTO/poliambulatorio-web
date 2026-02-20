"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative bg-background-light overflow-hidden min-h-[600px] flex flex-col justify-center border-b border-gray-200">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                    alt="Modern therapy gym"
                    className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background-light via-background-light/90 to-background-light/40"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white text-primary font-bold shadow-soft mb-8 border border-gray-100">
                        <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" style={{ width: '12px', height: '12px' }}></span>
                        Centro Medico Accreditato SSN
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6 font-display">
                        Salute e Riabilitazione <span className="text-primary italic font-light block mt-2">a Castenaso</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl font-medium">
                        Un punto di riferimento per la fisioterapia e la diagnostica
                        specialistica. Accoglienza, professionalità e tecnologie
                        all'avanguardia al servizio del tuo benessere.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Link
                            href="#servizi"
                            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-primary hover:bg-primary-dark transition-all transform hover:scale-105 shadow-soft"
                        >
                            Scopri le Prestazioni
                        </Link>
                        <Link
                            href="#contatti"
                            className="inline-flex justify-center items-center px-8 py-4 border-2 border-primary/20 hover:border-primary/40 text-lg font-bold rounded-full text-gray-700 bg-white/50 hover:bg-white backdrop-blur-sm transition-all shadow-sm"
                        >
                            Prenota Visita
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
