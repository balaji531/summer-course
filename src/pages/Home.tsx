import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import Info from '../components/Info';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative selection:bg-gold/30 selection:text-gold-bright">
      <Nav />
      <main>
        <Hero />
        <Courses />
        <Info />
      </main>
      <Footer />
    </div>
  );
}
