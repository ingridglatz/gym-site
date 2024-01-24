import { Layout } from '../../components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';

export function Home() {
  return (
    <Layout>
      <main>
        <Hero />
        <Services />
      </main>
    </Layout>
  );
}
