import style from './Info.module.css'

export function Info({ title, artist }) {
    return (
        <div className={style.container}>
            <span className={style.title}>{title}</span>
            <span className={style.artist}>{artist}</span>
        </div>
    )
}