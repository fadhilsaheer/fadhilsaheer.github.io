import React from 'react';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <div className='mt-16'>
      <h2 className='text-2xl sm:text-3xl font-medium text-rose-100/80'>
        Projects
      </h2>
      <p className='mt-7 text-xl text-rose-100/50'>
        I've build many projects using different technologies. Here are some of
        my notable works.
      </p>
      <div className='mt-9 mb-7 grid grid-cols-1 gap-5'>
        {projects.map((project, idx) => (
          <a key={idx} href={project.link}>
            <div className='rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium'>
              <h2 className='text-xl text-rose-100/90 transition duration-300 line-clamp-2 hover:text-rose-100/90'>
                {project.title}
              </h2>
              <div className='mt-2 flex flex-wrap space-x-2 text-base text-rose-100/50'>
                {project.stack.trim().split(',').join(' · ')}
              </div>
              <p className='mt-4 text-lg text-rose-100/70 line-clamp-3'>
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
      <a
        href='https://github.com/octoi'
        className='text-xl text-gray-500 font-medium hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70'
      >
        View more projects
      </a>
    </div>
  );
};
