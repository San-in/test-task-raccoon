import React from 'react';
import { Container } from '@mui/material';
import MainTitle from '../../components/MainTitle';
import CustomButton from '../../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth={'lg'}>
      <div className={'content'}>
        <MainTitle>Ooops... Page not found!</MainTitle>
        <CustomButton label={'Go Home'} onClick={() => navigate('/')} />
      </div>
    </Container>
  );
};

export default NotFound;
