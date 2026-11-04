import Home from '@/components/Home';
export const metadata = { alternates: { canonical: '/es/', languages: { en: '/', es: '/es/' } } };
export default function Page() { return <Home lang="es" />; }
