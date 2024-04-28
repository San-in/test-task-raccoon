import React from 'react';
import './styles.scss';

interface Props {
  children: React.ReactNode;
  isActive?: boolean;
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

const CustomNotification: React.FC<Props> = ({
  children,
  onClose,
  isActive = false,
}) => {
  const handleNotificationClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    onClose(e);
  };

  return (
    <div
      className={`notification ${isActive ? 'show' : ''}`}
      onClick={handleNotificationClick}
    >
      {children}
    </div>
  );
};

export default CustomNotification;
