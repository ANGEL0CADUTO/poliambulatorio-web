"use client";

import { useState } from "react";
import {
    Stethoscope,
    HeartPulse,
    Dumbbell,
    Scan,
} from "lucide-react";
import ServiceModal, { ServiceData } from "./ServiceModal";

// Custom SVG for Ecografie (Loaded via CSS Mask to inherit color)
const UltrasoundIcon = ({ className }: { className?: string }) => (
    <div
        className={className}
        style={{
            WebkitMaskImage: 'url(/ultrasonography_4935376.svg)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskImage: 'url(/ultrasonography_4935376.svg)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            backgroundColor: 'currentColor'
        }}
    />
);

// Custom SVG for Terapie Strumentali (Loaded via CSS Mask)
const TherapyDeviceIcon = ({ className }: { className?: string }) => (
    <div
        className={className}
        style={{
            WebkitMaskImage: 'url(/ultrasound_16342277.svg)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskImage: 'url(/ultrasound_16342277.svg)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            backgroundColor: 'currentColor'
        }}
    />
);

// Custom SVG for Elettromiografie (Loaded via CSS Mask)
const ElectromyographyIcon = ({ className }: { className?: string }) => (
    <div
        className={className}
        style={{
            WebkitMaskImage: 'url(/electromyography.svg)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskImage: 'url(/electromyography.svg)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            backgroundColor: 'currentColor'
        }}
    />
);

// Custom SVG for Diagnostica Vascolare (Loaded via CSS Mask)
const DopplerIcon = ({ className }: { className?: string }) => (
    <div
        className={className}
        style={{
            WebkitMaskImage: 'url(/doppler.svg)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskImage: 'url(/doppler.svg)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            backgroundColor: 'currentColor'
        }}
    />
);

const services: ServiceData[] = [
    {
        id: "visite",
        title: "Visite Specialistiche",
        icon: Stethoscope,
        description:
            "Il nostro team di specialisti è a tua disposizione per diagnosi accurate e piani terapeutici personalizzati.",
        details: ["Fisiatria", "Neurologia", "Dietologia"],
        accessMode:
            "Prestazione erogabile tramite Sistema Sanitario Nazionale (impegnativa), Tariffario Anisap o in regime Privato.",
    },
    {
        id: "cardiologia",
        title: "Cardiologia",
        icon: HeartPulse,
        description:
            "Percorsi completi per la salute del tuo cuore, dalla prevenzione alla diagnosi avanzata.",
        details: ["Visite Cardiologiche", "Elettrocardiogramma (ECG)", "Ecocardiogramma Color Doppler"],
        accessMode: "Disponibile in regime Privato e Tariffario Anisap.",
    },
    {
        id: "vascolare",
        title: "Diagnostica Vascolare",
        icon: DopplerIcon,
        description:
            "Esami non invasivi per lo studio della circolazione arteriosa e venosa.",
        details: ["Ecocolordoppler Arterioso", "Ecocolordoppler Venoso"],
        accessMode:
            "Prestazione erogabile tramite Sistema Sanitario Nazionale (impegnativa), Tariffario Anisap o in regime Privato.",
    },
    {
        id: "ecografie",
        title: "Ecografie",
        icon: UltrasoundIcon,
        description:
            "Indagini ecografiche multidisciplinari con strumentazioni di ultima generazione.",
        details: ["Ecografie Internistiche", "Ecografie Osteoarticolari"],
        accessMode:
            "Prestazione erogabile tramite Sistema Sanitario Nazionale (impegnativa), Tariffario Anisap o in regime Privato.",
    },
    {
        id: "elettromiografie",
        title: "Elettromiografie",
        icon: ElectromyographyIcon,
        description:
            "Esame diagnostico per valutare la funzionalità di muscoli e nervi periferici.",
        details: ["Elettromiografia (EMG) Arti Superiori e Inferiori"],
        accessMode:
            "Prestazione erogabile tramite Sistema Sanitario Nazionale (impegnativa) e regime Privato.",
    },
    {
        id: "fisioterapia",
        title: "Fisioterapia e Palestra",
        icon: Dumbbell,
        description:
            "Riabilitazione funzionale post-traumatica e post-chirurgica in palestra attrezzata.",
        details: ["Rieducazione Motoria", "Ginnastica Posturale", "Palestra Riabilitativa", "Massoterapia"],
        accessMode:
            "Prestazione erogabile tramite Sistema Sanitario Nazionale (impegnativa) o in regime Privato.",
    },
    {
        id: "strumentali",
        title: "Terapie Strumentali",
        icon: TherapyDeviceIcon, // Custom Device Icon
        description:
            "Utilizzo di energie fisiche a scopo terapeutico per la cura di diverse patologie.",
        details: ["Tecarterapia", "Laserterapia", "Magnetoterapia", "Ultrasuoni", "Elettrostimolazioni", "Ionoforesi", "Idrogalvanoterapia"],
        accessMode:
            "Disponibile principalmente in regime Privato e fondi integrativi/convenzioni.",
    },
    {
        id: "moc",
        title: "Densitometria Ossea (MOC)",
        icon: Scan,
        description:
            "Esame per il controllo della calcificazione ossea e la diagnosi dell'osteoporosi.",
        details: ["DEXA Vertebrale", "DEXA Femorale", "Controllo calcificazione ossea"],
        accessMode:
            "La quasi totalità delle prestazioni è erogabile tramite Sistema Sanitario Nazionale (SSN con impegnativa), con Tariffario agevolato Anisap, oppure in regime Privato. Per verificare la modalità di accesso specifica per il singolo esame o trattamento, ti invitiamo a contattare la nostra segreteria. Siamo inoltre convenzionati con i fondi EMEC, FASDAC e CAMPA.",
    },
];

export default function Services() {
    const [selectedService, setSelectedService] = useState<ServiceData | null>(
        null
    );
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (service: ServiceData) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedService(null), 300); // Wait for animation
    };

    return (
        <section id="servizi" className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 font-display">
                        Le Nostre Specialità
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Un'offerta sanitaria completa per rispondere a ogni tua esigenza,
                        dalla diagnosi alla riabilitazione.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => openModal(service)}
                            className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-primary/30 flex flex-col w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
                        >
                            <div className="w-[60px] h-[60px] rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="w-8 h-8 stroke-2 text-primary group-hover:text-primary-dark transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors font-display">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 space-y-2 text-sm leading-relaxed mb-4 flex-grow">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <ServiceModal
                service={selectedService}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </section>
    );
}
