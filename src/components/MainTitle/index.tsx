import React, { CSSProperties, ReactNode } from 'react';
import './styles.scss';

interface Props {
  children: ReactNode;
  textAlign?: CSSProperties['textAlign'];
  color?: 'main' | 'secondary' | 'error';
}
const MainTitle: React.FC<Props> = ({
  children,
  textAlign = 'center',
  color = 'main',
}) => {
  return (
    <h1 className={`main-title, text_color__${color}`} style={{ textAlign }}>
      {children}
    </h1>
  );
};

export default MainTitle;
