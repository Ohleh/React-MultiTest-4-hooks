import { useState, useEffect, useRef } from 'react';

export default function skipEffectOnFirstRender() {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true); // приклад ігнора першого рендера

  useEffect(() => console.log(`виконується useEffect - ${Date.now()}`));
  if (isFirstRender.current) {
    console.log('перший рендер не виконається');
    isFirstRender.current = false; // змінить на false, і виконаються всі наступні рендери

    return;
  }
}

return (
  <div>
    <p>
      <button onClick={() => setCount(s => s + 1)}>{count}</button>
    </p>
  </div>
);

// useEffect запуститься перший раз і кожен раз при зміні стейт
// щоб useEffect не зпустився ставимо умову. на прикладі thhp запитів:

const [query] = useState('');

useEffect(() => {
  if (query === '') {
    return;
  }
  fetch();
}, [query]);
//
//

//у випадку коли didamount н потрібен на початку, а лише didupdade, беремо useRef,
// бо це значення що не змінюється між різними рендерами компонента
