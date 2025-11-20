import cls from './ButtonIcon.module.scss'

interface ButtonIconProps {
    src: string;
    alt: string;
}

export const ButtonIcon = ({src, alt}: ButtonIconProps) => {
  return (
    <div className={cls.container}>
        <img src={src} alt={alt}/>
    </div>
  )
}
