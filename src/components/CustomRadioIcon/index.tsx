import React from 'react';
import './styles.scss';

interface Props {
  filled: boolean;
}
const CustomRadioIcon: React.FC<Props> = ({ filled }) => {
  return (
    <div
      className={`${filled ? 'border__accent' : 'border__secondary'} radio-icon__external-circle`}
    >
      <div
        className={`${filled ? 'bg_color__secondary' : ''} radio-icon__inner-circle`}
      />
    </div>
  );
};

export default CustomRadioIcon;
