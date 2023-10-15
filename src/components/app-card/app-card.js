import './app-card.scss';
import ImgCoffe from '../../imgs/coffeGroup.jpg'

function Card(props) {
    
    const {name, country, price} = props;

    return (
        <li className="card">
            <img src={ImgCoffe} alt="coffeGroup" className="card__img" />
            <div className="card__text">{name}</div>
            <div className="card__text card__text_right">{country}</div>
            <div className="card__text card__text_price">{price}</div>
        </li>
    )
}

export default Card;