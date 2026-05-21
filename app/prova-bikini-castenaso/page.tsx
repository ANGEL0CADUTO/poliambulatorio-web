import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Layers,
  Activity,
  Zap,
  UserCheck,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Phone,
  MessageSquare,
  ChevronDown,
  Building,
  Star,
  Clock,
  Sparkle,
  ArrowRight,
  TrendingUp,
  MapPin,
  Mail
} from "lucide-react";

export const metadata: Metadata = {
  title: "Programma Dieta e Palestra Castenaso | FKT Gemelli",
  description: "Percorso scientifico e personalizzato 'Prova Bikini' a Castenaso. Dieta medica personalizzata e allenamento controllato in palestra medica per rimettersi in forma in vista dell'estate.",
  alternates: {
    canonical: "https://www.poliambulatorioprofgemelli.it/prova-bikini-castenaso",
  },
  openGraph: {
    title: "Programma Dieta e Palestra Castenaso | FKT Gemelli",
    description: "Ritrova la forma in salute con il percorso medico integrato Dieta e Palestra del Poliambulatorio FKT Gemelli a Castenaso. Contattaci subito per l'estate!",
    url: "https://www.poliambulatorioprofgemelli.it/prova-bikini-castenaso",
    type: "website",
  }
};

export default function ProvaBikiniPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "In cosa consiste il programma 'Prova Bikini' Dieta e Palestra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "È un percorso medico-scientifico integrato e personalizzato che combina un piano nutrizionale su misura (Dieta) preparato da specialisti ad un programma di allenamento mirato e controllato (Palestra) all'interno del nostro centro medico di Castenaso."
        }
      },
      {
        "@type": "Question",
        "name": "Chi pianifica i programmi nutrizionali (dieta)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La dieta e l'intero percorso nutrizionale sono pianificati ed elaborati esclusivamente da biologi nutrizionisti e medici del Poliambulatorio FKT Gemelli, previa analisi della composizione corporea (massa magra, massa grassa e liquidi)."
        }
      },
      {
        "@type": "Question",
        "name": "Quali sono i vantaggi di allenarsi nella palestra medica di FKT Gemelli?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A differenza di una palestra commerciale, la nostra palestra medica garantisce la costante supervisione di dottori in fisioterapia e scienze motorie. L'allenamento è sicuro, personalizzato per proteggere le articolazioni ed orientato a risultati di tonificazione e dimagrimento rapidi."
        }
      },
      {
        "@type": "Question",
        "name": "Come viene gestita la durata del percorso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il percorso non ha una durata rigida o prestabilita; viene interamente pianificato e personalizzato in base alle tue esigenze fisiche e ai tuoi obiettivi per prepararti al meglio per tutta la stagione estiva."
        }
      },
      {
        "@type": "Question",
        "name": "Come posso attivare il programma a Castenaso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puoi contattare immediatamente la segreteria del Poliambulatorio telefonando allo 051-787359 o inviando un'e-mail a poliamb.gemelli@tiscali.it. Ti guideremo nella prenotazione della prima visita valutativa nutrizionale e motoria."
        }
      }
    ]
  };

  const caratteristicheDieta = [
    "Analisi avanzata della composizione corporea (massa magra/grassa)",
    "Piano alimentare personalizzato studiato da biologi nutrizionisti",
    "Monitoraggio settimanale dei risultati e adattamento metabolico",
    "Educazione alimentare per il mantenimento a lungo termine"
  ];

  const caratteristichePalestra = [
    "Programma di allenamento personalizzato (Medical Fitness)",
    "Supervisione costante di fisioterapisti e chinesiologi esperti",
    "Protocolli cardio e di tonificazione mirati (addome, glutei, gambe)",
    "Ambiente sicuro, sterile e non affollato per la massima serenità"
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background-light text-gray-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Header isPromoPage={true} />

      {/* Immersive Campaign Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 lg:pb-20 overflow-hidden bg-background-light border-b border-gray-200/60">
        
        {/* Soft background glows */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[130px]" />
          <div className="absolute bottom-[-10%] left-[5%] w-[40%] h-[40%] rounded-full bg-amber-500/5 blur-[130px]" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-2 lg:order-1">
              
              {/* Seasonal Campaign Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 text-xs font-bold tracking-wide uppercase backdrop-blur-md shadow-sm">
                <Sparkle className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
                <span>Percorso Medico Personalizzato • Inizia Subito</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] font-display text-gray-900">
                Programma <span className="text-amber-600 font-medium italic">Prova Bikini</span> <br />
                <span className="text-primary-dark">Dieta e Palestra Medica</span>
              </h1>
              
              {/* High-visibility image displayed only on mobile/tablet inside the text flow */}
              <div className="block lg:hidden relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-amber-200 shadow-xl shadow-amber-500/5 bg-white">
                <Image
                  src="/belly_tape.png"
                  alt="Prova Bikini Dieta e Palestra Castenaso"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    Target Toning & Nutrizione Scientifica
                  </span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
                La formula scientifica del Poliambulatorio FKT Gemelli a Castenaso. Un percorso medico integrato e personalizzato guidato da nutrizionisti e fisioterapisti per ritrovare la forma in totale sicurezza ed efficacia per la stagione estiva.
              </p>

              {/* Trust Markers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-gray-200/60 shadow-soft">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-bold text-gray-800">Protocollo Clinico</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-gray-200/60 shadow-soft">
                  <Building className="w-5 h-5 text-primary-dark flex-shrink-0" />
                  <span className="text-xs font-bold text-gray-800">Palestra Medica Autorizzata</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-gray-200/60 shadow-soft">
                  <UserCheck className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span className="text-xs font-bold text-gray-800">Medici e Nutrizionisti</span>
                </div>
              </div>

              {/* Urgent Action Prompts */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contattaci"
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-bold rounded-full text-white bg-amber-500 hover:bg-amber-600 transition-all transform hover:scale-105 shadow-soft shadow-amber-500/20 duration-300 text-center"
                >
                  <span>Contattaci Subito!</span>
                  <ArrowRight className="w-4 h-4 animate-bounce-horizontal" />
                </a>
                <a
                  href="#percorso"
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full text-gray-700 border-2 border-primary/20 hover:border-primary/40 bg-white hover:bg-gray-50 transition-all text-center shadow-sm"
                >
                  Scopri il Percorso
                </a>
              </div>

            </div>

            {/* Right Side Image Block (Visible on Desktop) */}
            <div className="lg:col-span-5 hidden lg:block order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/10 to-primary-light/10 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                
                <div className="relative z-10 rounded-3xl overflow-hidden border border-amber-200/80 shadow-2xl bg-white aspect-[4/5]">
                  <Image
                    src="/belly_tape.png"
                    alt="Rimodellamento Vita e Dieta Castenaso"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                    quality={95}
                  />
                  {/* Subtle styling gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 border border-gray-200/80 backdrop-blur-md text-center shadow-soft space-y-1">
                    <h4 className="text-sm font-bold text-amber-600 uppercase tracking-widest">
                      Percorso Estivo
                    </h4>
                    <p className="text-xs text-gray-700 font-medium">
                      Nutrizione clinica e allenamento medicale focalizzato sul girovita.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Pillars Section (Dieta & Palestra) */}
      <section id="percorso" className="relative py-16 sm:py-24 bg-gradient-to-b from-background-light to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 sm:mb-20 space-y-4">
            <div className="inline-block bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              I Due Pilastri del Percorso
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-gray-900">
              Come Funziona il Programma
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
              Abbiamo unito nutrizione clinica e allenamento medicale per assicurarti risultati rapidi, costanti e duraturi nel pieno rispetto delle articolazioni e della salute.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-24">
            
            {/* Pillar 1: DIETA (Nutrition) */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              
              {/* Image Left */}
              <div className="lg:col-span-5 relative group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/5 to-orange-500/5 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <div className="relative z-10 rounded-3xl overflow-hidden border border-amber-200/60 shadow-xl bg-white aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                  <Image
                    src="/medical_nutrition.png"
                    alt="Piani Nutrizionali Dieta Castenaso"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-amber-800 border border-amber-200 shadow-sm text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                      Pilastro 1: Dieta Medica
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold font-display text-gray-900">
                    Nutrizione Clinica & Piani Nutrizionali Medici
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                  Nessun digiuno o diete drastiche. I nostri biologi nutrizionisti elaborano <strong className="text-gray-900 font-bold">piani alimentari scientifici personalizzati</strong> basati sulla bioimpedenziometria corporea, studiati per accelerare il metabolismo, ridurre la massa grassa e preservare la muscolatura tonica.
                </p>

                <div className="grid gap-3 pt-2">
                  {caratteristicheDieta.map((feat, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 font-semibold leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Pillar 2: PALESTRA (Medical Fitness) */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              
              {/* Text Left (Desktop) */}
              <div className="lg:col-span-7 order-2 lg:order-1 space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold font-display text-gray-900">
                    Palestra Medica & Allenamento Supervisionato
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                  L&apos;allenamento si svolge all&apos;interno della nostra <strong className="text-gray-900 font-bold">palestra medica protetta</strong> a Castenaso. Sarai seguito in ogni seduta da fisioterapisti e specialisti motori per eseguire esercizi mirati di tonificazione cutanea, muscolare ed elettrostimolazione (addome e glutei), in totale sicurezza articolare.
                </p>

                <div className="grid gap-3 pt-2">
                  {caratteristichePalestra.map((feat, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 font-semibold leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Right */}
              <div className="lg:col-span-5 order-1 lg:order-2 relative group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-light/10 to-primary/10 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <div className="relative z-10 rounded-3xl overflow-hidden border border-primary/10 shadow-xl bg-white aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                  <Image
                    src="/medical_fitness.png"
                    alt="Palestra Medica e Allenamento Castenaso"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-primary-dark border border-primary/20 shadow-sm text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                      Pilastro 2: Palestra Medica
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Main Campaign Booking CTA: CONTATTACI SUBITO! */}
      <section id="contattaci" className="py-16 sm:py-24 bg-white scroll-mt-20 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[90px]" />
          <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-[90px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary p-6 sm:p-12 lg:p-16 text-white shadow-2xl text-center space-y-6 sm:space-y-8">
            
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-300 mx-auto animate-bounce">
              <Sparkle className="w-7 h-7 fill-amber-300" />
            </div>

            <div className="space-y-4">
              <div className="inline-block text-xs font-bold text-amber-300 uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                Offerta Limitata • Promo Estiva
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight">
                Contattaci Subito per la Prova Bikini!
              </h2>
              <p className="text-white/95 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                I posti disponibili per il percorso personalizzato Dieta + Palestra Medica sono limitati per garantire la massima qualità assistenziale da parte del nostro staff. Non rimandare la tua salute.
              </p>
            </div>

            {/* Glowing Action Buttons - Stacked on Mobile, Inline on Desktop */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="tel:051787359"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white hover:bg-gray-100 text-primary-dark font-extrabold rounded-full transition-all shadow-lg hover:scale-105 duration-300 text-center text-sm sm:text-base"
              >
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Chiama lo 051-787359</span>
              </a>
              <a
                href="mailto:poliamb.gemelli@tiscali.it"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 border border-white/30 hover:bg-white/10 text-white font-extrabold rounded-full transition-all shadow-lg hover:scale-105 duration-300 text-center text-sm sm:text-base backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>Invia un&apos;Email</span>
              </a>
            </div>

            {/* Localized Castenaso Address Details */}
            <div className="pt-6 border-t border-white/10 max-w-xl mx-auto space-y-3">
              <div className="flex items-center justify-center gap-2 text-white/95">
                <MapPin className="w-5 h-5 text-amber-300 flex-shrink-0" />
                <span className="font-bold text-xs sm:text-sm">Castenaso (Bologna) — Via Fiesso 6/6</span>
              </div>
              <p className="text-[10px] sm:text-xs text-white/80 leading-relaxed font-medium">
                Poliambulatorio FKT Gemelli • Direzione Sanitaria Specialistica • Parcheggio privato riservato • Struttura totalmente priva di barriere architettoniche.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-t border-gray-200/60 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <HelpCircle className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 font-display">
              Chiarimenti sul Percorso
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Risposte rapide per togliere ogni dubbio ed iniziare subito ad allenarti a Castenaso.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <details className="group border border-gray-200/80 rounded-3xl bg-white p-5 sm:p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-primary/30 shadow-sm hover:shadow-soft">
              <summary className="flex justify-between items-center font-bold text-gray-900 cursor-pointer list-none text-sm sm:text-base lg:text-lg">
                <span>In cosa consiste il programma &apos;Prova Bikini&apos; Dieta e Palestra?</span>
                <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-primary flex-shrink-0" />
              </summary>
              <p className="mt-4 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed pl-4 border-l-2 border-primary/20">
                Si tratta di un percorso scientifico integrato e personalizzato, studiato per rimetterti in forma in salute. Unisce la consulenza e la stesura di un piano nutrizionale su misura (Dieta) preparato da specialisti nutrizionisti ad un programma di allenamento e tonificazione controllato (Palestra) all&apos;interno della nostra palestra medica.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group border border-gray-200/80 rounded-3xl bg-white p-5 sm:p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-primary/30 shadow-sm hover:shadow-soft">
              <summary className="flex justify-between items-center font-bold text-gray-900 cursor-pointer list-none text-sm sm:text-base lg:text-lg">
                <span>Chi pianifica i programmi nutrizionali (dieta)?</span>
                <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-primary flex-shrink-0" />
              </summary>
              <p className="mt-4 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed pl-4 border-l-2 border-primary/20">
                La pianificazione e il controllo nutrizionale sono affidati esclusivamente ai biologi nutrizionisti del Poliambulatorio FKT Gemelli. Il piano viene sviluppato solo dopo un&apos;analisi attenta dello stato di salute del paziente e una misurazione bioimpedenziometrica precisa della composizione corporea.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group border border-gray-200/80 rounded-3xl bg-white p-5 sm:p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-primary/30 shadow-sm hover:shadow-soft">
              <summary className="flex justify-between items-center font-bold text-gray-900 cursor-pointer list-none text-sm sm:text-base lg:text-lg">
                <span>Quali sono i vantaggi di allenarsi nella palestra medica di FKT Gemelli?</span>
                <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-primary flex-shrink-0" />
              </summary>
              <p className="mt-4 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed pl-4 border-l-2 border-primary/20">
                La nostra palestra medica si differenzia nettamente dalle palestre tradizionali per la presenza costante di dottori in fisioterapia e scienze motorie. L&apos;attività fisica viene programmata per stimolare il dimagrimento e la tonificazione muscolare, ma con un controllo assoluto che evita sovraccarichi articolari, infortuni o posture scorrette.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group border border-gray-200/80 rounded-3xl bg-white p-5 sm:p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-primary/30 shadow-sm hover:shadow-soft">
              <summary className="flex justify-between items-center font-bold text-gray-900 cursor-pointer list-none text-sm sm:text-base lg:text-lg">
                <span>Come viene gestita la durata del percorso?</span>
                <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-primary flex-shrink-0" />
              </summary>
              <p className="mt-4 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed pl-4 border-l-2 border-primary/20">
                Il percorso non ha una durata predefinita o rigida. Viene interamente pianificato e personalizzato dai nostri nutrizionisti e fisioterapisti in base alla tua condizione di partenza, ai tuoi obiettivi e alla risposta del tuo corpo, garantendoti risultati visibili e stabili per tutta la stagione estiva.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group border border-gray-200/80 rounded-3xl bg-white p-5 sm:p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-primary/30 shadow-sm hover:shadow-soft">
              <summary className="flex justify-between items-center font-bold text-gray-900 cursor-pointer list-none text-sm sm:text-base lg:text-lg">
                <span>Come posso attivare il programma a Castenaso?</span>
                <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-primary flex-shrink-0" />
              </summary>
              <p className="mt-4 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed pl-4 border-l-2 border-primary/20">
                Attivarlo è facilissimo. Contattaci subito chiamando la nostra segreteria al numero <strong>051-787359</strong> o inviando un&apos;e-mail a <strong>poliamb.gemelli@tiscali.it</strong>. Prenoteremo la tua consulenza nutrizionale e motoria di inizio percorso e concorderemo insieme il calendario delle sedute.
              </p>
            </details>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
