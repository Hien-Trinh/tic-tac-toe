export default function BoardSquare(props) {
    if (!props.value) {
        return <button onClick={props.onClick} className="aspect-square w-28 border-black border-[1px]"></button>
    }
    return (
        <button className="aspect-square w-28 border-black border-[1px]">
            {props.value}
        </button>
    );
}