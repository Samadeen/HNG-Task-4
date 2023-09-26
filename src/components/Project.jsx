import React from 'react';
import audiophile from '../assets/Audiophile.png';
import academia from '../assets/edu.png';
import dico from '../assets/dico.png';
import gala from '../assets/gala.png';
import yt from '../assets/YT clone.png';
import coffee from '../assets/coffee.png';
import './style/Project.css';
import { motion as m } from 'framer-motion';

const projectDetails = [
  {
    image: audiophile,
    name: 'Audiophile',
    description:
      'An E-commerce website where users can buy and ship music gadgets',
    live_link: 'https://audiophile-ecomm-delta.vercel.app/',
    github: 'https://github.com/Samadeen/audiophile-ecomm',
  },
  {
    image: academia,
    name: 'Academia',
    description:
      'An Online school website that gives students more informations',
    live_link: 'https://edu-web-murex.vercel.app/',
    github: 'https://github.com/Samadeen/Edu-web',
  },
  {
    image: dico,
    name: 'Dictionary',
    description:
      'An Online Dictionary app that provides more contexts to words',
    live_link: 'https://dictionary-app-pi.vercel.app/',
    github:
      'https://github.com/Samadeen/Frontend-Mentor/tree/main/Intermediate/dictionary-app',
  },
  {
    image: gala,
    name: 'Galleria ',
    description: 'An Online showroom where vintage art work can be accessed',
    live_link: 'https://hng-task-3-seven.vercel.app/',
    github: 'https://github.com/Samadeen/HNG-Task-3',
  },
  {
    image: coffee,
    name: 'Coffeeroasters',
    description: 'A Subscription site for coffee lovers and also roasters',
    live_link: 'https://coffeeroasters-subscription-site-sandy.vercel.app/',
    github:
      'https://github.com/Samadeen/Frontend-Mentor/tree/main/Intermediate/coffeeroasters-subscription-site',
  },
  {
    image: yt,
    name: 'YouTube Clone',
    description:
      'A simple youtube clone that extends hidden features in Youtube',
    live_link: 'https://youtube-clone-got6.vercel.app/',
    github: 'https://github.com/Samadeen/Youtube-Clone',
  },
];

const Project = () => {
  return (
    <section className='project_container'>
      {projectDetails.map((proj, idx) => {
        return (
          <m.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', ease: 'ease-in' }}
            className='project'
            key={idx}
          >
            <img src={proj.image} alt={proj.name} />
            <div className='details'>
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
              <div className='links'>
                <a href={proj.github} target='_blank'>
                  Github
                </a>
                <a href={proj.live_link} target='_blank'>
                  Live Link
                </a>
              </div>
            </div>
          </m.div>
        );
      })}
    </section>
  );
};

export default Project;
