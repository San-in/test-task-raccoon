import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import Header from '../components/Header';
import CustomNotification from '../components/CustomNotification';
import { getUsers } from '../services/api';
import { IResponse } from '../interfaces/Response';

const App: React.FC = () => {
  const [response, setResponse] = useState<IResponse | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    const pageNumber = Number(localStorage.getItem('pageNumber'));
    if (!pageNumber) {
      localStorage.setItem('pageNumber', '1');
    }

    pageNumber && getUsers(pageNumber).then(setResponse);
  }, []);

  return (
    <>
      <Header />
      {/*<CustomButton*/}
      {/*  label={'text'}*/}
      {/*  onClick={() => {*/}
      {/*    setIsActive(true);*/}
      {/*  }}*/}
      {/*/>*/}
      {response &&
        response.users.map(({ name, position, email, phone, photo, id }) => (
          <UserCard
            key={id}
            name={name}
            email={email}
            phone={phone}
            photo={photo}
            position={position}
          />
        ))}
      <CustomNotification
        isActive={isActive}
        onClose={() => setIsActive(false)}
      >
        HEY
      </CustomNotification>
    </>
  );
};
export default App;
