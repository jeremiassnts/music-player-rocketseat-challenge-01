import style from './Cover.module.css'

export function Cover({ source }) {
    return (
        <img className={style.img} src={source} />
    )
}