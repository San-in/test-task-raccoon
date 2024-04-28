import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
  color?: 'primary' | 'secondary' | 'error';
  size?: number;
}

const Loader: React.FC<Props> = ({ color = 'secondary', size = 48 }) => {
  const getCircleColor = () => {
    if (color === 'primary') {
      return {
        color: '#F4E041',
      };
    }
    if (color === 'secondary') {
      return {
        color: '#00BDD3',
      };
    }
    if (color === 'error') {
      return {
        color: '#CB3D40',
      };
    } else {
      return {
        color: '#000000',
      };
    }
  };
  const circleColor = getCircleColor();

  return <CircularProgress size={size} style={circleColor} />;
};

export default Loader;
