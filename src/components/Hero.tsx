import { FunctionalComponent } from 'preact';
import heroImage from '../assets/hero.png';

const Hero: FunctionalComponent = () => {
  return (
    <section class="relative w-full h-[40vh] min-h-[400px] flex items-center justify-center text-center overflow-hidden">
      {/* Replace this with actual image path later */}
      <img
        src={heroImage}
        alt="Krautlab cover"
        class="absolute inset-0 w-full h-full object-cover brightness-50 cover"
      />

      <div class="relative z-10 text-white px-4">
        <h2 class="text-3xl md:text-5xl font-bold mb-4">Krautlab</h2>
        <p class="text-lg max-w-2xl mx-auto">
          Researching the next frontier in [field/area] at [Institution].
        </p>
      </div>
    </section>
  );
};

export default Hero;
