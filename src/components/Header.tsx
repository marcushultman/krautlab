import { FunctionalComponent } from 'preact';

const Header: FunctionalComponent = () => {
  return (
    <header class="flex items-center justify-between px-6 py-4 border-b">
      <h1 class="text-xl font-bold tracking-tight">Krautlab</h1>
      <nav class="space-x-6 text-sm">
        <a href="#research" class="hover:underline">
          Research
        </a>
        <a href="#people" class="hover:underline">
          People
        </a>
        <a href="#publications" class="hover:underline">
          Publications
        </a>
        <a href="#contact" class="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
