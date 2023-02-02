import React from 'react';
import { projects } from '../data/projects';
import { Card } from './Card';

export const Projects: React.FC = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl sm:text-3xl font-medium text-rose-100/80">
        Projects
      </h2>
      <p className="mt-7 text-xl text-rose-100/50">
        I've build many projects using different technologies. Here are some of
        my notable works.
      </p>
      <div className="mt-9 mb-7 grid grid-cols-1 gap-5">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            title={project.title}
            link={project.link}
            substring={project.stack.trim().split(',').join(' · ')}
            description={project.description}
          />
        ))}
      </div>
      <a
        href="https://github.com/fadhilsaheer"
        className="text-xl text-gray-500 font-medium hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
      >
        View more projects
      </a>
    </div>
  );
};
