'use client';
import { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';
import styles from './FloatingPhone.module.css';

export default function FloatingPhone() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Affiche le tooltip automatiquement toutes les 5 secondes pendant 2.5 secondes
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 2500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a href="tel:0756916593" className={styles.floatingBtn} aria-label="Appeler La Brigade Mobile">
      <div className={styles.iconContainer}>
        <PhoneCall size={28} />
      </div>
      <span className={`${styles.tooltip} ${showTooltip ? styles.tooltipVisible : ''}`}>07 56 91 65 93</span>
    </a>
  );
}
