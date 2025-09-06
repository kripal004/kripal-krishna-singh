import React from "react";

const Job = ({ title, company, duration, location, points }) => (
  <div className="mb-6">
    <b>{company}</b> | {title}
    <br />
    <span className="text-gray-500 text-sm">{duration} | {location}</span>
    <ul className="list-disc list-inside text-gray-700 text-sm mt-1 space-y-1">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

export default function Experience() {
  const experiences = [
    {
      title: "Senior Associate Consultant – Front-End Developer",
      company: "Infosys Ltd.",
      duration: "May 2024 – Present",
      location: "Bangalore, IN",
      points: [
        "Architected and deployed a scalable frontend system for a high-profile aerospace client, leveraging React.js, Next.js, and TypeScript to handle complex data visualizations and workflows.",
        "Boosted application load performance by 40% by implementing Server-Side Rendering (SSR), code-splitting with dynamic imports, and integrating next-gen image formats, significantly enhancing user experience.",
        "Drove a 60% reduction in code duplication across the organization by designing, developing, and leading the adoption of a reusable UI component library shared across more than five different modules.",
        "Elevated team productivity by mentoring three junior developers and instituting a robust code review process that enforced best practices and maintained high code quality standards.",
        "Streamlined development cycles and ensured on-time feature delivery by integrating seamlessly with Agile/Scrum methodologies, managing workflows in Jira and ServiceNow, and consistently delivering a high volume of production-ready features.",
      ],
    },
    // ... Add other job objects here
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-8">
      <h3 className="text-xl font-semibold mb-4">Experience</h3>
      {/* You can map over an array of experiences here */}
      <Job {...experiences[0]} />
      {/* ... and so on for other jobs */}
    </section>
  );
}