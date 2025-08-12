import SkillCard from './SkillCard';
import { skillsData } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7600bc] mb-12">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {skillsData.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;