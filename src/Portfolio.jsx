import { motion } from "framer-motion";
import React from "react";
import Button from "@mui/material/Button";

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-900">
            Kripal Singh
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#work" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors duration-300">
              Work
            </a>
            <a href="#blog" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors duration-300">
              Blog
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 font-semibold transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I am Kripal Krishna Singh</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Senior Associate Consultant – Front-End Developer</h2>
          <div className="mb-4 text-gray-700">
            <div className="mb-1">
              <a href="mailto:kripal.hec@gmail.com" className="text-blue-600 hover:underline">
                kripal.hec@gmail.com
              </a>{" "}
              |{" "}
              <a href="tel:+918149345927" className="hover:underline">
                +91 8149345927
              </a>
            </div>
            <div className="mb-1">
              <a href="https://linkedin.com/in/kripal-singh-a9989512a" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                LinkedIn
              </a>{" "}
              |{" "}
              <a href="https://github.com/kripal004" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            Frontend developer with strong expertise in React.js, TypeScript, and modern state management (Redux). Proficient in building reusable UI components, responsive and accessible designs. Experienced with CI/CD, REST APIs, Agile/Scrum, and automated testing.
          </p>
          <Button component="a" href="../assets/260725.pdf" target="_blank" download>
            Download Resume
          </Button>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="../assets/Bio.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Skills & Education */}
      <section className="max-w-5xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li><b>Languages:</b> JavaScript, TypeScript</li>
            <li><b>Front-End:</b> React.js, Next.js, Redux, HTML5, CSS3, SCSS, Tailwind CSS, Material-UI</li>
            <li><b>State Management:</b> Redux Toolkit, Redux Saga, Zustand, React Context API</li>
            <li><b>UI/UX:</b> Figma, Adobe XD, Canva</li>
            <li><b>Testing:</b> Jest, React Testing Library, Cypress, Vitest</li>
            <li><b>Version Control:</b> Git, GitHub, Bitbucket, Jira, VersionOne, ServiceNow</li>
            <li><b>Cloud & DevOps:</b> AWS (S3, CloudFront), Docker, Jenkins, Vercel</li>
            <li><b>Tools:</b> VS Code, Chrome DevTools, Postman, Webpack, Vite</li>
            <li><b>Databases (Basic):</b> MongoDB, MySQL, Firebase</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <div className="text-gray-700 text-sm mb-4">
            <b>Yeshwantrao Chavan College of Engineering</b><br />
            B.E. (Computer Technology), May 2020<br />
            Nagpur, IN
          </div>
          <div className="text-gray-700 text-sm">
            <b>Senior Secondary (12th Grade)</b><br />
            NIOS<br />
            Ranchi, IN
          </div>
          <div className="text-gray-700 text-sm mt-2">
            <b>Secondary (10th Grade)</b><br />
            CBSE<br />
            Ranchi, IN
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl font-semibold mb-4">Experience</h3>
        <div className="mb-6">
          <b>Infosys Ltd.</b> | Senior Associate Consultant – Front-End Developer
          <br />
          <span className="text-gray-500 text-sm">May 2024 – Present | Bangalore, IN</span>
          <ul className="list-disc list-inside text-gray-700 text-sm mt-1 space-y-1">
            <li>Architected and deployed a scalable frontend system for a high-profile aerospace client, leveraging React.js, Next.js, and TypeScript to handle complex data visualizations and workflows.</li>
            <li>Boosted application load performance by 40% by implementing Server-Side Rendering (SSR), code-splitting with dynamic imports, and integrating next-gen image formats, significantly enhancing user experience.</li>
            <li>Drove a 60% reduction in code duplication across the organization by designing, developing, and leading the adoption of a reusable UI component library shared across more than five different modules.</li>
            <li>Elevated team productivity by mentoring three junior developers and instituting a robust code review process that enforced best practices and maintained high code quality standards.</li>
            <li>Streamlined development cycles and ensured on-time feature delivery by integrating seamlessly with Agile/Scrum methodologies, managing workflows in Jira and ServiceNow, and consistently delivering a high volume of production-ready features.</li>
          </ul>
        </div>
        <div className="mb-6">
          <b>Aventior Digital Pvt. Ltd.</b> | React.js Developer
          <br />
          <span className="text-gray-500 text-sm">Dec 2020 – Apr 2024 | Pune, IN</span>
          <ul className="list-disc list-inside text-gray-700 text-sm mt-1 space-y-1">
            <li>Spearheaded the development and maintenance of key SPA features using React.js, integrating with complex REST APIs to deliver a responsive and data-rich user experience within an Agile framework.</li>
            <li>Managed end-to-end delivery of four major version releases, independently handling full feature modules from concept to deployment, ensuring a high level of quality and stability.</li>
            <li>Improved code maintainability and scalability by refactoring legacy components, introducing modern React patterns like custom hooks and the Context API, which made the codebase more modular and easier to test.</li>
            <li>Optimized application performance through strategic implementation of techniques like lazy loading, memoization, and route-based rendering, which enhanced page load speeds and overall user satisfaction.</li>
            <li>Fostered cross-functional collaboration by working closely with product designers and backend engineers to ensure pixel-perfect and highly functional UI integration.</li>
          </ul>
        </div>
        <div>
          <b>Take IT Ideas Innovative Solutions</b> | Web Designer Intern
          <br />
          <span className="text-gray-500 text-sm">Jan 2020 – July 2020 | Nagpur, IN</span>
          <ul className="list-disc list-inside text-gray-700 text-sm mt-1 space-y-1">
            <li>Assisted in frontend development and UI design, gaining hands-on experience with core technologies including HTML, CSS, and JavaScript.</li>
            <li>Enhanced UI consistency across internal dashboards by customizing existing layouts and adhering to design guidelines.</li>
            <li>Developed a foundational understanding of the complete frontend development lifecycle and applied principles of responsive design to ensure cross-device compatibility.</li>
          </ul>
        </div>
      </section>

      {/* Notable Contributions & Courses */}
      <section className="max-w-5xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-2">Notable Contributions</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Spearheaded refactoring initiative to modularize codebase and reduce bundle size by 25%.</li>
            <li>Promoted consistent UI through design system contributions across 3 teams.</li>
            <li>Championed use of React Testing Library and Jest for improved test coverage in major releases.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Courses</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>React – The Complete Guide (incl. Hooks, React Router, Redux)</li>
            <li>Vue.js Fast Crash Course</li>
            <li>The Complete 2024 Web Development Bootcamp</li>
          </ul>
        </div>
      </section>

      {/* New Blog Section */}
      {/* <section id="blog" className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">From the Blog</h2>
            <a href="/blog" className="text-blue-500 hover:underline">
              View all posts
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-2">
                Architecting a scalable React application with Redux Toolkit
              </h3>
              <p className="text-sm text-gray-500 mb-2">Oct 2, 2025 • React, Redux</p>
              <p className="text-gray-700 text-sm">
                A deep dive into how to structure a large-scale application using Redux Toolkit to ensure predictable state management and maintainability.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-2">5 best practices for accessible UI components</h3>
              <p className="text-sm text-gray-500 mb-2">Sep 15, 2025 • Accessibility, UI/UX</p>
              <p className="text-gray-700 text-sm">
                Learn how to build UI components that are usable for everyone, from proper semantic HTML to ARIA attributes and keyboard navigation.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}
{/* New Blog Section */}
<section id="blog" className="bg-gray-50 py-16 px-6">
    <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">From the Blog</h2>
            <a href="/blog" className="text-blue-500 hover:underline">
                View all posts
            </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
                className="p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h3 className="text-lg font-bold mb-2">Architecting a scalable React application with Redux Toolkit</h3>
                <p className="text-sm text-gray-500 mb-2">Oct 2, 2025 • React, Redux</p>
                <p className="text-gray-700 text-sm">
                    A deep dive into how to structure a large-scale application using Redux Toolkit to ensure predictable state management and maintainability.
                </p>
            </motion.div>
            <motion.div
                className="p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h3 className="text-lg font-bold mb-2">5 best practices for accessible UI components</h3>
                <p className="text-sm text-gray-500 mb-2">Sep 15, 2025 • Accessibility, UI/UX</p>
                <p className="text-gray-700 text-sm">
                    Learn how to build UI components that are usable for everyone, from proper semantic HTML to ARIA attributes and keyboard navigation.
                </p>
            </motion.div>
            <motion.div
                className="p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <h3 className="text-lg font-bold mb-2">From Figma to Code: A guide to perfect UI implementation</h3>
                <p className="text-sm text-gray-500 mb-2">Aug 20, 2025 • UI/UX, Development</p>
                <p className="text-gray-700 text-sm">
                    A practical guide to bridging the gap between design and development, ensuring your coded components are pixel-perfect and match the Figma prototype.
                </p>
            </motion.div>
        </div>
    </div>
</section>
      {/* New Project Section */}
      <section id="work" className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Newest Project</h2>
          <div className="bg-white shadow-lg rounded-xl overflow-hidden md:flex">
            <div className="md:w-1/2 p-6">
              <h3 className="text-2xl font-bold mb-2">E-commerce UI for a SaaS Dashboard</h3>
              <p className="text-sm text-gray-500 mb-4">React.js, Redux, Tailwind CSS | Dec 2025</p>
              <p className="text-gray-700 mb-6">
                Developed a complete e-commerce user interface for a SaaS analytics dashboard. This project focused on building responsive, data-driven components for product management and sales tracking. I utilized React hooks for state management and Tailwind CSS for rapid styling, and implemented REST APIs for seamless data fetching.
              </p>
              <div className="flex space-x-4">
                <Button component="a" variant="contained" href="[link-to-live-demo]" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </Button>
                <Button component="a" variant="outlined" href="[link-to-github]" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center p-4">
              {/* <img 
                src="/path-to-project-image.jpg" 
                alt="Screenshot of the e-commerce dashboard" 
                className="rounded-lg w-full h-auto"
              /> */}
            </div>
          </div>
        </div>
      </section>
      {/* Featured Works Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Featured works</h2>
        <div className="space-y-10">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* <img src="/work1.png" alt="Modular Frontend System" className="rounded-xl shadow" /> */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold">Modular Frontend System for Aerospace Client</h3>
              <p className="text-sm text-gray-500 mb-2">2024 • Lead Front-End Developer</p>
              <p className="text-gray-600 text-sm">
                Architected and implemented a modular frontend system using React.js, Next.js, Redux, and TypeScript for a major aerospace client. Improved app performance by 40% through SSR, dynamic imports, and advanced image optimization. Led the development of shared UI libraries, reducing code duplication by 60%.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* <img src="/work2.png" alt="Shared UI Component Library" className="rounded-xl shadow" /> */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold">Shared UI Component Library</h3>
              <p className="text-sm text-gray-500 mb-2">2024 • UI Library Architect</p>
              <p className="text-gray-600 text-sm">
                Designed and developed a reusable UI component library adopted across 5+ modules in a large-scale enterprise application. Promoted consistent UI/UX and accelerated feature delivery by standardizing design patterns and best practices.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* <img src="/work3.png" alt="Legacy SPA Refactoring" className="rounded-xl shadow" /> */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold">Legacy SPA Refactoring Initiative</h3>
              <p className="text-sm text-gray-500 mb-2">2023 • React.js Developer</p>
              <p className="text-gray-600 text-sm">
                Spearheaded the refactoring of legacy React.js components for Aventior Digital, introducing custom hooks and context for improved reusability and scalability. Reduced bundle size by 25% and enhanced maintainability.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* <img src="/work1.png" alt="Agile Feature Delivery & Mentorship" className="rounded-xl shadow" /> */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold">Agile Feature Delivery & Mentorship</h3>
              <p className="text-sm text-gray-500 mb-2">2021–2024 • Team Contributor & Mentor</p>
              <p className="text-gray-600 text-sm">
                Delivered 15+ production-ready features in Agile sprints, integrating workflows with VersionOne and ServiceNow. Mentored junior developers and enforced best practices in component design, testing, and code reviews.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* <img src="/work2.png" alt="UI Consistency for Internal Dashboards" className="rounded-xl shadow" /> */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold">UI Consistency for Internal Dashboards</h3>
              <p className="text-sm text-gray-500 mb-2">2020 • Web Designer Intern</p>
              <p className="text-gray-600 text-sm">
                Customized and standardized frontend layouts for internal dashboards, improving UI consistency and user experience across modules. Gained hands-on experience in responsive design and the frontend development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
          {/* Add your contact form or information here */}
          <div className="text-gray-700">
            <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            <div className="mt-4">
              <p className="mb-1">Email: <a href="mailto:kripal.hec@gmail.com" className="text-blue-600 hover:underline">kripal.hec@gmail.com</a></p>
              <p>LinkedIn: <a href="https://linkedin.com/in/kripal-singh-a9989512a" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">kripal-singh-a9989512a</a></p>
            </div>
          </div>
        </section>
    </div>
  );
}