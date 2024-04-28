import React from 'react';
import logo from '../../assets/logo.svg';
import './styles.scss';
import CustomButton from '../CustomButton';

const Header: React.FC = () => {
  return (
    <div className={'container'}>
      <div className={'header__wrapper'}>
        <img src={logo} alt={'logo'} />
        <div className={'header__buttons'}>
          <CustomButton label={'Users'} />
          <CustomButton label={'Sing up'} />
        </div>
      </div>
    </div>
  );
};

export default Header;
