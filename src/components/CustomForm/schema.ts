import * as Yup from 'yup';

const CustomFormSchema = Yup.object().shape({
  photo: Yup.mixed().required('Photo is required'),
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(12, 'Name must be at most 12 characters')
    .trim(),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid')
    .trim(),
  tel: Yup.string()
    .required('Phone number is required')
    .matches(
      /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      'Expected "+38 (XXX) XXX-XX-XX"'
    )
    .trim(),
  position: Yup.string().trim(),
});
export default CustomFormSchema;
