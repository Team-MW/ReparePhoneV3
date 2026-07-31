export const metadata = {
  title: 'Rachat & Reprise de Téléphones à Toulouse',
  description: 'Revendez votre ancien smartphone au meilleur prix chez La Brigade Mobile. Estimation gratuite, tous états acceptés (écran cassé). Paiement cash immédiat !',
};

import { Recycle, DollarSign, Smartphone } from 'lucide-react';
import FAQ from '@/components/FAQ';
import EstimationSimulator from '@/components/EstimationSimulator';
import styles from './page.module.css';

export default function Reprise() {
  return (
    <div className={styles.page}>
      
      {/* En-tête de la page */}
      <section className={styles.heroSection}>
        <div className={styles.giantBlobTopRight}></div>
        <div className={styles.giantBlobBottomLeft}></div>
        
        <div className={`container ${styles.contentContainer}`}>
          <div className={styles.textLeft}>
            <h1 className={styles.title}>Revendez votre <span className="text-gradient">téléphone</span> au meilleur prix.</h1>
            <p className={styles.subtitle}>
              <strong>Récupérez jusqu'à 600€ en revendant votre ancien téléphone !</strong><br/><br/>
              La Brigade Mobile rachète vos anciens smartphones, tablettes et ordinateurs. 
              Qu'ils soient fonctionnels ou cassés, donnez-leur une seconde vie et repartez avec du cash !
            </p>
            <div className={styles.badges}>
              <span className={styles.badge}><DollarSign size={16} /> Paiement Cash Immédiat</span>
              <span className={styles.badge}><Recycle size={16} /> Écologique & Responsable</span>
            </div>
          </div>
          
          <div className={styles.simulatorSide}>
            <EstimationSimulator />
          </div>
        </div>
      </section>

      {/* Explications SEO massives */}
      <section className={styles.seoSection}>
        <div className={styles.cornerBlobTopLeft}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">Pourquoi nous revendre votre smartphone ?</h2>
          
          <div className={styles.gridFeatures}>
             <div className={styles.featureCard}>
                <DollarSign size={48} className={styles.icon} />
                <h3>Paiement Immédiat</h3>
                <p>Nous évaluons votre appareil en boutique en moins de 10 minutes. Le rachat est immédiat, vous repartez avec la somme en espèces ou par virement.</p>
             </div>
             <div className={styles.featureCard}>
                <Smartphone size={48} className={styles.icon} />
                <h3>Tous les états acceptés</h3>
                <p>iPhone écran cassé ? Batterie HS ? Appareil oxydé ? Nous rachetons tous les types d'appareils, même non fonctionnels, pour leurs pièces ou pour les reconditionner.</p>
             </div>
             <div className={styles.featureCard}>
                <Recycle size={48} className={styles.icon} />
                <h3>Geste pour la planète</h3>
                <p>Chaque téléphone recyclé ou reconditionné est une victoire écologique. Ne laissez plus dormir vos anciens iPhone ou Samsung dans vos tiroirs.</p>
             </div>
          </div>

          <div className={styles.seoText}>
            <h3>Rachat d'iPhone (Apple) à Paris et en France</h3>
            <p>
              Vous possédez un iPhone 15, iPhone 14 Pro Max, iPhone 13, iPhone 12 ou même un modèle plus ancien comme l'iPhone 11 ou le XR ? La Brigade Mobile est spécialisée dans le rachat de produits Apple. L'écosystème Apple conserve une excellente valeur sur le marché de l'occasion. Nous vous proposons les meilleurs tarifs de reprise, que votre vitre arrière soit brisée, que le Face ID ne fonctionne plus, ou que la capacité de la batterie soit faible.
            </p>
            <h3>Reprise de smartphones Samsung Galaxy, Xiaomi et autres marques</h3>
            <p>
              Notre expertise ne s'arrête pas à Apple. Nous rachetons au meilleur prix vos Samsung Galaxy S23 Ultra, S22, S21, ainsi que les gammes Galaxy A (A54, A53...). Vous êtes sur Android ? Xiaomi (Redmi Note, Poco), Oppo, Google Pixel (Pixel 7, Pixel 8) : notre base de données est mise à jour quotidiennement pour vous garantir une estimation juste et transparente au cours du marché actuel de la seconde main.
            </p>
          </div>
        </div>
      </section>
      

      <FAQ 
        title="FAQ - Reprise et Rachat"
        subtitle="Tout savoir sur la revente de votre téléphone."
        customFaqs={[
          { question: "Comment est calculé le prix de rachat de mon iPhone ou Samsung ?", answer: "L'estimation de reprise prend en compte la marque, le modèle, l'année de sortie, la capacité de stockage et l'état général de votre smartphone (écran intact, usure du châssis, batterie). Notre argus est indexé sur le marché de l'occasion en temps réel." },
          { question: "Faut-il apporter les accessoires d'origine ?", answer: "Ce n'est pas obligatoire, mais fournir la boîte d'origine et le chargeur original peut légèrement augmenter la valeur de rachat de votre appareil." },
          { question: "Rachetez-vous les téléphones bloqués iCloud ou Google ?", answer: "Non. Pour des raisons légales et de traçabilité, nous ne rachetons que des appareils dont vous êtes le propriétaire légitime et qui sont débloqués de tout compte iCloud, Google ou opérateur." },
          { question: "Comment suis-je payé lors de la revente de mon smartphone ?", answer: "Le paiement est immédiat après le test technique en boutique. Nous proposons un règlement en espèces (dans le respect des limites légales) ou par virement bancaire instantané et sécurisé." }
        ]}
      />

    </div>
  );
}
