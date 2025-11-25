import { Typography, TypographyTheme, TypographyVariant } from '@/shared/ui';
import cls from './NotFoundPage.module.scss';
import { Link } from 'react-router';

export const NotFoundPage = () => {
  return (
    <div className={cls.container}>
      <Typography variant={TypographyVariant.H1}>
        Упс... Кажется страница еще в разработке
      </Typography>
      <Link to="/offers">
        <Typography
          variant={TypographyVariant.H2}
          theme={TypographyTheme.ACCENT}
        >
          Перейдите в офферы!
        </Typography>
      </Link>
      <img
        className={cls.image}
        src="https://i.gifer.com/1FA.gif"
        alt="Monkey"
      />
    </div>
  );
};
