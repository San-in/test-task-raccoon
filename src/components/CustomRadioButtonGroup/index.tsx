import React, { ChangeEvent, useState } from 'react';
import { useField } from 'formik';
import CustomRadioIcon from '../CustomRadioIcon';
import CustomText from '../CustomText';
import './styles.scss';
import { IField } from '../../interfaces/Field';

interface Props {
  field: IField;
  label: string;
  defaultValue: string;
  values: string[];
}

const CustomRadioButtonGroup: React.FC<Props> = ({
  field: currentField,
  label,
  defaultValue,
  values,
}) => {
  const [field, meta] = useField(currentField.name);
  const [hasSelected, setHasSelected] = useState(false);

  const handleRadioChange = (value: string) => {
    currentField.onChange({
      target: {
        name: currentField.name,
        value: value,
        type: 'radio',
        checked: field.value === value,
      },
    } as ChangeEvent<HTMLInputElement>);
    setHasSelected(true);
  };

  return (
    <>
      <div className={'mb-11'}>
        <CustomText textAlign={'start'}>{label}</CustomText>
      </div>
      <ul className={'radio-btn-group'}>
        {values.map((value: string, index: number) => {
          const isChecked =
            field.value === value || (defaultValue === value && !hasSelected);
          return (
            <li key={`${value}-${index + 1}`}>
              <label>
                <input
                  type="radio"
                  name={currentField.name}
                  value={value}
                  checked={isChecked}
                  onChange={() => handleRadioChange(value)}
                  className="hidden"
                />
                <div className={'radio-btn-group__item'}>
                  <CustomRadioIcon filled={isChecked} />
                  <CustomText textAlign={'start'}>{value}</CustomText>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
      {meta.touched && meta.error ? (
        <div className="text_color__error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default CustomRadioButtonGroup;
