import Image from 'next/image';
import {FC, memo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<{skillGroup: SkillGroupType}> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold">{name}</span>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, image, text} = skill;

  return (
    <div className="flex flex-col items-center">
      <Image alt={name} className="h-16 w-16 object-contain border-gray-200" src={image} />

      <span className="mt-2 text-sm font-medium">{name}</span>
      {text && <p className="mt-1 text-xs text-gray-600 text-center">{text}</p>}
    </div>
  );
});

Skill.displayName = 'Skill';
