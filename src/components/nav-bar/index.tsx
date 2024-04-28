import React from 'react';
import { NavLink } from 'react-router-dom';
import './_styles.scss';
import CustomText from '../CustomText';
import { Container } from '@mui/material';

const NavBar: React.FC = () => {
  return (
    <nav className={'nav-bar bg_color__secondary'}>
      <Container maxWidth={'md'}>
        <ul className={'list'}>
          <li>
            <NavLink to="/" className={'cursor-pointer'}>
              <CustomText size={'large'} color={'white'}>
                All
              </CustomText>
            </NavLink>
          </li>
          <li>
            <NavLink to="/completed-cases" className={'cursor-pointer'}>
              <CustomText size={'large'} color={'white'}>
                Completed
              </CustomText>
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
