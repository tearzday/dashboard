import { useLayoutEffect, useRef, useState, type FC, type SVGProps } from 'react'
import { Typography } from '../Typography/Typography'
import cls from './Selector.module.scss'
import IconArrow from '@/shared/assets/icons/arrow.svg?react'
import type { SelectorOption } from '@/shared/types'
import { Icon } from '../Icon/Icon'

interface SelectorProps {
    selectorKey: string;
    placeholder: string
    icon: FC<SVGProps<SVGSVGElement>>
    options: SelectorOption[]
    onChange: (key: string, option: SelectorOption) => void
}

export const Selector = ({selectorKey, placeholder, icon, options, onChange}: SelectorProps) => {
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
        onChange?.(selectorKey, option)
        setOpen(false)
    }
  return (
    <div className={cls.selector} >
        <div className={cls.button} onClick={() => setOpen(prev => !prev)} ref={buttonRef} style={{ width }}>
            <Icon icon={icon}/>
            <Typography>{value ? value.label : placeholder}</Typography>
            <Icon icon={IconArrow}/>
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
