import Main from 'pages/main';
import { Vacancies } from 'pages/vacancies/vacancies';
import { VacanciesForm } from 'pages/vacancies/vacanciesform';
import { VacanciesPage } from 'pages/vacancies/vacansiesPage';
import {
  createBrowserRouter,
} from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: 'career',
    children: [
      {
        index: true,
        element: <Vacancies />
      },
      {
      path: 'job/:id',
      element: <VacanciesPage />
      },
      {
        path: 'vacancy-form',
        element: <VacanciesForm />
      }
    ]
  },
]);