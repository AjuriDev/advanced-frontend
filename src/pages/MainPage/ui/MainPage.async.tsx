// @ts-nocheck
import { lazy } from 'react';

// конструкция ниже нужна для теста лоадинга
// const MainPageAsync = lazy(() => new Promise((res) => {
//   setTimeout(() => {
//     res(import('./MainPage'));
//   }, 3000);
// }));

const MainPageAsync = lazy(() => import('./MainPage'));

export { MainPageAsync as MainPage };
