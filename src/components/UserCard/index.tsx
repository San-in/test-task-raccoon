import React, { useEffect, useRef, useState } from 'react';
import CircledImage from '../CircledImage';
import defaultAvatar from '../../assets/default-avatar.svg';
import CustomTooltip from '../MUI/CustomTooltip';
import './styles.scss';
import { IUser } from '../../interfaces/User';

type Props = Partial<IUser>;
const UserCard: React.FC<Props> = ({
  name = '',
  position = '',
  email = '',
  phone = '',
  photo = defaultAvatar,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className={'user-card__wrapper'}>
      <div className={'flex-center user-card__content'} ref={containerRef}>
        <div className={'flex-center'}>
          <CircledImage img={photo} />
        </div>
        <CustomTooltip containerWidth={containerWidth} text={name} />
        <div className={'flex-center user-card__contacts-group'}>
          <CustomTooltip containerWidth={containerWidth} text={position} />
          <CustomTooltip containerWidth={containerWidth} text={email} />
          <CustomTooltip containerWidth={containerWidth} text={phone} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
