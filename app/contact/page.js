"use client";

import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Loader2 } from 'lucide-react';
import styles from './page.module.css';

export default function Contact() {
  const jotformContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Injecter le script Jotform uniquement côté client
    if (jotformContainerRef.current && !jotformContainerRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://form.jotform.com/jsform/261856530901356';
      script.async = true;
      jotformContainerRef.current.appendChild(script);

      // Observer pour détecter quand Jotform a fini d'injecter son iframe
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.addedNodes.length) {
            for (const node of mutation.addedNodes) {
              if (node.tagName === 'IFRAME') {
                // L'iframe est dans le DOM, mais son contenu n'est pas encore chargé.
                // On écoute l'événement de fin de chargement.
                node.addEventListener('load', () => {
                  setIsLoading(false);
                });
                
                // Sécurité : si l'événement load met trop de temps ou échoue, on force l'affichage après 2.5 secondes.
                setTimeout(() => {
                  setIsLoading(false);
                }, 2500);

                observer.disconnect();
                return;
              }
            }
          }
        }
      });
      observer.observe(jotformContainerRef.current, { childList: true });
    }
  }, []);

  return (
    <div className={styles.page}>
      
      {/* Background Bubbles */}
      <div className={styles.giantBlobTopRight}></div>
      <div className={styles.giantBlobBottomLeft}></div>

      <div className={`container ${styles.contactContainer}`}>
        
        {/* En-tête */}
        <div className={styles.headerText}>
          <h1 className={styles.title}>Contact & <span className="text-gradient">Devis</span></h1>
          <p className={styles.subtitle}>
            Une question ? Un devis ? Passez nous voir en boutique ou envoyez-nous un message. Nous vous répondrons dans les plus brefs délais.
          </p>
        </div>

        <div className={styles.gridContainer}>
          
          {/* Informations de contact & Adresse */}
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h2 className={styles.cardTitle}>Notre Boutique</h2>
              
              <div className={styles.infoItem}>
                <MapPin className={styles.icon} size={24} />
                <div>
                  <strong>Adresse</strong>
                  <a href="https://maps.google.com/?q=65+Route+de+Blagnac,+31200+Toulouse" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <p>65 Rte de Blagnac</p>
                    <p>31200 Toulouse</p>
                  </a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <Phone className={styles.icon} size={24} />
                <div>
                  <strong>Téléphone</strong>
                  <a href="tel:0756916593" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <p>07 56 91 65 93</p>
                  </a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <Mail className={styles.icon} size={24} />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:labrigademobile31@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <p>labrigademobile31@gmail.com</p>
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Clock className={styles.icon} size={24} />
                <div>
                  <strong>Horaires</strong>
                  <p>Lundi - Vendredi: 11h - 19h</p>
                  <p>Samedi: 13h - 19h</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </div>

            {/* Réseaux Sociaux */}
            <div className={styles.socialCard}>
              <h2 className={styles.cardTitle}>Suivez-nous</h2>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className={styles.socialLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className={styles.socialLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de Devis Jotform avec Loading */}
          <div className={styles.formSection} id="formulaire">
            <div style={{ position: 'relative', width: '100%', minHeight: '600px', background: '#FFFFFF', borderRadius: '40px', boxShadow: '0 20px 50px rgba(37,99,235,0.06)' }}>
              
              {/* Écran de chargement */}
              {isLoading && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10, background: '#FFFFFF', borderRadius: '40px' }}>
                  <Loader2 className="animate-spin" size={48} color="#2563eb" />
                  <p style={{ marginTop: '1.5rem', color: '#64748b', fontWeight: '600', fontSize: '1.1rem' }}>Chargement du formulaire...</p>
                </div>
              )}

              {/* Conteneur Jotform caché le temps du chargement pour éviter les sauts visuels */}
              <div 
                ref={jotformContainerRef} 
                style={{ 
                  width: '100%', 
                  opacity: isLoading ? 0 : 1, 
                  transition: 'opacity 0.8s ease',
                  pointerEvents: isLoading ? 'none' : 'auto'
                }}
              >
                {/* Le script Jotform sera injecté ici */}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
