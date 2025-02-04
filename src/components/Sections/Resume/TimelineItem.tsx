import Image from 'next/image'; 
import type {FC} from 'react';
import {memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{ item: TimelineItem }> = memo(({item}) => {
  const {title, date, location, content, image, link} = item; // Ajout de `link`

  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4 md:flex-row md:items-center">
        {/* Si une image ET un lien existent, on les affiche ensemble */}
        {image && link ? (
          <a className="mr-4 flex-shrink-0" href={link} rel="noopener noreferrer" target="_blank">
            <Image 
              alt={location} 
              className="rounded-full object-cover border border-gray-300" 
              height={48}  
              src={image} 
              width={48}
            />
          </a>
        ) : (
          image && (
            <Image 
              alt={location} 
              className="rounded-full object-cover border border-gray-300" 
              height={48}  
              src={image} 
              width={48}
            />
          )
        )}
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex items-center gap-x-2">
            <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
            <span>•</span>
            <span className="flex-1 text-sm sm:flex-none">{date}</span>
          </div>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
