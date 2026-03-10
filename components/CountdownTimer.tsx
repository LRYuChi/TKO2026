import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const { t } = useTranslation();
  const targetDate = new Date('2026-03-28T10:00:00+08:00').getTime();

  const calcTimeLeft = (): TimeLeft | null => {
    const diff = targetDate - Date.now();
    if (diff <= 0) return null;
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calcTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate - Date.now();
      if (diff <= 0) {
        setTimeLeft(null);
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  const units = [
    { value: timeLeft.days, label: t.countdown.days },
    { value: timeLeft.hours, label: t.countdown.hours },
    { value: timeLeft.minutes, label: t.countdown.minutes },
    { value: timeLeft.seconds, label: t.countdown.seconds },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-5">
      {units.map((unit, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-neutral-900 border border-white/10 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <span className="text-2xl sm:text-4xl font-heading font-bold text-white numeric">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mt-2 font-mono">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
