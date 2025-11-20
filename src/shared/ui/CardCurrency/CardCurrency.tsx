import cls from './CardCurrency.module.scss'
import Flag from '@/app/assets/flags/russia.svg'

export const CardCurrency = () => {
  return (
    <div className={cls.card}>
        <div className={cls.card__header}>
            <img src={Flag} alt='Флаг'/>
            <p>USD</p>
        </div>
        <p className={cls.card__value}>152,243</p>
    </div>
  )
}
