export function Button({ Icon, color, size, action }) {
    return (
        <Icon color={color} size={size} onClick={() => action()} />
    )
}