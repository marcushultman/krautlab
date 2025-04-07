import { FunctionalComponent } from 'preact';

const topics = [
  { title: 'Neural Computation', desc: 'Understanding how brains process information.' },
  { title: 'Synthetic Biology', desc: 'Engineering biological systems for novel applications.' },
  { title: 'Machine Learning', desc: 'Applying ML to analyze complex biological data.' },
];

const Research: FunctionalComponent = () => {
  return (
    <section id="research" class="space-y-6">
      <h3 class="text-2xl font-semibold">Research</h3>
      <div class="grid md:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div class="border p-4 rounded-lg shadow-sm hover:shadow transition">
            <h4 class="font-semibold text-lg">{topic.title}</h4>
            <p class="text-gray-600 text-sm">{topic.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;
