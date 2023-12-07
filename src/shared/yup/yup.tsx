import * as yup from 'yup';

const phoneRegExp = /^(8|\+7)\s?\d+$/;

export const schemaVacancies = yup.object().shape({
  name: yup.string().min(3).max(20).required(),
  secondName: yup.string().required(),
  phone: yup.string().matches(phoneRegExp, 'Некорректный номер телефона'),
  email: yup.string().email().required(),
  cites: yup.string().required(),
  pol: yup.string().required(),
  vacancies: yup.string().required(),
  work: yup.string().required(),
  education: yup.string().required(),
  passport: yup.boolean(),
  militaryID: yup.boolean(),
  deferredEnlistmentCertificate: yup.boolean(),
});