import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const IMAGE_WIDTH = 600; // Définir une largeur fixe
const IMAGE_HEIGHT = 500; // Définir une hauteur fixe

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Voici quelques projets durant mes études.</h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                    'w-full md:w-[100%] mx-auto' // Réduction des marges pour élargir légèrement l'image
                  )}>
                  <Image 
                    alt={title} 
                    className="w-full h-[250px] object-cover" 
                    height={IMAGE_HEIGHT} 
                    placeholder="blur" 
                    src={image} 
                    width={IMAGE_WIDTH} 
                  />

                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description, technologies}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    }
  }, []);

  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {

      if (url === '#') {
        event.preventDefault();
        return;
      }
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay, url],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-100': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col justify-between">
          <div>
            <h2 className="text-center font-bold text-white">{title}</h2>
            <p className="text-xs text-white sm:text-sm">{description}</p>
          </div>
      
          {/* Section des icônes des langages */}
          {technologies && (
            <div className="absolute bottom-2 left-2 flex space-x-2">
              {technologies.map((tech, index) => (
                <div className="p-1 flex items-center justify-center" key={index}>
                  <Image 
                    alt="Tech Icon" 
                    className="h-6 w-6 shadow-md" 
                    height={24} 
                    src={tech} 
                    width={24} 
                  />
                </div>
              ))}
            </div>
          )}
      </div>
                <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});


