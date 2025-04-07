import { FunctionalComponent } from 'preact';

const About: FunctionalComponent = () => {
  return (
    <section id="about" class="space-y-4">
      <h3 class="text-2xl font-semibold">About us</h3>
      <p class="text-gray-600">
        We are focused on how the epigenome integrates complex signals from the environment, via
        endogenous and microbial metabolites, to output new and adaptive gene expression programs in
        the setting of metabolic and other human disease states. To achieve this, we combine mass
        spectrometry-based proteomics and metabolomics, multiomic data integration, and gnotobiotic
        mouse models. In parallel, we investigate the role of chromatin as a mediator of extremes of
        normal mammalian physiology such as hibernation, with application to human health and space
        travel. Our interdisciplinary approach bridges epigenetics, microbiome research, and
        systems-level biology to advance understanding of host-microbe interactions and adaptive
        gene regulation.
      </p>
    </section>
  );
};

export default About;
