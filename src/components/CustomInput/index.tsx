import React, { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';
import { useField } from 'formik';
import CustomText from '../CustomText';
import './styles.scss';
import { IField } from '../../interfaces/Field';

interface Props {
  label: string;
  field: IField;
  type: HTMLInputTypeAttribute;
  helperText?: string;
  parentColor?: string;
}
const CustomInput: React.FC<Props> = ({
  parentColor = '#FFFFFF',
  label,
  helperText,
  field: currentField,
  type,
}) => {
  const [field, meta] = useField(currentField.name);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <>
      <div
        className={`input__wrapper ${meta.error && meta.touched ? 'border__error' : 'border__secondary'}`}
      >
        <label className={isFocused || field.value ? 'label--focused' : ''}>
          <span
            className={`label__text ${isFocused || field.value ? 'text_size__small' : 'text_size__medium'} ${meta.error && meta.touched ? 'text_color__error' : 'text_color__secondary'} `}
            style={{
              backgroundColor:
                isFocused || field.value ? parentColor : 'inherit',
            }}
          >
            {label}
          </span>
          <input
            {...field}
            type={type}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={'input__field text_color__main text_size__medium'}
          />
        </label>
      </div>

      {meta.error && meta.touched ? (
        <div className="input-helper-text-wrapper">
          <CustomText size="small" textAlign="start" color="error">
            {meta.error}
          </CustomText>
        </div>
      ) : (
        helperText && (
          <div className="input-helper-text-wrapper">
            <CustomText size="small" color={'secondary'} textAlign="start">
              {helperText}
            </CustomText>
          </div>
        )
      )}
    </>
  );
};

export default CustomInput;
