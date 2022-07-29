
import { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    JSON.parse(window.localStorage.getItem(key) ?? defaultValue);
  });
    
    useEffect(() => {
        window.localStorage.setItem("key", JSON.stringify(state))
    }, [key, state])

  return [state, setState];
};

export default function NewHook() {
    const [email, setemail] = useLocalStorage("email", '')
    const [pass, setpass] = useLocalStorage("pass", '')
}

// useEffect(() => {
//   window.localStorage.setItem('email', JSON.stringify(email));
// }, [email]);

// useEffect(() => {
//   window.localStorage.setItem('pass', JSON.stringify(pass));
// }, [pass]);

//

export default function Testfunftion() {
  const [email, setEmail] = useState('');
}

const handle = index => {
  setEmail(index);
};
