export const metadata = {
  title: 'Réparation de Téléphone à Domicile',
  description: 'Pas le temps de vous déplacer ? On répare votre téléphone à domicile ou au bureau sur Toulouse. Rapide, fiable et garanti 1 an. Prenez rendez-vous !',
};

import { Car, Clock, MapPin, Wrench, Star, ShieldCheck, Zap } from 'lucide-react';
import FAQ from '@/components/FAQ';
import styles from './page.module.css';

export default function Domicile() {
  return (
    <div className={`${styles.page} ${styles.pageLight}`}>
      
      {/* Background Animated Orbs */}
      <div className={styles.orbYellow}></div>
      <div className={styles.orbBlue}></div>
      <div className={styles.orbPurple}></div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.contentContainer}`}>
          
          <div className={styles.heroVisual}>
            <div className={styles.compositionWrapper}>
              
              <div className={styles.mainCard}>
                <div className={styles.iconWrapperMain}>
                  <Car size={56} color="#2563eb" strokeWidth={2} />
                </div>
                <h2 className={styles.mainCardTitle}>L'Atelier Mobile</h2>
                <p className={styles.mainCardText}>Nos véhicules sont équipés comme de vrais laboratoires de réparation de précision.</p>
                <div className={styles.pulseContainer}>
                  <div className={styles.pulseDot}></div>
                  <span>En intervention</span>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className={`${styles.floatingBadge} ${styles.badgeTopLeft}`}>
                <Star size={20} color="#FBBC04" fill="#FBBC04" />
                <span className={styles.badgeText}>4.9/5 Avis</span>
              </div>

              {/* Floating Badge 2 */}
              <div className={`${styles.floatingBadge} ${styles.badgeBottomRight}`}>
                <Zap size={20} color="#2563eb" />
                <span className={styles.badgeText}>Intervention -30 min</span>
              </div>

              <div className={styles.glowBackdrop}></div>
            </div>
          </div>

          <div className={styles.textRight}>
            <h1 className={styles.title}>La réparation vient <span className={styles.textGradient}>à vous.</span></h1>
            <p className={styles.subtitle}>
              Pas le temps de vous déplacer en boutique ? Nos experts interviennent directement à votre domicile ou sur votre lieu de travail avec un camion-atelier hyper équipé.
            </p>
            <div className={styles.actionGroup}>
              <a href="#rendezvous" className={styles.primaryBtnNeon}>Réserver un créneau</a>
              <a href="#comment" className={styles.secondaryBtn}>Comment ça marche ?</a>
            </div>
          </div>
          
        </div>
      </section>

      {/* SEO Section */}
      <section id="comment" className={styles.seoSection}>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <h2 className={styles.sectionTitleNeon}>Comment ça marche ?</h2>
          
          <div className={styles.bentoGrid}>
             
             {/* Big Bento Tile */}
             <div className={`${styles.bentoCard} ${styles.bentoLarge}`}>
                <div className={styles.bentoVisual}>
                  <MapPin size={48} className={styles.iconBlue} />
                  <div className={styles.radarEffect}></div>
                </div>
                <div className={styles.bentoContent}>
                  <div className={styles.stepNumberInline}>Étape 1</div>
                  <h3>Prise de contact & Devis</h3>
                  <p>Indiquez-nous votre adresse, le modèle de votre appareil et la panne rencontrée. Nous vous donnons un devis immédiat et transparent sans frais cachés.</p>
                </div>
             </div>
             
             {/* Medium Bento Tile */}
             <div className={`${styles.bentoCard} ${styles.bentoMedium}`}>
                <div className={styles.bentoVisualSmall}>
                  <Clock size={32} className={styles.iconBlue} />
                </div>
                <div className={styles.bentoContent}>
                  <div className={styles.stepNumberInline}>Étape 2</div>
                  <h3>Le Rendez-vous</h3>
                  <p>Nous fixons un créneau. Notre technicien se déplace à votre domicile ou bureau avec tout l'équipement requis pour l'intervention.</p>
                </div>
             </div>

             {/* Small Bento Tile */}
             <div className={`${styles.bentoCard} ${styles.bentoMedium}`}>
                <div className={styles.bentoVisualSmall}>
                  <Wrench size={32} className={styles.iconBlue} />
                </div>
                <div className={styles.bentoContent}>
                  <div className={styles.stepNumberInline}>Étape 3</div>
                  <h3>Réparation sur place</h3>
                  <p>Votre écran ou batterie est remplacé(e) en 30 minutes, devant vous. L'appareil est testé avant le paiement.</p>
                </div>
             </div>

          </div>

          <div className={styles.seoTextGlass}>
            <h3>Réparation iPhone à domicile et au bureau</h3>
            <p>
              Votre temps est précieux. C'est pourquoi La Brigade Mobile propose un service de réparation d'iPhone directement à domicile. Que vous habitiez en centre-ville ou en banlieue, nos techniciens certifiés se déplacent pour effectuer le changement d'écran de votre iPhone 14, ou remplacer la batterie de votre iPhone 12 Pro. Plus besoin de patienter des heures en magasin, le service est rapide, sécurisé et garanti 1 an.
            </p>
            <h3>Intervention sur Samsung Galaxy, Xiaomi et toutes marques</h3>
            <p>
              Notre flotte d'experts est équipée pour traiter les pannes des téléphones Android les plus populaires. Remplacement de la vitre tactile d'un Samsung Galaxy S22 Ultra, réparation du connecteur de charge d'un Xiaomi Redmi Note 12... Nos camions-ateliers disposent des outils de précision pour réaliser des réparations de haute qualité directement devant chez vous ou pendant votre pause déjeuner au travail.
            </p>
          </div>
        </div>
      </section>
      

      <FAQ 
        title="FAQ - Réparation à Domicile"
        subtitle="Les questions sur nos interventions sur site à Toulouse."
        customFaqs={[
          { question: "Où vous déplacez-vous exactement pour les réparations ?", answer: "Nos techniciens interviennent sur l'ensemble de l'agglomération toulousaine (Toulouse centre, Blagnac, Colomiers, Balma et communes limitrophes). Nous réparons votre smartphone à votre domicile, votre bureau ou même sur un lieu de rendez-vous extérieur." },
          { question: "Y a-t-il des frais de déplacement cachés ?", answer: "Non, notre grille tarifaire est transparente. Si des frais de déplacement s'appliquent selon votre zone géographique (grande périphérie toulousaine), ils vous sont systématiquement annoncés et inclus dans le devis avant validation de l'intervention." },
          { question: "La réparation à domicile est-elle aussi fiable qu'en boutique ?", answer: "Absolument. Nos véhicules d'intervention sont de véritables ateliers mobiles équipés des mêmes outils de précision. Le technicien effectue les réparations (remplacement d'écran iPhone, batterie) en moins de 30 minutes dans des conditions optimales." },
          { question: "Comment payer une réparation effectuée à domicile ?", answer: "Le paiement s'effectue directement auprès du technicien à la toute fin de l'intervention, une fois que vous avez testé votre appareil. Nous acceptons les cartes bancaires via terminal de paiement et les espèces." }
        ]}
      />

    </div>
  );
}
