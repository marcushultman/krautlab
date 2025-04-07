import { FunctionalComponent } from 'preact';

const Footer: FunctionalComponent = () => {
  return (
    <footer class="mt-24 px-6 py-8 border-t text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Krautkramer. All rights reserved.
    </footer>
  );
};

export default Footer;
