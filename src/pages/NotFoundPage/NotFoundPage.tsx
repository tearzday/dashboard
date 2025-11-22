import { Typography, TypographyVariant } from '@/shared/ui'
import cls from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
  return (
    <div className={cls.container}>
        <Typography variant={TypographyVariant.H1}>Упс... Кажется страница еще в разработке</Typography>
        <img className={cls.image} src='https://i.gifer.com/1FA.gif' alt='Monkey'/>
    </div>
  )
}
