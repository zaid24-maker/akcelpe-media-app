import { KitProvider } from '@/components/KitProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Hub from '@/components/Hub';
import Resources from '@/components/Resources';
import VideoModal from '@/components/VideoModal';
import { Group, Projects, Flyers, Verify, Footer } from '@/components/Sections';

export default function Page() {
  return (
    <KitProvider>
      <Header />
      <main className="wrap">
        <Hero />
        <section className="grid grid-cols-[290px_minmax(0,1fr)] items-start gap-6 pb-10 pt-4 narrow:grid-cols-1">
          <Hub />
          <Resources />
        </section>
        <Group />
        <Projects />
        <Flyers />
        <Verify />
      </main>
      <Footer />
      <VideoModal />
    </KitProvider>
  );
}
