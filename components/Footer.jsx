import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Bus, PhoneCall } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.column}>
          <Image 
            src="/images.jpg" 
            alt="ReparPhone Logo" 
            width={250} 
            height={75} 
            style={{ marginBottom: '1rem', objectFit: 'contain' }}
          />
          <p className={styles.desc}>
            Votre expert en réparation de téléphone à Toulouse. Service rapide, pièces d'origine, garantie 6 mois.
          </p>
          <div className={styles.rating}>
            <strong>5/5</strong> ⭐⭐⭐⭐⭐ (200+ avis)
          </div>
          <a href="tel:0756916593" className={`btn-primary ${styles.callBtn}`}>
            ✨ Appeler maintenant
          </a>
        </div>
        
        <div className={styles.column}>
          <h4 className={styles.subtitle}>Navigation</h4>
          <ul className={styles.list}>
            <li><Link href="/" className={styles.navLink}>Accueil</Link></li>
            <li><Link href="/#services" className={styles.navLink}>Nos Services</Link></li>
            <li><Link href="/contact" className={styles.navLink}>Nos Boutiques</Link></li>
            <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subtitle}>Contact</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <MapPin className={styles.icon} size={18} />
              <a href="https://maps.google.com/?q=65+Route+de+Blagnac,+31300+Toulouse" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                65 Route de Blagnac<br/>31300 Toulouse
              </a>
            </li>
            <li className={styles.listItem}>
              <Bus className={styles.icon} size={18} />
              <a href="https://maps.google.com/?q=Arrêt+Cité+Madrid,+Toulouse" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                <span className="bus-badge bus-l1">L1</span> <span className="bus-badge bus-70">70</span><br/>Arrêt "Cité Madrid"
              </a>
            </li>
            <li className={styles.listItem}>
              <Phone className={styles.icon} size={18} />
              <a href="tel:0756916593" className={styles.navLink}>07 56 91 65 93</a>
            </li>
            <li className={styles.listItem}>
              <Mail className={styles.icon} size={18} />
              <a href="mailto:labrigademobile31@gmail.com" className={styles.navLink}>labrigademobile31@gmail.com</a>
            </li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h4 className={styles.subtitle}>Horaires</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Clock className={styles.icon} size={18} />
              <div>
                <p>Lun-Ven: 11h-19h</p>
                <p>Samedi: 13h-19h</p>
                <p>Dimanche: Fermé</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Point Relais Section */}
      <div className={styles.relaisSection}>
        <div className={`container ${styles.relaisContainer}`}>
          <div className={styles.relaisText}>
            <h4 className={styles.relaisTitle}>Point de dépôt & retrait</h4>
            <p>ReparPhone est votre point relais partenaire officiel <strong>Colissimo, DPD et Chronopost</strong> à Toulouse.</p>
          </div>
          <div className={styles.relaisLogos}>
            <Image src="/colissimo.jpg" alt="Point de dépôt Colissimo Toulouse" width={110} height={45} className={`${styles.relaisLogo} ${styles.logoScaleUp}`} />
            <Image src="/relais-1.png" alt="Point de retrait Chronopost Toulouse" width={110} height={45} className={`${styles.relaisLogo} ${styles.logoScaleUp}`} />
            <Image src="/relais-2.png" alt="Relais colis DPD Toulouse" width={110} height={45} className={styles.relaisLogo} />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/mentions-legales" className={styles.navLink}>Mentions Légales</Link>
            <Link href="/politique-confidentialite" className={styles.navLink}>Politique de Confidentialité</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} ReparPhone. Tous droits réservés.</p>
          <p style={{ fontSize: '0.9rem', marginTop: '-0.5rem' }}>
            Réalisée par <a href="https://microdidact.com/" target="_blank" rel="noopener noreferrer" className={styles.navLink} style={{ textDecoration: 'underline' }}>microdidact</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
