"use client";

import { PhoneCall } from "lucide-react";

export default function PreFooterCTA() {
    return (
        <section className="bg-primary/5 py-24 relative overflow-hidden border-t border-primary/10">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary-dark shadow-sm text-sm font-bold mb-8">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                    Disponibilità Immediata
                </div>

                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 font-display leading-tight">
                    Hai bisogno di un consulto medico o di una terapia?
                </h2>

                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                    Prenota ora la tua visita senza tempi di attesa. Il nostro team di specialisti è pronto ad accoglierti.
                </p>

                <a
                    href="tel:051787359"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-[0_8px_30px_rgb(8,145,178,0.3)] hover:shadow-[0_8px_40px_rgb(8,145,178,0.4)]"
                >
                    <PhoneCall className="w-6 h-6" />
                    Chiama lo 051-787359
                </a>
                <p className="mt-6 text-sm text-gray-500 font-medium">
                    Lunedì - Venerdì: 08:00 - 18:00 (Orario Continuato)
                </p>
            </div>
        </section>
    );
}
