import './Card.css'
export default function Card({image, title, description}) {
    return (
        <div className="card-wrapper">
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <div className="card-text">
                <h3>{title}</h3>
                <p>{description}</p>
                <button>Acessar</button>
            </div>
        </div>
    )
}