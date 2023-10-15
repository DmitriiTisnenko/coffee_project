import './app-cards.scss';
import Card from '../app-card/app-card';

function Cards({data}) {
    const elements = data.map((item, i) => {
        return (
            <Card key={i} {...item}/>
        )
    })

    return (
        <ul className="cards">
            {elements}
        </ul>
    )
};  

export default Cards;