function Card({title, picture}){
    return (
        <div>
            <img src={picture} alt={title}/>
            <h3>{title}</h3>
        </div>
    )
}

export default Card;