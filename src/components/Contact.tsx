import { FunctionalComponent } from 'preact';

const s = [String.fromCharCode(64), 'kkrautkramer', 'uwalumni.com'];

const Contact: FunctionalComponent = () => {
  return (
    <section id="contact" class="space-y-6">
      <h3 class="text-2xl font-semibold">Contact</h3>
      {/* <p class="text-gray-600">For inquiries, collaboration opportunities, or joining the lab:</p> */}
      <p class="text-gray-800 font-medium">
        <a href={`mailto:{{spam@uce.gov}}`.replace(/{{.+?(}})/g, s[1] + s[0] + s[2])}>
          {`{{spam@uce.gov}}`.replace(/{{.+?(}})/g, s[1] + s[0] + s[2])}
        </a>
      </p>
      <p class="text-gray-600">Department of XYZ, [University Name], [Address]</p>
    </section>
  );
};

export default Contact;
