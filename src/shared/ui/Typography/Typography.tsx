import type { FC, PropsWithChildren } from "react"
import { TypographyTheme, TypographyVariant, TypographyWeight } from "./const"
import cls from './Typography.module.scss'

interface TypographyProps {
    variant?: TypographyVariant
    theme?: TypographyTheme
    weight?: TypographyWeight
}

export const Typography: FC<PropsWithChildren<TypographyProps>>  = ({children, variant = TypographyVariant.BODY2, theme = TypographyTheme.DEFAULT, weight}) => {
  return (
    <span className={`${cls[variant]} ${cls[theme]} ${weight ? cls[weight] : ""}`}>{children}</span>
  )
}
