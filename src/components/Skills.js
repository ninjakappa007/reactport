import React from 'react';

const skills = [
  { name: 'Python', icon: '/assets/python-svgrepo-com.svg' },
  { name: 'Django', icon: '/assets/django-svgrepo-com.svg' },
  { name: 'PostgreSQL', icon: '/assets/postgresql-svgrepo-com.svg' },
  { name: 'AWS', icon: '/assets/aws-svgrepo-com.svg' },
  { name: 'Redis', icon: '/assets/redis-svgrepo-com.svg' },
  { name: 'Docker', icon: '/assets/Docker.svg' },
  { name: 'Git', icon: '/assets/Git.svg' },
  { name: 'Linux', icon: '/assets/linux-svgrepo-com.svg' },
  { name: 'JavaScript', icon: '/assets/Javascript.svg' },
  { name: 'React', icon: '/assets/React.png' },
  { name: 'HTML', icon: '/assets/HTML.png' },
  { name: 'CSS', icon: '/assets/CSS.png' },
  { name: 'Tailwind', icon: '/assets/Tailwind.png' },
  { name: 'Jira', icon: '/assets/jira-svgrepo-com.svg' },
  { name: 'Confluence', icon: '/assets/confluence-svgrepo-com.svg' },
];

const Skills = () => {
  return (
    <div className='lg:w-[1200px] w-[95%] mx-auto rounded-lg mt-10 p-4 sm:p-6 lg:p-10 bg-[#f3f4f6]'>
      <h3 className='text-center text-2xl font-semibold text-[#14b8a6] mb-8'>Tools & Technologies</h3>
      <div className='flex flex-wrap justify-center gap-6 sm:gap-8'>
        {skills.map((skill) => (
          <div key={skill.name} className='flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300'>
            <img src={skill.icon} alt={skill.name} className='w-12 h-12 sm:w-16 sm:h-16 object-contain' />
            <span className='text-xs sm:text-sm text-gray-700 font-medium'>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
