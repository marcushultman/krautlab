import { FunctionalComponent } from 'preact';

const publications = [
  {
    title: 'Understanding Neural Networks in Biology',
    journal: 'Nature Neuroscience, 2023',
    link: '#',
  },
  {
    title: 'Synthetic Circuits for Genetic Control',
    journal: 'Cell Systems, 2022',
    link: '#',
  },
];

const Publications: FunctionalComponent = () => {
  return (
    <section id="publications" class="space-y-6">
      <h3 class="text-2xl font-semibold">Publications</h3>
      <ul class="space-y-3">
        {publications.map((pub) => (
          <li>
            <a href={pub.link} class="text-blue-600 hover:underline">
              <span class="font-medium">{pub.title}</span>
              <span class="block text-sm text-gray-500">{pub.journal}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Publications;
