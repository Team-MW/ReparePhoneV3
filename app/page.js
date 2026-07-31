export const metadata = {
  description: 'Réparation express de smartphones à Toulouse et à domicile. iPhone, Samsung, Xiaomi. Écran, batterie... Pièces Premium garanties 1 an. Devis gratuit !',
};

import Image from "next/image";
import { Wrench, Battery, Droplet, MonitorSmartphone, ShieldCheck, Zap, ThumbsUp, EyeOff } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import FAQ from '@/components/FAQ';
import styles from "./page.module.css";

const GoogleStar = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FBBC04" width={size} height={size}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

export default function Home() {
  const services = [
    { icon: <MonitorSmartphone size={32} />, title: "Écran Cassé", desc: "Remplacement d'écran rapide avec des pièces de haute qualité." },
    { icon: <Battery size={32} />, title: "Batterie", desc: "Redonnez une seconde jeunesse à votre appareil." },
    { icon: <Wrench size={32} />, title: "Autres Réparations", desc: "Connecteur, caméra, boutons... Nous réparons tout." },
  ];

  const advantages = [
    { icon: <Zap size={40} />, title: "Express", desc: "Réparation en 30 minutes." },
    { icon: <ShieldCheck size={40} />, title: "Garanti 3 mois", desc: "Pièces et main d'œuvre garanties 3 mois." },
    { icon: <ThumbsUp size={40} />, title: "Qualité", desc: "Pièces premium sélectionnées." },
  ];

  const reviews = [
    { name: "Anne Dulion", text: "Accueil très souriant et professionnel, tarifs très raisonnables, très sérieux dans la gestion de la réparation et hyper rapide ! Merci beaucoup !!!" },
    { name: "Nicolas Pasin", text: "Accueil au top, téléphone réparé en une demi-journée (changement complet de l'écran) pour un prix tout à fait correct. A recommander !" },
    { name: "Arjwan Elmahgubi", text: "Excellent mon écran ne marchait plus tout plusieurs boutiques m'ont dis que c'était irréparable mais eux on réussi à me le réparer en 3 jours franchement faites confiance une équipe au top ✌🏼✌🏼✌🏼" },
    { name: "victoria cella", text: "Accueil très souriant, service rapide et excellent rapport qualité-prix. Je recommande !" },
    { name: "Sofia Drissi", text: "10/10 humainement et professionnellement, ca fait plaisir de collaborer avec ce genre de personnes" },
    { name: "Kaïs Ould amar", text: "Meilleur réparateur de toulouse, excellent 👌 Je valide" },
    { name: "Beverley Kalemba", text: "Que dire ? Une équipe au top J'ai fais tomber mon téléphone hier l'écran ne marchait plus, l'écran a été ..." },
    { name: "Lolo Lolo", text: "Professionnel, dans les temps et avec le sourire en plus. Je recommande vivement." },
    { name: "Aymen Moqran", text: "Très bon réparateur ! Travail rapide et soigné, je suis super satisfait ✅. Très honnête et professionnel, je recommande sans hésiter. Merci encore !" },
    { name: "Ben Azela", text: "Réparation rapide et de qualité je recommande" },
    { name: "F W4", text: "Des réparateurs au top Mon iPhone est ressorti comme neuf. Il fonctionne à merveille." },
    { name: "Unshakeer", text: "Magnifique accueil les produit son de qualité et le frère est très très très sympa machallah 👍👍👍 je recommande fort !" },
    { name: "Joao Catherine", text: "Très bon encaissement" },
    { name: "Séverine Cazabon", text: "Je recommande très bon accueil très bon professionnalisme" },
    { name: "Robert Levi", text: "AMAZING HELPED ME SO MUCH!!!, they are fast and very nice and a welcoming place" },
    { name: "Guillemette Desbordes Wauquiez", text: "Mazette! Super bonne adresse : accueil top efficacité 12G vraiment une adresse que je recommande" },
  ];

  const reviewsRow1 = reviews.slice(0, 8);
  const reviewsRow2 = reviews.slice(8, 16);

  return (
    <div className={styles.page}>
      
      {/* Hero Section avec bulle attachée en haut à droite */}
      <section className={styles.hero}>
        <div className={styles.giantBlobTopRight}></div>
        <div className={styles.giantBlobBottomLeft}></div>
        
        {/* Image de réparation décorative au fond à gauche */}
        <div className={styles.floatingRepairImage}>
          <Image 
             src="/repair-illustration.png" 
             alt="Illustration Réparation" 
             width={300} 
             height={300} 
             className={styles.repairIllustration}
          />
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <h1 className={`animate-fade-in ${styles.heroTitle}`}>
              Votre téléphone 📱 <br/>
              <span className="text-gradient">comme neuf✨</span>
            </h1>
            <p className={`animate-fade-in ${styles.heroSubtitle}`}>
              L'expertise et la rapidité au service de vos appareils.<br/>
              Ne restez plus déconnecté.
            </p>
            <div className={`animate-fade-in ${styles.heroButtons}`}>
              <a href="/contact" className="btn-primary">Demander un devis</a>
              <a href="#services" className="btn-secondary">Nos services</a>
            </div>
          </div>
          
          <div className={styles.heroImageContainer}>
            {/* Bulle décorative en arrière-plan */}
            <div className={styles.bulleDecoration}></div>
            
            {/* L'image de l'iPhone au premier plan */}
            <Image 
              src="/iphone-hero.png" 
              alt="iPhone 17 Pro Max Réparation" 
              width={500} 
              height={600} 
              className={styles.heroPhoneImage}
              priority
            />
            
            {/* Petit badge flottant stylé */}
            <div className={styles.floatingBadge}>
              <Image 
                src="/badge.png" 
                alt="Badge La Brigade Mobile" 
                width={150} 
                height={150} 
                className={styles.badgeImage}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Services Section avec bulles connectées aux angles */}
      <section id="services" className={`section ${styles.servicesSection}`}>
        <div className={styles.cornerBubbleTopLeft}>
          <h2 className={styles.bubbleTitle}>Nos<br/>Services</h2>
        </div>

        <div className={`container ${styles.servicesContainer}`}>
          <div className={styles.servicesGrid}>
            {services.map((service, idx) => (
              <div key={idx} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section id="avantages" className={`section ${styles.advantagesSection}`}>
        <WaveDivider color="#f8fafc" />
        <div className={styles.cornerBubbleBottomRight}>
           <h2 className={styles.bubbleTitleWhite}>Pourquoi<br/>Nous ?</h2>
        </div>

        <div className={`container ${styles.advantagesContainer}`}>
          <div className={styles.advantagesGrid}>
            {advantages.map((adv, idx) => (
              <div key={idx} className={styles.advCard}>
                <div className={styles.advIcon}>{adv.icon}</div>
                <h3 className={styles.advTitle}>{adv.title}</h3>
                <p className={styles.advDesc}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hydrogel Section */}
      <section id="hydrogel" className={`section ${styles.hydrogelSection}`}>
        <div className={`container ${styles.hydrogelContainer}`}>
          <div className={styles.hydrogelContent}>
            <h2 className={styles.hydrogelTitle}>Protection <span className="text-gradient">Hydrogel</span> 🛡️</h2>
            <p className={styles.hydrogelSubtitle}>
              La protection <strong>ultime</strong> pour vos écrans ! <br/>
              Découpé sur mesure ✂️ en boutique pour <strong>absolument tous vos appareils</strong> : smartphones 📱, tablettes 💊, ou montres connectées ⌚.
            </p>
            <ul className={styles.hydrogelFeatures}>
              <li><ShieldCheck color="var(--primary)" size={28} /> <div>🔨 <strong>Incassable :</strong> Absorbe tous les chocs sans jamais se fissurer.</div></li>
              <li><Zap color="var(--primary)" size={28} /> <div>✨ <strong>Auto-réparant :</strong> Les petites rayures s'effacent toutes seules en 24h.</div></li>
              <li><MonitorSmartphone color="var(--primary)" size={28} /> <div>🪶 <strong>Ultra-fin :</strong> Invisible, il conserve 100% de la sensibilité tactile.</div></li>
              <li><EyeOff color="var(--primary)" size={28} /> <div>👁️‍🗨️ <strong>Filtre Anti-Espion :</strong> Protégez votre vie privée des regards indiscrets ! <em>(Disponible)</em></div></li>
            </ul>
            <a href="/contact" className="btn-primary" style={{ marginTop: '2rem' }}>Poser mon film Hydrogel</a>
          </div>
          <div className={styles.hydrogelImageWrapper}>
            <div className={styles.hydrogelBlob}></div>
            <div className={styles.hydrogelVideoContainer}>
              <iframe 
                width="315" 
                height="560" 
                src="https://www.youtube.com/embed/PbOnGPJv1QQ?autoplay=1&mute=1&loop=1&playlist=PbOnGPJv1QQ&controls=0&rel=0" 
                title="Démonstration Protection Hydrogel" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className={styles.hydrogelVideo}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Avis Google Section */}
      <section className={styles.reviewsSection}>
        <div className="container">
          <div className={styles.reviewsHeader}>
            <h2 className={styles.reviewsTitle}>Ils nous font confiance</h2>
            <div className={styles.reviewsSubtitle}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span><strong>4.9/5</strong> <GoogleStar size={18} /> basé sur plus de 200 avis Google</span>
              </div>
            </div>
            <a 
              href="https://share.google/MAU1bgsXCWMs0Ecvv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`btn-secondary ${styles.reviewBtn}`}
            >
              Laisser un avis sur Google
            </a>
          </div>
        </div>
        
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {/* Ligne 1 : Défilement vers la gauche */}
            {[...reviewsRow1, ...reviewsRow1].map((review, idx) => (
              <div key={idx} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewAvatar}>
                    {review.name.charAt(0)}
                  </div>
                  <div className={styles.reviewInfo}>
                    <span className={styles.reviewName}>{review.name}</span>
                    <span className={styles.reviewStars}>
                      <div style={{ display: 'flex', gap: '2px' }}>
                        <GoogleStar size={16} />
                        <GoogleStar size={16} />
                        <GoogleStar size={16} />
                        <GoogleStar size={16} />
                        <GoogleStar size={16} />
                      </div>
                    </span>
                  </div>
                </div>
                <p className={styles.reviewText}>"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.marqueeContainer} style={{ marginTop: '2rem' }}>
          <div className={`${styles.marqueeTrack} ${styles.marqueeReverse}`}>
            {/* Ligne 2 : Défilement vers la droite */}
            {[...reviewsRow2, ...reviewsRow2].map((review, idx) => (
              <div key={idx} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewAvatar}>
                    {review.name.charAt(0)}
                  </div>
                  <div className={styles.reviewInfo}>
                    <span className={styles.reviewName}>{review.name}</span>
                    <span className={styles.reviewStars}>
                      <div style={{ display: 'flex', gap: '2px' }}>
                        <GoogleStar size={16} />
                        <GoogleStar size={16} />
                        <GoogleStar size={16} />
                        <GoogleStar size={16} />
                        <GoogleStar size={16} />
                      </div>
                    </span>
                  </div>
                </div>
                <p className={styles.reviewText}>"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Boutique Section */}
      <section className={styles.boutiqueSection}>
        <div className="container">
          <div className={styles.boutiqueHeader}>
            <h2 className={styles.boutiqueTitle}>Notre Boutique</h2>
            <p className={styles.boutiqueDesc}>
              Venez nous rendre visite dans notre atelier toulousain ! Notre équipe vous y accueille avec le sourire pour diagnostiquer et réparer vos appareils au plus vite.
            </p>
          </div>
          
          <div className={styles.boutiqueGrid}>
            <div className={styles.boutiqueInfo}>
              <h3>La Brigade Mobile</h3>
              <p>📍 65 Route de Blagnac<br/>31300 Toulouse</p>
              <p>Ligne <span className="bus-badge bus-l1">L1</span> <span className="bus-badge bus-70">70</span> - Arrêt "Cité Madrid"</p>
              <a 
                href="https://maps.google.com/?q=65+Route+de+Blagnac,+31300+Toulouse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`btn-primary ${styles.mapBtn}`}
              >
                Itinéraire vers la boutique
              </a>
            </div>
            
            <div className={styles.mapContainer}>
              <iframe 
                src="https://maps.google.com/maps?q=65%20Route%20de%20Blagnac,%2031300%20Toulouse&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
