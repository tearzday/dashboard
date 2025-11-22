import { useLayoutEffect, useRef, useState } from 'react'
import { Typography } from '../Typography/Typography'
import cls from './Selector.module.scss'
import Arrow from '@/shared/assets/icons/arrow.svg'
import type { SelectorOption } from '@/shared/types'

interface SelectorProps {
    placeholder: string
    icon: string
    options: SelectorOption[]
}

export const Selector = ({placeholder, icon, options}: SelectorProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<SelectorOption | null>(null)
    const buttonRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState<number | 'auto'>('auto')

    useLayoutEffect(() => {
        if (buttonRef.current) {
            setWidth(buttonRef.current.offsetWidth)
        }
    }, [])


    const handleSelect = (option: SelectorOption) => {
        setValue(option)
        setOpen(false)
    }
  return (
    <div className={cls.selector} >
        <div className={cls.button} onClick={() => setOpen(true)} ref={buttonRef} style={{ width }}>
            <img src={icon} alt='icon'/>
            <Typography>{value ? value.label : placeholder}</Typography>
            <img src={Arrow} alt='Arrow icon'/>
        </div>

        {open && (
            <ul className={cls.menu}>
                {options.map((option) => (
                    <li key={option.value} className={cls.item} onClick={() => handleSelect(option)}>
                    {option.label}
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}
