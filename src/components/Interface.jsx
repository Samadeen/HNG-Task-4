import { motion as m } from 'framer-motion';
import Project from './Project';
import Contact from './Contact';

const Section = (props) => {
  const { children } = props;

  return (
    <m.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </m.section>
  );
};

export const Interface = ({ onSectionChange }) => {
  return (
    <div className='flex flex-col items-center w-screen'>
      <AboutSection onSectionChange={onSectionChange} />
      <SkillsSection />
      <Project />
      <Contact />
    </div>
  );
};

const AboutSection = ({ onSectionChange }) => {
  return (
    <Section>
      <h1 className='text-6xl font-extrabold leading-snug pl-10'>
        Hi, I'm
        <br />
        <span className='bg-white px-1 italic'>Ibn Momoh</span>
      </h1>
      <m.p
        className='text-lg text-white mt-4 pl-10'
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I am Frontend Web developer and
        <br />
        I'm learning how to build 3D apps.
      </m.p>
      <m.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16 ml-10`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        onClick={() => onSectionChange(3)}
      >
        Contact me
      </m.button>
    </Section>
  );
};

const skills = [
  {
    title: 'Video Editing',
    level: 60,
  },
  {
    title: 'Marketing ',
    level: 70,
  },
  {
    title: 'Web Development',
    level: 90,
  },
  {
    title: 'Content Creation',
    level: 70,
  },
  {
    title: '3D Modeling',
    level: 50,
  },
];
const stacks = [
  {
    title: 'HTML',
    level: 90,
  },
  {
    title: 'CSS',
    level: 80,
  },
  {
    title: 'Javascript (Typescript)',
    level: 70,
  },
  {
    title: 'Node JS',
    level: 50,
  },
  {
    title: 'Figma',
    level: 60,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <m.div whileInView={'visible'} className='pl-10'>
        <h2 className='text-5xl font-bold'>Skills</h2>
        <div className=' mt-8 space-y-4'>
          {skills.map((skill, index) => (
            <div className='w-64' key={index}>
              <m.h3
                className='text-xl font-bold text-gray-800'
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </m.h3>
              <div className='h-2 w-full bg-gray-200 rounded-full mt-2'>
                <m.div
                  className='h-full bg-indigo-500 rounded-full '
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className='text-5xl font-bold mt-10'>Stacks</h2>
          <div className=' mt-8 space-y-4'>
            {stacks.map((lng, index) => (
              <div className='w-64' key={index}>
                <m.h3
                  className='text-xl font-bold text-gray-800'
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </m.h3>
                <div className='h-2 w-full bg-gray-200 rounded-full mt-2'>
                  <m.div
                    className='h-full bg-indigo-500 rounded-full '
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </m.div>
    </Section>
  );
};

const ContactSection = ({ onSectionChange }) => {
  return <Section></Section>;
};
