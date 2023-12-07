import * as yup from 'yup';

const phoneRegExp = /^(\+7|8)\s?\d{3}\s?\d{2}\s?\d{2}\s?\d{2}$/;

export const schemaVacancies = yup.object().shape({
  name: yup.string().min(3).max(20).required(),
  secondName: yup.string().required(),
  phone: yup.string().matches(phoneRegExp, 'Некорректный номер телефона'),
  email: yup.string().email().required(),
  
});