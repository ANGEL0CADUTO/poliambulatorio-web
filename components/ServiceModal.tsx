"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Info } from "lucide-react";

export interface ServiceData {
    id: string;
    title: string;
    icon: any; // Lucide icon
    description: string;
    details: string[];
    accessMode: string;
}

interface ServiceModalProps {
    service: ServiceData | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ServiceModal({
    service,
    isOpen,
    onClose,
}: ServiceModalProps) {
    if (!service) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto relative border border-gray-100">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm hover:bg-gray-100 transition-colors z-20 text-gray-500 hover:text-gray-900"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Content */}
                            <div className="p-8 md:p-10 overflow-y-auto">
                                {/* Header */}
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="p-4 bg-primary/10 rounded-2xl">
                                        <service.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-extrabold text-gray-900 font-display">
                                        {service.title}
                                    </h2>
                                </div>

                                {/* Description */}
                                <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                                    {service.description}
                                </p>

                                {/* Details List */}
                                <div className="bg-background-light rounded-2xl p-8 mb-8 border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 font-display">
                                        Prestazioni Incluse
                                    </h3>
                                    <ul className="space-y-4">
                                        {service.details.map((detail, index) => (
                                            <li key={index} className="flex items-start gap-4">
                                                <div className="p-1 bg-white rounded-full shadow-sm mt-0.5"><CheckCircle className="w-4 h-4 text-primary" /></div>
                                                <span className="text-gray-700 font-medium">
                                                    {detail}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Access Mode */}
                                <div className="border-t border-gray-100 pt-8">
                                    <div className="flex items-start gap-4 bg-primary/5 p-6 rounded-2xl border border-primary/10">
                                        <Info className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2 font-display">
                                                Modalità di Accesso
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed font-medium">
                                                La quasi totalità delle prestazioni è erogabile tramite Sistema Sanitario Nazionale (SSN con impegnativa), con Tariffario agevolato Anisap, oppure in regime Privato. Per verificare la modalità di accesso specifica per il singolo esame o trattamento, ti invitiamo a contattare la nostra segreteria. Siamo inoltre convenzionati con i fondi EMEC, FASDAC e CAMPA.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 flex justify-end gap-4">
                                    <button
                                        onClick={onClose}
                                        className="px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full font-bold transition-colors"
                                    >
                                        Chiudi
                                    </button>
                                    <a
                                        href="#contatti"
                                        onClick={onClose}
                                        className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-colors shadow-soft"
                                    >
                                        Prenota Ora
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
