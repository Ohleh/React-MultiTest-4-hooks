import { useState, useEffect, useRef } from 'react';

export default function Clock() {
  const [time, setTime] = useState(Date.now()); // функція виклакається щоразу, і щоразу перезаписує стету початкове занчення
  const [TimeOne, setTimeOne] = useState(() => Date.now()); // функція викличеться одни раз, зачення яке вона поверне буде початкове занчення стейта
  const intervalId = useRef(null);
}

useEffect(() => {
  intervalId.current = setInterval(() => {
    setTime(newDate());
  }, 1000);

  // componentwillunmount -
  //функція для очистки перед наступним вилкликом
  return () => {
    stop();
  };
  // очищаємо і зупиняємо
}, []);

const stop = () => {
  clearInterval(intervalId.current);
};
