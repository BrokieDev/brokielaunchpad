import Header from '@/components/home/Header';
import Projects from '@/components/home/Projects';
import TopLeftGradient from '@/components/others/TopLeftGradient';
import TopRightGradient from '@/components/others/TopRightGradient';

export default function Home() {
  return (
    <main>
      {/* Gradients in the right side and the left side of the top of the page */}
      <TopLeftGradient></TopLeftGradient>
      <TopRightGradient></TopRightGradient>
      {/* ------ */}

      <Header></Header>
      <Projects></Projects>
    </main>
  );
}
