import { FunctionalComponent } from 'preact';

const About: FunctionalComponent = () => {
  return (
    <section id="about" class="space-y-4">
      <h3 class="text-2xl font-semibold">About Krautlab</h3>
      <p class="text-gray-600">
        Krautlab is a research group at [Institution] focused on advancing knowledge in [your field,
        e.g., computational neuroscience, molecular biology, etc.]. Our interdisciplinary approach
        combines theory, experimentation, and collaboration to solve pressing scientific challenges.
      </p>
    </section>
  );
};

export default About;
