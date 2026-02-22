import Link from "next/link";
import { Mail, MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contatti" className="bg-gray-50 text-gray-600 pt-16 pb-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-12 mb-12">
                    {/* Info Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-extrabold text-primary-dark tracking-tight font-display">
                                FKT GEMELLI
                            </span>
                        </div>
                        <p className="text-gray-400">
                            Il tuo centro di fiducia per la salute a Castenaso. Accreditato SSN
                            per la massima qualità delle cure.
                        </p>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-primary w-5 h-5 mt-1" />
                                <span>
                                    Via Fiesso 6/6
                                    <br />
                                    40055 Castenaso (BO)
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-primary w-5 h-5 mt-0.5" />
                                <a
                                    href="tel:051787359"
                                    className="hover:text-primary-dark font-medium transition-colors"
                                >
                                    051-787359
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-primary w-5 h-5 mt-0.5" />
                                <a
                                    href="mailto:poliamb.gemelli@tiscali.it"
                                    className="hover:text-primary-dark font-medium transition-colors"
                                >
                                    poliamb.gemelli@tiscali.it
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Hours Column */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-6 font-display">
                            Orari di Apertura
                        </h3>
                        <ul className="space-y-4 text-sm md:text-base">
                            <li className="flex justify-between border-b border-gray-200 pb-3">
                                <span>Lunedì - Venerdì</span>
                                <span className="font-bold text-gray-900">
                                    08:00 - 18:00
                                </span>
                            </li>
                            <li className="flex justify-between border-b border-gray-200 pb-3">
                                <span>Sabato - Domenica</span>
                                <span className="font-bold text-gray-900">Chiuso</span>
                            </li>
                        </ul>
                        <div className="mt-8 bg-white border border-gray-100 p-6 rounded-2xl shadow-soft">
                            <p className="text-gray-900 font-bold mb-2 font-display">
                                SSN e Privato
                            </p>
                            <p className="text-sm mb-4 text-gray-600">Per prenotazioni o informazioni chiamaci ora.</p>
                            <a
                                href="tel:051787359"
                                className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md"
                            >
                                CHIAMA LA SEGRETERIA
                            </a>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="h-full min-h-[300px] rounded-2xl overflow-hidden bg-gray-100 relative group shadow-soft border border-gray-200">
                        <iframe
                            title="Mappa Castenaso"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(20%) opacity(80%)" }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.166373724838!2d11.4394043!3d44.5085444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd3a5f4f4f4f5%3A0x1234567890abcdef!2sVia%20Fiesso%2C%206%2C%2040055%20Castenaso%20BO!5e0!3m2!1sit!2sit!4v1620000000000!5m2!1sit!2sit"
                            className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity"
                        ></iframe>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 text-center">
                            <a
                                href="https://www.google.com/maps/dir//Via+Fiesso,+6,+40055+Castenaso+BO"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pointer-events-auto bg-white text-primary-dark px-6 py-3 rounded-full shadow-soft font-bold flex items-center gap-2 hover:scale-105 transition-transform border border-gray-100"
                            >
                                <Navigation className="text-primary w-5 h-5" />
                                Ottieni Indicazioni
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-sm text-gray-500">
                    <div className="space-y-1">
                        <p>
                            © 2026 Poliambulatorio Privato di Fisiokinesiterapia e Rieducazione Funzionale del Prof. Giovanni Gemelli & C. S.a.s.
                        </p>
                        <p>
                            Sede Legale e Operativa: Via di Fiesso 6/6 - 40055 Castenaso (BO) | P.IVA e C.F: 01854771209
                        </p>
                        <p>
                            Direttore Sanitario: Prof. Giovanni Gemelli - Iscrizione Ordine dei Medici di Bologna n. [INSERIRE_NUMERO_ALBO] | Aut. San. 12533/2004
                        </p>
                    </div>
                    <div className="flex gap-6 whitespace-nowrap">
                        <a href="https://www.iubenda.com/privacy-policy/73639484" className="iubenda-nostyle no-brand iubenda-noiframe hover:text-primary-dark font-medium transition-colors" title="Privacy Policy">Privacy Policy</a>
                        <a href="https://www.iubenda.com/privacy-policy/73639484/cookie-policy" className="iubenda-nostyle no-brand iubenda-noiframe hover:text-primary-dark font-medium transition-colors" title="Cookie Policy">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
