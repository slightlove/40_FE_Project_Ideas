import React from 'react'
import styles from './index.module.css'
import { SvgIconProps } from '@mui/material/SvgIcon'

enum ButtonType {
  button = 'button',
  reset = 'reset',
  submit = 'submit',
}

interface ButtonProps {
  name?: string
  type?: ButtonType
  disabled?: boolean
  label?: string
  'button-icon'?: React.ReactElement<SvgIconProps>
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  type = ButtonType.button,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button className={styles.self} type={type} onClick={onClick} {...props}>
      {props?.children && props.children}
      {props.label}
      <div className={styles.icon}>{props?.['button-icon']}</div>
    </button>
  )
}

export default Button
