
import { useEffect, useState } from 'react';

interface ConfettiProps {
  active?: boolean;
}

const Confetti = ({ active = true }: ConfettiProps) => {
  const [confetti, setConfetti] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!active) return;

    const colors = ['#FF719A', '#9b87f5', '#FEF7CD', '#FFDEE2', '#D6BCFA'];
    const confettiCount = 100;
    const newConfetti: JSX.Element[] = [];

    for (let i = 0; i < confettiCount; i++) {
      const left = Math.random() * 100;
      const size = Math.random() * 10 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 2;

      newConfetti.push(
        <div
          key={i}
          className="confetti absolute"
          style={{
            left: `${left}%`,
            top: "-5%",
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
            animation: `confetti-fall ${duration}s linear ${delay}s infinite`
          }}
        />
      );
    }

    setConfetti(newConfetti);

    return () => {
      setConfetti([]);
    };
  }, [active]);

  return <>{confetti}</>;
};

export default Confetti;
