export default function ProductCard(props : any){
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.imageURL} alt={props.name} />
            <p>Price : {props.price}</p>
            {props.children}
        </div>
    )
}