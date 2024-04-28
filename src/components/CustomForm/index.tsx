import React from 'react';
import { Formik, Form, Field } from 'formik';
import PhotoUploader from '../PhotoUploader';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import CustomRadioButtonGroup from '../CustomRadioButtonGroup';
import CustomFormSchema from './schema';

const CustomForm = () => (
  <div>
    <Formik
      initialValues={{
        photo: '',
        name: '',
        email: '',
        tel: '',
        position: 'Frontend developer',
      }}
      validationSchema={CustomFormSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {({ values }) => {
        const isSubmitDisabled: boolean = Object.values(values).some(
          value => !value
        );
        return (
          <Form>
            <div className={'mb-50'}>
              <Field
                name="name"
                id="name"
                label="Your name"
                type="text"
                component={CustomInput}
              />
            </div>
            <div className={'mb-50'}>
              <Field
                name="email"
                id="email"
                label="Email"
                type="email"
                component={CustomInput}
              />
            </div>
            <div className={'mb-29'}>
              <Field
                name="tel"
                id="tel"
                label="Phone"
                type="tel"
                helperText="+38 (XXX) XXX-XX-XX"
                component={CustomInput}
              />
            </div>
            <div className={'mb-47'}>
              <Field
                name="position"
                id="position"
                label="Select your position"
                values={[
                  'Frontend developer',
                  'Backend developer',
                  'Designer',
                  'QA',
                ]}
                defaultValue="Frontend developer"
                component={CustomRadioButtonGroup}
              />
            </div>
            <div className={'mb-50'}>
              <Field name="photo" id="photo" component={PhotoUploader} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <CustomButton
                label={'Submit'}
                disabled={isSubmitDisabled}
                type={'submit'}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  </div>
);

export default CustomForm;
