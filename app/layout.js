import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import FloatingPhone from '@/components/FloatingPhone';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: {
    default: 'La Brigade Mobile | Réparation de Téléphones à Toulouse',
    template: '%s | La Brigade Mobile'
  },
  description: "Réparation express de téléphones à Toulouse et à domicile. iPhone, Samsung, Xiaomi... Écran, batterie. Pièces Premium garanties 1 an. Devis gratuit !",
  openGraph: {
    title: 'La Brigade Mobile | Réparation de Téléphones à Toulouse',
    description: 'Réparation express de smartphones à Toulouse et à domicile. Intervention en 30 min, pièces premium garanties 1 an. Contactez-nous !',
    url: 'https://labrigademobile.fr',
    siteName: 'La Brigade Mobile',
    images: [
      {
        url: '/images.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingPhone />
      </body>
    </html>
  );
}
