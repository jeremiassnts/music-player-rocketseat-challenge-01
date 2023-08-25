import style from './Button.module.css'

export function Button({ Icon, color, size, action }) {
    return (
        <Icon color={color} size={size} className={style.icon} onClick={() => action()} />
    )
}