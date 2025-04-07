import { FunctionalComponent } from 'preact';

const members = [
  { name: 'Kimberly Krautkramer, MD, PhD', role: 'Principal Investigator' },
  // { name: 'Jane Doe', role: 'Postdoctoral Researcher' },
  // { name: 'John Smith', role: 'PhD Student' },
];

const People: FunctionalComponent = () => {
  return (
    <section id="people" class="space-y-6">
      <h3 class="text-2xl font-semibold">People</h3>
      <ul class="space-y-2">
        {members.map((member) => (
          <li class={`flex justify-between pb-2 border-b`}>
            <span>{member.name}</span>
            <span class="text-gray-500 text-sm">{member.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default People;
