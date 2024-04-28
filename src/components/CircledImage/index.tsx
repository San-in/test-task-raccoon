import React from 'react';
import './styles.scss';

interface Props {
  img: string;
  size?: number;
}
const CircledImage: React.FC<Props> = ({ img, size = 70 }) => {
  return (
    <div className={'avatar-container'}>
      <img src={img} alt="Avatar" width={size} height={size} />
    </div>
  );
};

export default CircledImage;
