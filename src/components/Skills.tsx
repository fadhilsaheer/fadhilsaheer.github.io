import React from 'react';
import { skills } from '../data/skills';
import { getYearDiffFromDate } from '../utils/getYearDiffFromDate';
import { Skill } from './Skill';

export const getExperience = () => {
  const dob = new Date('08/23/2006');
  return Math.abs(new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970);
};

export const Skills: React.FC = () => {
  return (
    <div className='mt-16'>
      <h2 className='text-2xl sm:text-3xl font-medium text-rose-100/80'>
        Skills
      </h2>
      <p className='mt-7 text-xl text-rose-100/50'>
        I'm doing this for almost {getYearDiffFromDate('04/20/2020')} years from
        now, and I have learned a lot of things through this journey.
      </p>
      <div className='mt-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {skills.map((skill, idx) => (
          <Skill key={idx} title={skill.title} icon={skill.icon} />
        ))}
      </div>
      <p className='mt-7 text-xl text-rose-100/50'>And much more...</p>
    </div>
  );
};
