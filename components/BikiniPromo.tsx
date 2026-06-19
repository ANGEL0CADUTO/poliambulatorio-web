"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle, Dumbbell, Activity } from "lucide-react";

export default function BikiniPromo() {
    return (
        <section className="relative py-20 sm:py-28 overflow-hidden bg-white border-t border-b border-gray-100">
            {/* Ambient decorative glowing blobs */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber-500/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[5%] w-[45%] h-[45%] rounded-full bg-primary/5 blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Content */}
                    <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-2 lg:order-1">
                        
                        {/* Seasonal Campaign Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60 text-xs font-bold tracking-wide uppercase shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
                            <span>Percorso Speciale Estivo • Prova Bikini</span>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight font-display text-gray-900">
                                Dieta e Palestra Medica:<br />
                                <span className="text-amber-600 italic font-medium">Rimodella il Girovita</span> in Salute
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                Ritrova la forma ideale e il benessere per l&apos;estate con il percorso medico-scientifico integrato del Poliambulatorio FKT Gemelli a Castenaso. Guidato esclusivamente da nutrizionisti e fisioterapisti per garantirti la massima efficacia in totale sicurezza.
                            </p>
                        </div>

                        {/* Two Pillars Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 pt-2">
                            {/* Pillar 1: Nutrition */}
                            <div className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200/30 space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-white border border-amber-200/50 flex items-center justify-center text-amber-600 shadow-sm">
                                    <Activity className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-base sm:text-lg">Dieta Clinica Personalizzata</h3>
                                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                    Piani nutrizionali elaborati da nutrizionisti esperti basati sulla tua composizione corporea reale.
                                </p>
                            </div>

                            {/* Pillar 2: Medical Fitness */}
                            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10 space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-white border border-primary/20 flex items-center justify-center text-primary shadow-sm">
                                    <Dumbbell className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-base sm:text-lg">Palestra Medica Assistita</h3>
                                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                    Allenamenti di tonificazione e girovita sotto la costante supervisione di fisioterapisti.
                                </p>
                            </div>
                        </div>

                        {/* Key Benefits List */}
                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm sm:text-base text-gray-700 font-semibold">Consulenze mediche e monitoraggi settimanali inclusi</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm sm:text-base text-gray-700 font-semibold">Nessun carico nocivo sulle articolazioni e sulla schiena</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm sm:text-base text-gray-700 font-semibold">Posti limitati per garantire la massima qualità assistenziale</span>
                            </div>
                        </div>

                        {/* Interactive CTA button */}
                        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <Link
                                href="/prova-bikini-castenaso"
                                className="inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-bold rounded-full text-white bg-amber-500 hover:bg-amber-600 transition-all transform hover:scale-105 shadow-[0_8px_25px_rgba(245,158,11,0.25)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.4)] duration-300 text-center cursor-pointer"
                            >
                                <span>Scopri il Programma Bikini</span>
                                <ArrowRight className="w-4 h-4 animate-bounce-horizontal" />
                            </Link>
                            <Link
                                href="/prova-bikini-castenaso#faq"
                                className="inline-flex justify-center items-center px-6 py-4 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors text-center"
                            >
                                Come funziona? Leggi le FAQ
                            </Link>
                        </div>

                    </div>

                    {/* Right Column: Premium Image Container */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="relative group max-w-md mx-auto lg:max-w-none">
                            {/* Decorative background glows */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-500/10 to-primary/10 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                            
                            {/* Image wrapper */}
                            <div className="relative z-10 rounded-3xl overflow-hidden border border-amber-200/60 shadow-xl bg-white aspect-[4/5]">
                                <Image
                                    src="/belly_tape.png"
                                    alt="Programma Prova Bikini Castenaso"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    quality={95}
                                />
                                
                                {/* Bottom shadow overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                
                                {/* Floating mini glass-card on the image */}
                                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 border border-white/20 backdrop-blur-md text-center shadow-lg transform group-hover:translate-y-[-5px] transition-transform duration-500">
                                    <span className="block text-xs font-extrabold text-amber-600 uppercase tracking-widest mb-1">
                                        FKT Gemelli Castenaso
                                    </span>
                                    <p className="text-[11px] sm:text-xs text-gray-700 font-semibold">
                                        Nutrizione scientifica ed esercizi mirati al girovita.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
