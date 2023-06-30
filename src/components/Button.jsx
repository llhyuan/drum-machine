import { useEffect } from 'react';
import { useRef } from 'react';

export default function Button({
  label,
  name,
  source,
  power,
  volume,
  keypressed,
  setKeyPressed,
  setDisplay,
}) {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.volume = volume;
    if (keypressed[0] === label && !keypressed[1]) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setDisplay(name);
      setKeyPressed([label, true]);
    }
  }, [volume, keypressed, name, label, setDisplay, setKeyPressed]);

  return (
    <button
      className='block w-[25%] aspect-[8/9] text-[2.6rem] py-1 px-5 bg-[#BABABA] border-solid border-[0.3rem] border-[#444444] shadow-button active:shadow-buttonPressed active:translate-y-[-1] mx-auto'
      onClick={(e) => {
        e.currentTarget.firstElementChild.pause();
        e.currentTarget.firstElementChild.currentTime = 0;
        e.currentTarget.firstElementChild.play();
        setDisplay(name);
      }}
    >
      {label}
      <audio id={label} ref={audioRef} src={source} muted={!power}></audio>
    </button>
  );
}
