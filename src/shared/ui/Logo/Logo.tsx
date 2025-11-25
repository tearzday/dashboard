import LogoImg from '@/shared/assets/logo.svg';
import cls from './Logo.module.scss';

export const Logo = () => {
  return <img className={cls.logo} src={LogoImg} alt="Adskill logo" />;
};
