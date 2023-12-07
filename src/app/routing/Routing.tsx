import Main from 'pages/main';
import { Vacancies } from 'widgets/vacancies';
import { VacanciesForm } from 'features/vacancies/vacanciesform';
import { VacanciesPage } from 'features/vacancies/vacansiesPage';
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