// рпи умові що UserMenu.jsx в App
import React, { useContext } from 'react';
import ctx from './authContext';

export default function () {
  // const authContext = useContext(ctx);
  console.log(authContext);
  // об'єкт зі значенням value {name: 'mango'}

  // або деструктуризуємо
  const { user, login, logout } = useContext(ctx);

  return (
    <div>
      <button type="button" onClick={login}>
        увійти
      </button>
      <p>{user}</p>
      <button type="button" onClick={logout}>
        вийти
      </button>
      {/* тут буде значення: value від провайдера */}
    </div>
  );
}
