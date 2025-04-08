const EducationSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-purple-700 mb-6">Education</h2>
      <div>
        <h3 className="font-bold text-xl">Responsive Web Design</h3>
        <p className="text-sm text-gray-600">freeCodeCamp | Earned 2024</p>
        <ul className="list-disc pl-5 mt-4 text-base text-gray-700 space-y-3">
          <li>
            Completed coursework covering HTML, CSS, and responsive design
            principles.
          </li>
          <li>
            Built multiple projects to demonstrate proficiency in creating
            responsive and accessible web layouts.
          </li>
        </ul>
        <a
          href="https://www.freecodecamp.org/certification/fccffcef208-bcde-43cb-b180-8d53aacd624d/responsive-web-design"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:underline text-base mt-4 inline-block"
        >
          View Certification
        </a>
      </div>
    </section>
  );
};

export default EducationSection;
