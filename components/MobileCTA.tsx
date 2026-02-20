"use client";

import { PhoneCall } from "lucide-react";

export default function MobileCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.1)] p-4 md:hidden border-t border-gray-100">
            <a
                href="tel:051787359"
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-colors text-lg"
            >
                <PhoneCall className="w-5 h-5" />
                Chiama Ora
            </a>
        </div>
    );
}
