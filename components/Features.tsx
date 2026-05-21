"use client";

import { Clock, Microscope, Users } from "lucide-react";

export default function Features() {
    return (
        <section className="py-10 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 font-display">
                        Perché Sceglierci
                    </h2>
                    <p className="text-base text-gray-600 max-w-2xl mx-auto">
                        Una struttura medica d&apos;eccellenza pensata attorno alle esigenze del paziente.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                            <Clock className="w-7 h-7 text-primary-dark" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                            Orario Continuato
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Aperti dalle 08:00 alle 18:00 senza interruzioni per venire incontro alle tue esigenze e impegni quotidiani.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                            <Microscope className="w-7 h-7 text-primary-dark" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                            Tecnologie All&apos;avanguardia
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Attrezzature elettromedicali moderne ed ecografi di ultima generazione per diagnosi accurate e terapie mirate.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                            <Users className="w-7 h-7 text-primary-dark" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                            Spazi Accessibili
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Palestra riabilitativa completamente attrezzata e ambulatori progettati nel totale abbattimento delle barriere architettoniche.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
