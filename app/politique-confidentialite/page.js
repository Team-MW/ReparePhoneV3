export const metadata = {
  title: 'Politique de Confidentialité | La Brigade Mobile',
  description: 'Politique de confidentialité et traitement des données personnelles par La Brigade Mobile.',
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--secondary)', fontWeight: '800' }}>Politique de Confidentialité</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: 'var(--foreground)' }}>
        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>1. Collecte des données personnelles</h2>
          <p>Les informations recueillies via nos formulaires (nom, prénom, numéro de téléphone, adresse email, modèle d'appareil) sont enregistrées par <strong>La Brigade Mobile</strong> pour faciliter les échanges, la prise de rendez-vous et l'établissement de devis.</p>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>2. Utilisation des données</h2>
          <p>Les données collectées sont utilisées exclusivement par l'équipe de La Brigade Mobile pour vous recontacter suite à votre demande. Elles ne sont en aucun cas vendues, cédées ou louées à des tiers à des fins commerciales.</p>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>3. Durée de conservation</h2>
          <p>Les données sont conservées pendant la durée nécessaire au traitement de votre demande et à la relation commerciale qui peut en découler, conformément aux dispositions légales en vigueur.</p>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>4. Droits d'accès et de rectification</h2>
          <p>Conformément à la loi « informatique et libertés » et au RGPD, vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier ou supprimer en nous contactant à : <strong>labrigademobile31@gmail.com</strong>.</p>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>5. Cookies et traceurs</h2>
          <p>Ce site peut être amené à utiliser des cookies (notamment pour des outils d'analyse d'audience ou le Pixel Facebook) afin d'améliorer votre expérience utilisateur et de nous permettre d'optimiser nos campagnes publicitaires. Vous pouvez à tout moment configurer votre navigateur pour refuser ces cookies.</p>
        </section>
      </div>
    </div>
  );
}
