import './itemContentHome.scss';

function ItemContentHome({ icon, title, description }) {

    return (
        <div className="features__item">
            <img src={icon} alt="Icon" className="features__icon" />
            <h3 className="features__item--title">{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}

export default ItemContentHome