"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p>
          Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
          En continuant à naviguer, vous acceptez notre utilisation des cookies conformément à notre{' '}
          <Link href="/politique-confidentialite" className={styles.link}>
            politique de confidentialité
          </Link>.
        </p>
        <div className={styles.buttons}>
          <button onClick={acceptCookies} className={styles.acceptButton}>
            Accepter
          </button>
          <button onClick={declineCookies} className={styles.declineButton}>
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}
