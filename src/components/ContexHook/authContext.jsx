import { createContext } from 'react';

const authContext = createContext;

export default authContext;

// експорт у index
// в Provider обгортаємо кусочок або все приложеніє
// через Consumer отримуємо доступ або через хук useContext
