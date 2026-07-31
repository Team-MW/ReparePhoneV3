export const metadata = {
  title: 'Mentions Légales | La Brigade Mobile',
  description: 'Mentions légales du site La Brigade Mobile, réparation de téléphones à Toulouse.',
};

export default function MentionsLegales() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--secondary)', fontWeight: '800' }}>Mentions Légales</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: 'var(--foreground)' }}>
        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>1. Éditeur du site</h2>
          <p>Le site <strong>La Brigade Mobile</strong> est édité par l'entreprise La Brigade Mobile.</p>
          <p>Siège social : 65 Route de Blagnac, 31300 Toulouse</p>
          <p>Téléphone : 07 56 91 65 93</p>
          <p>Email : labrigademobile31@gmail.com</p>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>2. Hébergement</h2>
          <p>Ce site est hébergé par Vercel Inc.</p>
          <p>340 S Lemon Ave #4133 Walnut, CA 91789, USA.</p>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>3. Propriété intellectuelle</h2>
          <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse.</p>
        </section>

        <section>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>4. Limitation de responsabilité</h2>
          <p>La Brigade Mobile s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger à tout moment et sans préavis le contenu. Toutefois, La Brigade Mobile ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.</p>
        </section>
      </div>
    </div>
  );
}
