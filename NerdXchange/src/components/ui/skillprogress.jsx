
import { useState } from 'react';

const skills = [
  { title: 'HTML', percent: 95 },
  { title: 'CSS', percent: 70 },
  { title: 'Tailwind CSS', percent: 90 },
  { title: 'JavaScript', percent: 70 },
  { title: 'Alpine JS', percent: 80 },
  { title: 'PHP', percent: 65 },
  { title: 'Laravel', percent: 75 },
];

const SkillDisplay = () => {
  const [currentSkill, setCurrentSkill] = useState(skills[0]);
  const circumference = 2 * Math.PI * 120;

  return (
    <main className="grid w-full min-h-40 rounded-3xl text-gray-100 bg-gray-900 place-content-center">
      <section className="p-6 space-y-6 bg-transparent rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
        <div className="grid grid-cols-2 gap-6 z-10">
          {skills.map((skill) => (
            <button
              key={skill.title}
              className={`px-4 py-2 text-xl transition rounded-md w-44 h-14 hover:opacity-80 ${currentSkill.title === skill.title ? 'font-bold ring-2 ring-gray-100' : ''} 
              bg-gradient-to-r from-[#660F57] to-[#220A3BFF] hover:from-pink-700 hover:via-purple-800 hover:to-indigo-700`}
              onClick={() => setCurrentSkill(skill)}
            >
              {skill.title}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center relative z-0">
          <svg className="transform -rotate-90 w-72 h-72">
            <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent" className="from-[#660F57]" />
            <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent" strokeDasharray={circumference} strokeDashoffset={circumference - (currentSkill.percent / 100) * circumference} className="text-[#59595a]" />
          </svg>
          <span className="absolute text-5xl">{`${currentSkill.percent}%`}</span>
        </div>
      </section>
    </main>
  );
};

export default SkillDisplay;
