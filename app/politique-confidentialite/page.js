import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Politique de Confidentialité | ReparPhone',
  description: 'Politique de confidentialité et gestion des données personnelles de ReparPhone Toulouse.',
};

export default function PolitiqueConfidentialite() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Politique de Confidentialité</h1>
        
        <div className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            Chez ReparPhone, nous accordons une grande importance à la confidentialité et à la sécurité de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web et nos services.
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. Collecte des données</h2>
          <p>Nous pouvons collecter les informations suivantes :</p>
          <ul>
            <li>Nom et prénom</li>
            <li>Coordonnées (adresse e-mail, numéro de téléphone)</li>
            <li>Informations sur votre appareil pour les devis et réparations</li>
            <li>Données de navigation (cookies)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>3. Utilisation des données</h2>
          <p>Vos données sont utilisées exclusivement pour :</p>
          <ul>
            <li>Traiter vos demandes de réparation ou de devis</li>
            <li>Vous contacter concernant le suivi de vos appareils</li>
            <li>Améliorer nos services et notre site web</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>4. Protection et conservation</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès non autorisé. Vos données ne sont conservées que le temps nécessaire aux finalités pour lesquelles elles ont été collectées, conformément à la législation en vigueur.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. Partage des données</h2>
          <p>
            ReparPhone ne vend, ne loue, ni ne partage vos données personnelles à des tiers à des fins commerciales. Elles peuvent être communiquées uniquement à des prestataires techniques agissant pour notre compte, tenus par une obligation de confidentialité.
          </p>
        </div>

        <div className={styles.section}>
          <h2>6. Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez choisir d'accepter ou de refuser les cookies via notre bannière de consentement ou les paramètres de votre navigateur.
          </p>
        </div>

        <div className={styles.section}>
          <h2>7. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition au traitement de vos données. Pour exercer ces droits, veuillez nous contacter à l'adresse : <a href="mailto:labrigademobile31@gmail.com">labrigademobile31@gmail.com</a>.
          </p>
        </div>

        <div className={styles.backButtonContainer}>
          <Link href="/" className="btn-primary">Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
