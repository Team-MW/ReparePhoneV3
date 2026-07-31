'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Smartphone, Battery, MonitorX, PowerOff, CheckCircle2, ArrowRight, ChevronLeft, Search } from 'lucide-react';
import { SiXiaomi } from 'react-icons/si';
import styles from './EstimationSimulator.module.css';

const BRANDS = [
  { id: 'apple', name: 'Apple', logo: <Image src="/brands/apple.png" alt="Apple" width={40} height={40} style={{ objectFit: 'contain' }} /> },
  { id: 'samsung', name: 'Samsung', logo: <Image src="/brands/samsung.png" alt="Samsung" width={70} height={40} style={{ objectFit: 'contain' }} /> },
  { id: 'xiaomi', name: 'Xiaomi', logo: <SiXiaomi size={40} color="#FF6900" /> },
  { id: 'other', name: 'Autre', logo: <Search size={40} color="#94a3b8" /> }
];

const MODELS = {
  apple: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14', 'iPhone 13 / 12 / 11'],
  samsung: ['Galaxy S24 Ultra', 'Galaxy S24 / S24+', 'Galaxy S23 Ultra', 'Galaxy S23 / S23+', 'Galaxy S22 Series', 'Galaxy A Series', 'Galaxy Z Fold / Flip'],
  xiaomi: ['Xiaomi 14 / 13 Series', 'Redmi Note 13 / 12', 'Poco Series', 'Autre modèle Xiaomi'],
  other: ['Google Pixel', 'Oppo', 'OnePlus', 'Autre']
};

const CONDITIONS = [
  { id: 'perfect', label: 'Comme neuf', desc: 'Aucune rayure, fonctionne parfaitement', icon: <CheckCircle2 size={32} /> },
  { id: 'used', label: 'Bon état', desc: 'Micro-rayures, batterie un peu fatiguée', icon: <Battery size={32} /> },
  { id: 'broken', label: 'Écran cassé', desc: 'Vitre brisée mais le tactile fonctionne', icon: <MonitorX size={32} /> },
  { id: 'dead', label: 'Ne s\'allume plus', desc: 'Oxydation, carte mère HS, etc.', icon: <PowerOff size={32} /> },
];

export default function EstimationSimulator() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({ brand: '', model: '', condition: '' });
  const [isCalculating, setIsCalculating] = useState(false);

  const handleBrandSelect = (brandId) => {
    setSelections({ ...selections, brand: brandId, model: '' });
    setStep(2);
  };

  const handleModelSelect = (model) => {
    setSelections({ ...selections, model });
    setStep(3);
  };

  const handleConditionSelect = (conditionId) => {
    setSelections({ ...selections, condition: conditionId });
    setIsCalculating(true);
    // Simulate calculation time
    setTimeout(() => {
      setIsCalculating(false);
      setStep(4);
    }, 1500);
  };

  const reset = () => {
    setStep(1);
    setSelections({ brand: '', model: '', condition: '' });
  };

  // Générer un prix fictif mais réaliste basé sur les choix
  const getEstimatedPrice = () => {
    let base = 250;
    if (selections.brand === 'apple') base += 150;
    if (selections.model.includes('Pro Max') || selections.model.includes('Ultra')) base += 250;
    if (selections.model.includes('15') || selections.model.includes('S24')) base += 200;
    if (selections.model.includes('14') || selections.model.includes('S23')) base += 100;
    
    if (selections.condition === 'perfect') base *= 1.2;
    if (selections.condition === 'used') base *= 0.8;
    if (selections.condition === 'broken') base *= 0.4;
    if (selections.condition === 'dead') base *= 0.1;

    return Math.max(10, Math.round(base / 10) * 10); // Minimum 10€, Arrondi à la dizaine
  };

  return (
    <div className={styles.simulatorWrapper}>
      <div className={styles.simulatorHeader}>
        {step > 1 && step < 4 && (
          <button className={styles.backBtn} onClick={() => setStep(step - 1)}>
            <ChevronLeft size={20} /> Retour
          </button>
        )}
        <h3>
          {step === 1 && "Quelle est la marque de votre appareil ?"}
          {step === 2 && "Quel est le modèle exact ?"}
          {step === 3 && "Dans quel état est-il ?"}
          {step === 4 && "Voici votre estimation indicative !"}
        </h3>
        
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${(step / 4) * 100}%` }}></div>
        </div>
      </div>

      <div className={styles.simulatorBody}>
        {step === 1 && (
          <div className={styles.gridCards}>
            {BRANDS.map(brand => (
              <div key={brand.id} className={styles.card} onClick={() => handleBrandSelect(brand.id)}>
                <span className={styles.cardEmoji}>{brand.logo}</span>
                <span className={styles.cardTitle}>{brand.name}</span>
              </div>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className={styles.listModels}>
            {MODELS[selections.brand].map(model => (
              <button key={model} className={styles.modelBtn} onClick={() => handleModelSelect(model)}>
                {model}
              </button>
            ))}
          </div>
        )}

        {step === 3 && (
          isCalculating ? (
            <div className={styles.calculatingState}>
              <div className={styles.spinner}></div>
              <p>Analyse de la cote en temps réel...</p>
            </div>
          ) : (
            <div className={styles.gridCards}>
              {CONDITIONS.map(cond => (
                <div key={cond.id} className={`${styles.card} ${styles.conditionCard}`} onClick={() => handleConditionSelect(cond.id)}>
                  <div className={styles.iconWrapper}>{cond.icon}</div>
                  <span className={styles.cardTitle}>{cond.label}</span>
                  <span className={styles.cardDesc}>{cond.desc}</span>
                </div>
              ))}
            </div>
          )
        )}

        {step === 4 && (
          <div className={styles.resultState}>
            <div className={styles.resultBadge}>Estimation indicative en direct</div>
            <div className={styles.priceContainer}>
              <span className={styles.priceUpTo}>Jusqu'à</span>
              <span className={styles.priceValue}>{getEstimatedPrice()} €</span>
            </div>
            <p className={styles.resultDesc}>
              Ce prix est une estimation algorithmique basée sur votre déclaration ({selections.brand} {selections.model}, {CONDITIONS.find(c => c.id === selections.condition)?.label}). 
              La valeur de rachat réelle sera confirmée lors du test en boutique par notre technicien.
            </p>
            
            <div className={styles.resultActions}>
              <a href="#estimer" className={`btn-primary ${styles.finalBtn}`}>
                Prendre rendez-vous <ArrowRight size={20} />
              </a>
              <button className={styles.restartBtn} onClick={reset}>Refaire une estimation</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
