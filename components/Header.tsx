"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Clock, MapPin, Activity } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Top Utility Bar */}
            <div className="bg-primary/5 text-gray-700 text-sm py-2 px-4 border-b border-primary/10">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>Lun - Ven: 08:00 - 18:00 (Orario Continuato)</span>
                        </div>
                        <div className="hidden md:flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>Via Fiesso 6/6, Castenaso (BO)</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-primary-dark">
                        <Phone className="w-4 h-4" />
                        <a href="tel:051787359" className="hover:underline text-lg">
                            051-787359
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-soft border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        {/* Logo Area */}
                        <Link href="/" className="flex flex-shrink-0 items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <Activity className="text-primary w-8 h-8" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-extrabold tracking-tight text-primary-dark font-display">
                                    FKT GEMELLI
                                </span>
                                <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">
                                    Poliambulatorio
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link
                                href="#"
                                className="text-base font-medium text-gray-900 hover:text-primary transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="#servizi"
                                className="text-base font-medium text-gray-600 hover:text-primary transition-colors"
                            >
                                Prestazioni
                            </Link>
                            <Link
                                href="#ssn"
                                className="text-base font-medium text-gray-600 hover:text-primary transition-colors"
                            >
                                Accreditamento SSN
                            </Link>
                            <Link
                                href="#contatti"
                                className="text-base font-medium text-gray-600 hover:text-primary transition-colors"
                            >
                                Contatti
                            </Link>
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link
                                href="#contatti"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-full text-white bg-primary hover:bg-primary-dark transition-all transform hover:scale-105 shadow-soft"
                            >
                                Prenota Ora
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
                            >
                                {isOpen ? (
                                    <X className="w-8 h-8" />
                                ) : (
                                    <Menu className="w-8 h-8" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <Link
                                href="#"
                                className="block px-3 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="#servizi"
                                className="block px-3 py-4 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Prestazioni
                            </Link>
                            <Link
                                href="#ssn"
                                className="block px-3 py-4 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Accreditamento SSN
                            </Link>
                            <Link
                                href="#contatti"
                                className="block px-3 py-4 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Contatti
                            </Link>
                            <div className="pt-4">
                                <Link
                                    href="#contatti"
                                    className="block w-full text-center px-6 py-3 border border-transparent text-base font-bold rounded-full text-white bg-primary hover:bg-primary-dark transition-colors shadow-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Prenota Ora
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
