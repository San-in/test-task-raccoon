import React, { CSSProperties, ReactNode } from 'react';
import '../../styles/scss/utils/_colors.scss';

interface Props {
  children: ReactNode;
  textAlign?: CSSProperties['textAlign'];
  color?: 'main' | 'secondary' | 'error';
  size?: 'small' | 'medium' | 'large';
}
const CustomText: React.FC<Props> = ({
  children,
  textAlign = 'center',
  color = 'main',
  size = 'medium',
}) => {
  return (
    <p
      className={`text_size__${size} text_color__${color}`}
      style={{ textAlign }}
    >
      {children}
    </p>
  );
};

export default CustomText;
