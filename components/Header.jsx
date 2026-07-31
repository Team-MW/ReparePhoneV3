"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link 
          href="/" 
          className={styles.logo} 
          onClick={(e) => {
            setIsMenuOpen(false);
            if (window.location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <Image 
            src="/images.jpg" 
            alt="Reparephone Logo" 
            width={350} 
            height={100} 
            className={styles.logoImage} 
            priority
          />
        </Link>
        
        {/* Navigation Bureau */}
        <nav className={`${styles.nav} ${styles.desktopNav}`}>
          <Link 
            href="/" 
            className={styles.navLink}
            onClick={(e) => {
              if (window.location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            Accueil
          </Link>
          <Link href="/reparations" className={styles.navLink}>Réparations</Link>
          <Link href="/reprise" className={styles.navLink}>Reprise</Link>
          <Link href="/domicile" className={styles.navLink}>À Domicile</Link>
          <Link href="/contact#formulaire" className="btn-primary">Devis Gratuit</Link>
        </nav>

        {/* Bouton Burger Mobile */}
        <button className={styles.burgerButton} onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <Link 
              href="/" 
              className={styles.mobileNavLink} 
              onClick={(e) => {
                toggleMenu();
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Accueil
            </Link>
            <Link href="/reparations" className={styles.mobileNavLink} onClick={toggleMenu}>Réparations</Link>
            <Link href="/reprise" className={styles.mobileNavLink} onClick={toggleMenu}>Reprise</Link>
            <Link href="/domicile" className={styles.mobileNavLink} onClick={toggleMenu}>À Domicile</Link>
            <Link href="/contact#formulaire" className={`btn-primary ${styles.mobileBtn}`} onClick={toggleMenu}>Devis Gratuit</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
