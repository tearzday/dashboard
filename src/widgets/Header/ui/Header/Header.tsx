import Avatar from '@/shared/assets/avatar.png';
import cls from './Header.module.scss';
import { Icon, IconVariant, Typography, TypographyVariant } from '@/shared/ui';
import IconSearch from '@/shared/assets/icons/search.svg?react';
import IconNotification from '@/shared/assets/icons/notification.svg?react';

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <img className={cls.avatar} src={Avatar} alt="User avatar" />
        <Typography className={cls.name} variant={TypographyVariant.H2}>
          Сергей, добро пожаловать!
        </Typography>
      </div>
      <div className={cls.container}>
        <Icon icon={IconSearch} variant={IconVariant.CIRCLE_BLACK} />
        <Icon
          icon={IconNotification}
          variant={IconVariant.CIRCLE_BLACK}
          badge
        />
      </div>
    </header>
  );
};
