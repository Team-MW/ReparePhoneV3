import { ChevronDown } from 'lucide-react';
import WaveDivider from '@/components/WaveDivider';
import styles from './FAQ.module.css';

export default function FAQ({ customFaqs, title = "Foire Aux Questions (FAQ)", subtitle = "Tout ce que vous devez savoir." }) {
  const defaultFaqs = [
    {
      question: "Combien de temps prend une réparation d'écran d'iPhone ou de smartphone Android ?",
      answer: "La grande majorité de nos réparations (comme le remplacement d'un écran d'iPhone 13, 14, 15 ou d'une batterie Samsung Galaxy) sont effectuées en express en moins de 30 minutes. Nos techniciens certifiés ont les pièces en stock pour vous garantir une intervention immédiate et un appareil comme neuf."
    },
    {
      question: "Utilisez-vous des pièces d'origine pour les réparations ?",
      answer: "Nous utilisons systématiquement des pièces de qualité Premium ou Originales (Original Equipment Manufacturer), rigoureusement testées. Que ce soit pour un écran OLED, un connecteur de charge ou une batterie, notre priorité est de préserver les performances et l'esthétique de votre appareil. Toutes nos réparations sont d'ailleurs garanties 1 an."
    },
    {
      question: "La réparation à domicile a-t-elle un coût supplémentaire ?",
      answer: "Notre service de réparation de téléphone à domicile ou sur le lieu de travail est conçu pour votre confort. Les frais de déplacement sont généralement offerts ou inclus dans le devis initial, selon votre zone géographique (Paris et banlieue). Le prix de la réparation reste ultra compétitif et transparent."
    },
    {
      question: "Rachetez-vous les téléphones cassés ou avec l'écran brisé ?",
      answer: "Absolument ! La Brigade Mobile rachète les smartphones (Apple, Samsung, Xiaomi...) dans n'importe quel état. Même si votre téléphone a pris l'eau (oxydation), que la vitre arrière est fissurée, ou que le téléphone ne s'allume plus, nous le reprenons pour recycler ses composants et vous offrons un paiement immédiat en cash."
    },
    {
      question: "Quelles marques de téléphones réparez-vous ?",
      answer: "Nous sommes des experts multimarques. Nous réparons toute la gamme Apple (de l'iPhone 11 à l'iPhone 15 Pro Max), tous les Samsung Galaxy (S21, S22, S23, A54...), ainsi que les téléphones Xiaomi, Google Pixel, Oppo et Huawei. Quel que soit votre modèle, nous avons la solution."
    },
    {
      question: "Que faire si mon téléphone est tombé dans l'eau ?",
      answer: "Ne tentez pas de le rallumer et ne le branchez surtout pas ! Venez nous voir le plus rapidement possible ou contactez-nous pour une intervention d'urgence. Nous procédons à une désoxydation complète de la carte mère avec des bains à ultrasons spécifiques pour sauver vos données et votre appareil."
    }
  ];

  const displayFaqs = customFaqs || defaultFaqs;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": displayFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className={styles.faqSection} style={{ position: 'relative' }}>
      <WaveDivider color="var(--surface)" />
      {/* Balise JSON-LD invisible pour booster le référencement Google (Rich Snippets) */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
      />
      
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        
        <div className={styles.faqList}>
          {displayFaqs.map((faq, idx) => (
            <details key={idx} className={styles.details}>
              <summary className={styles.summary}>
                <span className={styles.questionText}>{faq.question}</span>
                <ChevronDown className={styles.icon} size={20} />
              </summary>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
