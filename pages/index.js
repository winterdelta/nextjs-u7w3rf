import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRef, useEffect, useState } from 'react';

const Tracks = [
  {
    no: 1,
    src: 'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
  },
  {
    no: 2,
    src: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3',
  },
];

export default function Home() {
  const [trackPlaying, setTrackPlaying] = useState(Tracks[0].src);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  // useEffect(() => {});

  const changeSource = () => {
    setTrackPlaying(Tracks[1].src);
    audioRef.current.pause();
    audioRef.current.load();
    audioRef.current.play();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <button onClick={changeSource}>Change Source</button>

      {/* Need a 'mega button' that plays and when the track has finished, plays the next track in the list */}

      {/* <button>MEGA-PLAY</button> */}

      <main className={styles.main}>
        <audio
          ref={audioRef}
          onEnded={changeSource}
          src={trackPlaying}
          controls
        />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
