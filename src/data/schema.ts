import type {Thing, WithContext} from 'schema-dts'

type SchemaItem = WithContext<Thing>;

interface BreadcrumbItem {
  name: string;
  url: string;
}

// ** DATA **

const SITE = "https://www.ilfisioadomicilio.it";

const provider = {
  "@type": "MedicalBusiness",
  "name": "Il Fisio a Domicilio — Dott. Emanuele Monea",
  "url": SITE,
};

const areaServed = [
        { "@type": "City", "name": "San Siro" },
        { "@type": "City", "name": "Baggio" },
        { "@type": "City", "name": "Quinto Romano" },
        { "@type": "City", "name": "Figino" },
        { "@type": "City", "name": "Trenno" },
        { "@type": "City", "name": "Muggiano" },
        { "@type": "City", "name": "Gallaratese" },
        { "@type": "City", "name": "Forze Armate" },
        { "@type": "City", "name": "Pero" },        
        { "@type": "City", "name": "Rho" },        
        { "@type": "City", "name": "Cornaredo" },        
        { "@type": "City", "name": "Corsico" },        
        { "@type": "City", "name": "Settimo Milanese" },
        { "@type": "City", "name": "Cusago" },
        { "@type": "City", "name": "Trezzano sul Naviglio" },
        { "@type": "City", "name": "Assago" },
        { "@type": "City", "name": "Buccinasco" },        
        { "@type": "City", "name": "Pregnana Milanese" },
        { "@type": "City", "name": "Vanzago" },
        { "@type": "City", "name": "Pogliano Milanese" },
        { "@type": "City", "name": "Bareggio" },
        { "@type": "City", "name": "Sedriano" },
        { "@type": "City", "name": "Vittuone" },
        { "@type": "City", "name": "Arluno" },
        { "@type": "City", "name": "Crobetta" },
        { "@type": "City", "name": "Cisliano" },
        { "@type": "City", "name": "Gaggiano" },
        { "@type": "AdministrativeArea", "name": "Milano Ovest" }
];

const founder = {
  "@type": "Person",
  "name": "Emanuele Monea",
  "jobTitle": "Fisioterapista",
  "url": `${SITE}/chi-sono`,
};

const openingHours =  {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
}

function service(name: string, description: string, slug: string, category: string, conditions: string[]): SchemaItem{
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `${SITE}/servizi/${slug}`,
    "serviceType": "Fisioterapia domiciliare",
    "category": category,
    "provider": provider,
    "areaServed": areaServed,
    "author": founder,
    ...(conditions && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Condizioni trattate",
        "itemListElement": conditions.map((c) => ({
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": c },
        })),
      },
    }),
  } as SchemaItem;
}


export function breadcrumb(items: BreadcrumbItem[] ) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i: number) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url,
    })),
  } as SchemaItem;
}
 

export const schemas = {
  homepage: {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Il Fisio a Domicilio — Dott. Emanuele Monea",
    "url": SITE,
    "logo": `${SITE}images/logo.png`,
    "image": `${SITE}images/chi-sono.jpg`,
    "description": "Fisioterapista a domicilio nell'ovest milanese. Riabilitazione, ortopedica, geriatrica, sportiva, neurologica.",
    "telephone": "+393395721209",
    "email": "info@emanuelemonea.it",
    "priceRange": "€€",
     "areaServed": areaServed,
    "openingHoursSpecification": openingHours,
    "founder": founder,
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servizi di fisioterapia domiciliare",
        "itemListElement": [
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Riabilitazione post-operatoria",
                "url": `${SITE}/riabilitazione-post-operatoria`
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Fisioterapia ortopedica",
                "url": `${SITE}/riabilitazione-ortopedica`
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Fisioterapia geriatrica",
                "url": `${SITE}/riabilitazione-geriatrica`
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Fisioterapia sportiva",
                "url": `${SITE}/riabilitazione-sportiva`
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Fisioterapia neurologica",
                "url": `${SITE}/riabilitazione-neurologica`
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Riabilitazione cardiologica",
                "url": `${SITE}/riabilitazione-cardiologica`
            }
        }
        ]
    }
  } as SchemaItem,

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Il Fisio a Domicilio",
    "url": SITE,
  } as SchemaItem,

  chiSono: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Emanuele Monea",
    "jobTitle": "Fisioterapista",
    "url": `${SITE}/chi-sono`,
    "image": `${SITE}/images/chi-sono.jpg`,
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Università Humanitas di Rozzano",
    },
    "worksFor": provider,
    "knowsAbout": [
      "Fisioterapia ortopedica",
      "Riabilitazione post-operatoria",
      "Fisioterapia geriatrica",
      "Fisioterapia sportiva",
      "Fisioterapia neurologica",
      "Riabilitazione cardiologica",
    ],
  } as SchemaItem,

  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Quanto dura una seduta?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tra 45 e 60 minuti, a seconda del trattamento. La prima visita dura circa un'ora in quanto la valutazione iniziale richiede più tempo.",
            },
        },
        {
            "@type": "Question",
            "name": "Che cosa mi serve?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Un piccolo spazio in cui si può lavorare, un pizzico di collaborazione e un po' d'impegno.",
            },
        },
        {
            "@type": "Question",
            "name": "Che attrezzatura porti a domicilio?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dipende da cosa è necessario durante il percorso terapeutico. Ho a disposizione un lettino fisioterapico, bande elastiche e altra attrezzatura specifica.",
            },
        },
        {
            "@type": "Question",
            "name": "Posso disdire o spostare un appuntamento?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sì. Prima delle 24 ore precedenti.",
            },
        },
        {
            "@type": "Question",
            "name": "Come funziona la prima visita?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Durante la prima visita viene effettuata la raccolta dei dati anamnestici, la valutazione iniziale, l'esame obiettivo e la somministrazione delle scale di valutazione. Questo permette la definizione di un punto di partenza e la definizione del piano di trattamento. Dura circa un'ora.",
            },
        },
        {
            "@type": "Question",
            "name": "Serve la prescrizione del medico?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Il fisioterapista è un professionista sanitario con la possibilità di accesso diretto. Puoi contattarmi direttamente senza prescrizione.",
            },
        },
        {
            "@type": "Question",
            "name": "Quante sedute servono per il mio problema?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dipende dal problema e da altri fattori. Se vuoi saperlo contattami e spiegami il problema: è più probabile che io riesca a darti una risposta più precisa.",
            },
        },
        {
            "@type": "Question",
            "name": "Quante sedute a settimana?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dipende dalla fase del percorso. In fase acuta o subito dopo un intervento, di solito 3 volte a settimana. Man mano che si progredisce si scende a 2, poi a 1.",
            },
        },
        {
            "@type": "Question",
            "name": "Come funziona il pagamento?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tramite bonifico bancario. A breve introdurrò la possibilità di pagare con carta.",
            },
        },
        {
            "@type": "Question",
            "name": "Quanto costa una seduta?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "65€. Un pacchetto di 5 sedute costa 300€. A questi importi va aggiunto il 4% per l'INPS.",
            },
        },
        {
            "@type": "Question",
            "name": "Posso detrarre il costo?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sì, per tutte le spese sanitarie oltre l'importo di 129,11€ annui. Il pagamento deve essere tracciabile.",
            },
        },
    ],
  } as SchemaItem,

  servizi: {
 
    postOperatoria: service(
      "Riabilitazione post-operatoria a domicilio",
      "Riabilitazione a domicilio dopo intervento chirurgico. Protesi d'anca, ginocchio, artroscopia, ricostruzione legamenti. Il percorso inizia nei primi giorni dopo la dimissione.",
      "riabilitazione-post-operatoria",
      "Riabilitazione post-chirurgica",
      [
        "Riabilitazione protesi d'anca",
        "Riabilitazione protesi di ginocchio",
        "Riabilitazione post-artroscopia",
        "Riabilitazione ricostruzione legamento crociato",
        "Riabilitazione post-osteosintesi",
        "Riabilitazione riparazione cuffia dei rotatori",
        "Riabilitazione interventi alla colonna vertebrale",
      ]
    ),
 
    ortopedica: service(
      "Fisioterapia ortopedica a domicilio",
      "Fisioterapia muscoloscheletrica a domicilio per lombalgia, cervicalgia, dolori articolari e problemi posturali. Terapia manuale, esercizio terapeutico ed educazione.",
      "fisioterapia-ortopedica",
      "Fisioterapia muscoloscheletrica",
      [
        "Trattamento lombalgia",
        "Trattamento cervicalgia",
        "Trattamento dolori articolari",
        "Trattamento problemi posturali",
        "Trattamento tendinopatie",
      ]
    ),
 
    geriatrica: service(
      "Fisioterapia geriatrica a domicilio",
      "Fisioterapia a domicilio per persone anziane. Recupero della mobilità, equilibrio, prevenzione cadute, mantenimento dell'autonomia nelle attività quotidiane.",
      "fisioterapia-geriatrica",
      "Fisioterapia geriatrica",
      [
        "Rieducazione alla deambulazione",
        "Miglioramento dell'equilibrio",
        "Prevenzione cadute",
        "Recupero autonomia attività quotidiane",
      ]
    ),
 
    sportiva: service(
      "Fisioterapia sportiva a domicilio",
      "Fisioterapia sportiva a domicilio per strappi muscolari, distorsioni, tendiniti. Recupero funzionale e riatletizzazione per il ritorno all'attività.",
      "fisioterapia-sportiva",
      "Fisioterapia sportiva",
      [
        "Trattamento strappi muscolari",
        "Trattamento distorsioni",
        "Trattamento tendinopatie",
        "Riatletizzazione post-infortunio",
      ]
    ),
 
    neurologica: service(
      "Fisioterapia neurologica a domicilio",
      "Riabilitazione neurologica a domicilio dopo ictus, per sclerosi multipla e Parkinson. Recupero motorio, equilibrio, coordinazione nell'ambiente quotidiano del paziente.",
      "fisioterapia-neurologica",
      "Fisioterapia neurologica",
      [
        "Riabilitazione post-ictus",
        "Fisioterapia per Parkinson",
        "Fisioterapia per sclerosi multipla",
        "Trattamento neuropatie periferiche",
      ]
    ),
 
    cardiologica: service(
      "Riabilitazione cardiologica a domicilio",
      "Riabilitazione cardiologica a domicilio dopo evento cardiaco o intervento. Programma di esercizio aerobico e rinforzo muscolare dosati e monitorati.",
      "riabilitazione-cardiologica",
      "Riabilitazione cardiologica",
      [
        "Riabilitazione post-infarto",
        "Riabilitazione post-bypass",
        "Riabilitazione post-sostituzione valvolare",
        "Riabilitazione per scompenso cardiaco",
      ]
    ),
  },
};
