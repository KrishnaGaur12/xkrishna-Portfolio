import { useEffect, useRef, useState } from "react";

const BAR_COUNT = 5;

const getRandomHeights = () =>
  Array.from({ length: BAR_COUNT }, () => Math.random() * 0.8 + 0.2);

const MusicToggleButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [heights, setHeights] = useState(Array(BAR_COUNT).fill(0.12));
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/Marham_320(PagaiWorld.com).mp3");
    audio.loop = true;
    audio.preload = "auto";

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      setHeights(Array(BAR_COUNT).fill(0.12));
      return;
    }

    const waveformIntervalId = window.setInterval(() => {
      setHeights(getRandomHeights());
    }, 110);

    return () => {
      window.clearInterval(waveformIntervalId);
    };
  }, [isPlaying]);

  const handleToggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex h-8 items-center rounded-full border border-border bg-bg-card px-3 text-text-secondary transition hover:text-text-primary"
      aria-label={isPlaying ? "Pause music" : "Play music"}
      title={isPlaying ? "Pause music" : "Play music"}
    >
      <span className="flex h-3.5 items-center gap-0.75">
        {heights.map((height, index) => (
          <span
            key={index}
            className="w-0.5 rounded-full bg-current transition-all duration-100"
            style={{ height: `${Math.max(4, height * 12)}px` }}
          />
        ))}
      </span>
    </button>
  );
};

export default MusicToggleButton;
