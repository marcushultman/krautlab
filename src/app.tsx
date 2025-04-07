import { FunctionalComponent } from 'preact';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
// import Research from './components/Research';
import People from './components/People';
// import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: FunctionalComponent = () => {
  return (
    <div>
      <Header />
      <main class="space-y-16">
        <Hero />
        <div class="space-y-6 px-6 max-w-5xl mx-auto">
          <About />
          {/* <Research /> */}
          <People />
          {/* <Publications /> */}
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { App };
