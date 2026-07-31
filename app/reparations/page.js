"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Search, PenTool, ArrowRight } from 'lucide-react';
import { FaApple, FaGoogle, FaTabletAlt, FaLaptop } from 'react-icons/fa';
import { SiSamsung, SiHuawei, SiXiaomi, SiOppo, SiHonor, SiOneplus, SiAsus, SiMotorola, SiSony } from 'react-icons/si';
import FAQ from '@/components/FAQ';
import styles from './page.module.css';

const BrandIcon = ({ brand, size = 20 }) => {
  switch (brand) {
    case 'Apple': return <Image src="/brands/apple.png" alt="Apple" width={size} height={size} style={{ objectFit: 'contain' }} />;
    case 'Samsung': return <Image src="/brands/samsung.png" alt="Samsung" width={size * 2.5} height={size} style={{ objectFit: 'contain' }} />;
    case 'Huawei': return <Image src="/brands/huawei.png" alt="Huawei" width={size} height={size} style={{ objectFit: 'contain' }} />;
    case 'Tablettes': return <FaTabletAlt size={size} />;
    case 'Ordinateurs': return <FaLaptop size={size} />;
    case 'Xiaomi': return <SiXiaomi size={size} />;
    case 'Google': return <FaGoogle size={size} />;
    case 'Oppo': return <SiOppo size={size} />;
    case 'Honor': return <SiHonor size={size} />;
    case 'OnePlus': return <SiOneplus size={size} />;
    case 'Asus': return <SiAsus size={size} />;
    case 'Motorola': return <SiMotorola size={size} />;
    case 'Sony': return <SiSony size={size} />;
    default: return null;
  }
};

const brandsAndModels = [
  { brand: 'Apple', models: [
    'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15', 
    'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14', 
    'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13 mini', 'iPhone 13', 
    'iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12 mini', 'iPhone 12', 
    'iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11', 
    'iPhone XS Max', 'iPhone XS', 'iPhone XR', 'iPhone X', 
    'iPhone 8 Plus', 'iPhone 8', 'iPhone 7 Plus', 'iPhone 7', 
    'iPhone 6S Plus', 'iPhone 6S', 'iPhone 6 Plus', 'iPhone 6', 
    'iPhone SE (3e gén)', 'iPhone SE (2e gén)', 'iPhone SE (1re gén)', 
    'iPhone 5S', 'iPhone 5C', 'iPhone 5', 'iPhone 4S', 'iPhone 4'
  ]},
  { brand: 'Samsung', models: [
    'Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S24', 'Galaxy S24 FE',
    'Galaxy S23 Ultra', 'Galaxy S23+', 'Galaxy S23', 'Galaxy S23 FE',
    'Galaxy S22 Ultra', 'Galaxy S22+', 'Galaxy S22', 
    'Galaxy S21 Ultra', 'Galaxy S21+', 'Galaxy S21', 'Galaxy S21 FE',
    'Galaxy S20 Ultra', 'Galaxy S20+', 'Galaxy S20', 'Galaxy S20 FE',
    'Galaxy S10+', 'Galaxy S10', 'Galaxy S10e', 'Galaxy S9+', 'Galaxy S9', 'Galaxy S8+', 'Galaxy S8', 'Galaxy S7 Edge', 'Galaxy S7',
    'Galaxy Note 20 Ultra', 'Galaxy Note 20', 'Galaxy Note 10+', 'Galaxy Note 10', 'Galaxy Note 9', 'Galaxy Note 8',
    'Galaxy Z Fold 5', 'Galaxy Z Fold 4', 'Galaxy Z Fold 3', 'Galaxy Z Fold 2',
    'Galaxy Z Flip 5', 'Galaxy Z Flip 4', 'Galaxy Z Flip 3',
    'Galaxy A55', 'Galaxy A35', 'Galaxy A25', 'Galaxy A15',
    'Galaxy A54', 'Galaxy A53', 'Galaxy A52', 'Galaxy A52s', 'Galaxy A51', 'Galaxy A50',
    'Galaxy A73', 'Galaxy A72', 'Galaxy A71', 'Galaxy A70',
    'Galaxy A34', 'Galaxy A33', 'Galaxy A32', 'Galaxy A31', 'Galaxy A30',
    'Galaxy A24', 'Galaxy A23', 'Galaxy A22', 'Galaxy A21s', 'Galaxy A20e',
    'Galaxy A14', 'Galaxy A13', 'Galaxy A12', 'Galaxy A10',
    'Galaxy M54', 'Galaxy M34', 'Galaxy M33', 'Galaxy M13', 'Galaxy M12',
    'Galaxy J7', 'Galaxy J5', 'Galaxy J3'
  ]},
  { brand: 'Tablettes', models: [
    'iPad Pro 12.9" (M2)', 'iPad Pro 11" (M2)', 'iPad Pro 12.9"', 'iPad Pro 11"', 'iPad Pro 10.5"', 'iPad Pro 9.7"',
    'iPad Air (5e gén)', 'iPad Air (4e gén)', 'iPad Air 3', 'iPad Air 2', 'iPad Air 1',
    'iPad mini (6e gén)', 'iPad mini 5', 'iPad mini 4', 'iPad mini 3',
    'iPad (10e gén)', 'iPad (9e gén)', 'iPad (8e gén)', 'iPad (7e gén)', 'iPad (6e gén)', 'iPad (5e gén)',
    'Galaxy Tab S9 Ultra', 'Galaxy Tab S9+', 'Galaxy Tab S9', 
    'Galaxy Tab S8 Ultra', 'Galaxy Tab S8+', 'Galaxy Tab S8', 
    'Galaxy Tab S7 FE', 'Galaxy Tab S7', 'Galaxy Tab S6 Lite',
    'Galaxy Tab A9+', 'Galaxy Tab A8', 'Galaxy Tab A7 Lite', 'Galaxy Tab A7',
    'Lenovo Tab P12', 'Lenovo Tab P11', 'Lenovo Tab M10 Plus', 'Xiaomi Pad 6', 'Xiaomi Pad 5'
  ]},
  { brand: 'Ordinateurs', models: [
    'MacBook Pro 16" (M3/M2/M1)', 'MacBook Pro 14" (M3/M2/M1)', 'MacBook Pro 13" (M2/M1)', 
    'MacBook Pro 15" (Intel)', 'MacBook Pro 13" (Intel)',
    'MacBook Air 15" (M3/M2)', 'MacBook Air 13" (M3/M2/M1)', 'MacBook Air 13" (Intel)'
  ]},
  { brand: 'Huawei', models: [
    'P60 Pro', 'P60', 
    'P50 Pro', 'P50 Pocket', 'P50', 
    'P40 Pro+', 'P40 Pro', 'P40', 'P40 Lite 5G', 'P40 Lite', 
    'P30 Pro', 'P30', 'P30 Lite', 
    'P20 Pro', 'P20', 'P20 Lite',
    'P10 Plus', 'P10', 'P10 Lite',
    'Mate 60 Pro', 'Mate 50 Pro', 'Mate 40 Pro', 'Mate 30 Pro', 'Mate 20 Pro', 'Mate 20 Lite',
    'Nova 11', 'Nova 10', 'Nova 9', 'Nova 8',
    'Y9', 'Y7', 'Y6', 'Y5'
  ]},
  { brand: 'Xiaomi', models: ['14 Ultra', '14', '13T Pro', '13T', '13 Pro', '13', '12T Pro', '12T', '12 Pro', '12', '11T Pro', '11T', 'Redmi Note 13 Pro+', 'Redmi Note 13 Pro', 'Redmi Note 13', 'Redmi Note 12 Pro', 'Redmi Note 12', 'Redmi Note 11 Pro', 'Redmi Note 11', 'Poco F5 Pro', 'Poco F5', 'Poco X6 Pro', 'Poco X6', 'Poco X5 Pro', 'Poco X5', 'Poco M6 Pro'] },
  { brand: 'Google', models: ['Pixel 8 Pro', 'Pixel 8', 'Pixel 8a', 'Pixel 7 Pro', 'Pixel 7', 'Pixel 7a', 'Pixel 6 Pro', 'Pixel 6', 'Pixel 6a', 'Pixel 5', 'Pixel 4a 5G', 'Pixel 4a'] },
  { brand: 'Oppo', models: ['Find X5 Pro', 'Find X5', 'Find X3 Pro', 'Find X3 Neo', 'Find X3 Lite', 'Reno 10 Pro', 'Reno 10', 'Reno 8 Pro', 'Reno 8', 'Reno 8 Lite', 'A98', 'A78', 'A74', 'A54', 'A17'] },
  { brand: 'Honor', models: ['Magic 6 Pro', 'Magic 6 Lite', 'Magic 5 Pro', 'Magic 5 Lite', 'Honor 90', 'Honor 90 Lite', 'Honor 70', 'Honor 50'] },
  { brand: 'OnePlus', models: ['12', '12R', '11 5G', '10T', '10 Pro', '9 Pro', '9', 'Nord 3', 'Nord 2T', 'Nord CE 3 Lite', 'Nord CE 2'] },
  { brand: 'Asus', models: ['ROG Phone 8 Pro', 'ROG Phone 8', 'ROG Phone 7 Ultimate', 'ROG Phone 7', 'ROG Phone 6', 'Zenfone 10', 'Zenfone 9'] },
  { brand: 'Motorola', models: ['Edge 40 Pro', 'Edge 40', 'Edge 40 Neo', 'Razr 40 Ultra', 'Razr 40', 'Moto G84', 'Moto G54'] },
  { brand: 'Sony', models: ['Xperia 1 V', 'Xperia 5 V', 'Xperia 10 V', 'Xperia 1 IV', 'Xperia 5 IV', 'Xperia 10 IV'] }
];

const repairTypes = [
  { type: 'Écran', time: '25 min' },
  { type: 'Batterie', time: '25 min' },
  { type: 'Caméra', time: '30 min' },
  { type: 'Vitre Arrière', time: '30 min' },
  { type: 'Réinitialisation', time: '25 min' },
  { type: 'Déblocage', time: '30 min' },
  { type: 'Connecteur de charge', time: '30 min' }
];

const devicesDatabase = [];
brandsAndModels.forEach(({ brand, models }) => {
  models.forEach(model => {
    devicesDatabase.push({
      brand,
      model,
      repairs: repairTypes
    });
  });
});

export default function Reparations() {
  const [searchTerm, setSearchTerm] = useState('');

  const searchTerms = searchTerm.toLowerCase().split(' ').filter(Boolean);
  
  const filteredDevices = devicesDatabase.filter(device => {
    if (searchTerms.length === 0) return true;
    
    const modelWords = `${device.brand} ${device.model}`.toLowerCase().split(/[\s-]+/);
    const repairWords = device.repairs.map(r => r.type.toLowerCase()).join(' ').split(/[\s-]+/);

    return searchTerms.every(term => {
      const isNumber = /^\d+$/.test(term);
      const isSingleLetter = term.length === 1;

      const matchWord = (w) => {
        if (isNumber) {
          const numPart = w.replace(/\D/g, ''); // extrait les chiffres du mot (ex: "10e" -> "10")
          return numPart === term; // Empêche "5" de correspondre à "15"
        }
        if (isSingleLetter) {
          return w === term || w.endsWith(term) || w.startsWith(term);
        }
        return w.includes(term);
      };

      return modelWords.some(matchWord) || repairWords.some(matchWord);
    });
  }).slice(0, 48); // Augmenté à 48 pour voir plus de modèles

  return (
    <div className={styles.page}>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.giantBlobTopLeft}></div>
        <div className={styles.giantBlobBottomRight}></div>
        
        <div className={`container ${styles.contentContainer}`}>
          <div className={styles.textCenter}>
            <h1 className={styles.title}>Le catalogue de <span className="text-gradient">réparations</span>.</h1>
            <p className={styles.subtitle}>
              Recherchez votre modèle et la panne que vous rencontrez. Nous couvrons la quasi-totalité des modèles du marché.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className={styles.searchSection}>
        <div className="container">
           <div className={styles.searchBubble}>
              <Search className={styles.searchIcon} size={28} />
              <input 
                type="text" 
                placeholder="Rechercher (ex: Écran iPhone 13, Batterie Samsung S22...)" 
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>

           <div className={styles.resultsGrid}>
              {filteredDevices.length > 0 ? (
                filteredDevices.map((device, idx) => (
                  <div key={idx} className={styles.repairCard}>
                     <div className={styles.repairHeader}>
                        <span className={styles.brandTag}>
                          <BrandIcon brand={device.brand} size={16} />
                          {device.brand}
                        </span>
                        <PenTool size={20} className={styles.cardIcon} />
                     </div>
                     <h3 className={styles.repairModel}>{device.model}</h3>
                     
                     <div className={styles.repairList}>
                       {device.repairs.map((repair, ridx) => (
                         <div key={ridx} className={styles.repairListItem}>
                           <span className={styles.repairTypeItem}>{repair.type}</span>
                           <span className={styles.repairTimeItem}>~ {repair.time}</span>
                         </div>
                       ))}
                     </div>
                     
                     <div className={styles.repairFooter}>
                        <a href="/contact" className={styles.quoteLink}>Demander un devis <ArrowRight size={16} /></a>
                     </div>
                  </div>
                ))
              ) : (
                <div className={styles.noResults}>
                  <p>Aucun résultat exact trouvé pour "{searchTerm}".</p>
                  <p>Ne vous inquiétez pas, contactez-nous, nous réparons sûrement votre appareil !</p>
                  <a href="/#contact" className="btn-primary" style={{marginTop: '1rem'}}>Faire une demande spéciale</a>
                </div>
              )}
           </div>
        </div>
      </section>

      {/* Massive SEO Content */}
      <section className={styles.seoSection}>
        <div className="container">
          <div className={styles.seoBubble}>
             <h2 className={styles.seoTitle}>Le spécialiste de la réparation de smartphones</h2>
             
             <div className={styles.seoContentGrid}>
                <div className={styles.seoBlock}>
                   <h3>Réparation d'iPhone : Apple de A à Z</h3>
                   <p>Vous avez fait tomber votre <strong>iPhone 15 Pro Max</strong> ou votre <strong>iPhone 14</strong> ? L'écran OLED est cassé ou affiche des lignes vertes ? La Brigade Mobile est experte dans le remplacement d'écrans originaux ou compatibles de très haute qualité pour tous les modèles Apple. De l'<strong>iPhone 11</strong> classique jusqu'au tout dernier <strong>iPhone 15</strong>, nous assurons également le remplacement de la batterie lorsque votre appareil indique le message "Réparation requise". Nous intervenons aussi sur le changement de la vitre arrière (dos en verre), les problèmes de Face ID, et les connecteurs de charge défaillants (Lightning ou USB-C).</p>
                </div>

                <div className={styles.seoBlock}>
                   <h3>Expertise Samsung Galaxy S et A</h3>
                   <p>Les téléphones <strong>Samsung</strong> n'ont pas de secret pour nous. Remplacer l'écran incurvé d'un <strong>Galaxy S23 Ultra</strong> ou d'un <strong>Galaxy S22</strong> demande une précision chirurgicale que nos techniciens maîtrisent parfaitement. Nous réparons également les problèmes de charge sur les séries <strong>Galaxy A54, A53, A32</strong>. Nos pièces détachées pour Samsung sont testées et garanties. Que ce soit un problème de micro, d'écouteur interne ou de caméra arrière, votre smartphone Samsung retrouvera son fonctionnement d'origine.</p>
                </div>

                <div className={styles.seoBlock}>
                   <h3>Réparation Xiaomi, Oppo, Google Pixel et autres</h3>
                   <p>Le marché Android est vaste et nous le couvrons intégralement. Votre <strong>Google Pixel 8</strong> ou <strong>Pixel 7</strong> ne prend plus la charge ? L'écran de votre <strong>Xiaomi Redmi Note 12</strong> ou <strong>Poco X5</strong> est brisé ? Nos experts interviennent rapidement. Nous réparons les marques Oppo (série Find X, Reno), OnePlus, et Huawei. Le changement d'écran lcd, de connecteur de charge usb-c, ou la désoxydation suite à une chute dans l'eau font partie de notre quotidien.</p>
                </div>

                <div className={styles.seoBlock}>
                   <h3>Types de réparations fréquentes</h3>
                   <p>Le <strong>remplacement d'écran</strong> est l'intervention numéro 1, suivi de près par le <strong>changement de batterie</strong> (en particulier lorsque celle-ci se décharge en quelques heures ou gonfle). Le <strong>connecteur de charge</strong>, souvent encrassé ou abîmé par un mauvais câble, est la 3ème cause de visite. N'oublions pas le remplacement de <strong>vitre arrière (back glass)</strong>, la réparation d'<strong>appareil photo</strong> (caméra arrière floue ou vibrante), ainsi que la <strong>désoxydation</strong> de carte mère pour les téléphones tombés à l'eau ou dans les toilettes.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <FAQ 
        title="FAQ - Réparation de Téléphones"
        subtitle="Vos questions fréquentes sur nos services de réparation."
        customFaqs={[
          { question: "Combien coûte la réparation d'un écran de smartphone ?", answer: "Le prix dépend du modèle exact et de la marque (Apple, Samsung, Xiaomi...). Un devis gratuit est réalisé avant chaque intervention pour garantir une totale transparence." },
          { question: "La réparation de mon téléphone est-elle garantie ?", answer: "Oui, toutes nos réparations (changement d'écran, batterie, connecteur de charge) sont garanties 1 an pièces et main d'œuvre." },
          { question: "Dois-je prendre rendez-vous pour réparer mon appareil ?", answer: "Nous vous conseillons de prendre rendez-vous via notre formulaire ou par téléphone pour garantir la disponibilité de la pièce de rechange et vous assurer une réparation ultra rapide en 30 minutes." },
          { question: "Est-ce que je vais perdre mes photos et données ?", answer: "Dans 99% des réparations matérielles classiques, vos données sont conservées. Toutefois, nous vous recommandons toujours d'effectuer une sauvegarde complète avant l'intervention par précaution." }
        ]}
      />

    </div>
  );
}
