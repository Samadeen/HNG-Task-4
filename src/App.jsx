import { Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { MotionConfig } from 'framer-motion';
import { Leva } from 'leva';
import { useEffect, useState } from 'react';
import { Cursor } from './components/Cursor';
import { Experience } from './components/Experience';
import { Interface } from './components/Interface';
import { Menu } from './components/Menu';
import { ScrollManager } from './components/ScrollManager';
import { framerMotionConfig } from './config';
import Spinner from './components/Spinner/Spinner';

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false when your content is ready
    }, 2000);
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MotionConfig
            transition={{
              ...framerMotionConfig,
            }}
          >
            <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
              <color attach='background' args={['#e6e7ff']} />
              <ScrollControls pages={4.5} damping={0.1}>
                <ScrollManager section={section} onSectionChange={setSection} />
                <Scroll>
                  <Experience section={section} menuOpened={menuOpened} />
                </Scroll>
                <Scroll html>
                  <Interface onSectionChange={setSection} />
                </Scroll>
              </ScrollControls>
            </Canvas>
            <Menu
              onSectionChange={setSection}
              menuOpened={menuOpened}
              setMenuOpened={setMenuOpened}
            />
            <Cursor />
          </MotionConfig>
          <Leva hidden />
        </>
      )}
    </>
  );
}

export default App;
