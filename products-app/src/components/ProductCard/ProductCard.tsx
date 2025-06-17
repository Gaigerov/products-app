import React, {useState} from 'react';
import './ProductCard.css';

interface ProductCardProps {
    title: string;
    origin: string;
    price: number;
    currency: 'RUB' | 'USD' | 'EUR';
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    origin,
    price,
    currency,
    imageUrl
}) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const formattedPrice = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency,
        currencyDisplay: 'symbol',
        minimumFractionDigits: 0,
        maximumFractionDigits: currency === 'RUB' ? 0 : 2
    }).format(currency === 'RUB' ? price / 100 : price);

    const handleImageError = () => {
        setImageError(true);
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div className={`product-card ${!imageLoaded || imageError ? 'no-image' : ''}`}>
            <div className="product-card__image-container">
                {!imageError ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="product-card__image"
                        loading="lazy"
                        onError={handleImageError}
                        onLoad={handleImageLoad}
                    />
                ) : (
                    <div className="product-card__image-fallback">
                        <span>Изображение недоступно</span>
                    </div>
                )}
            </div>

            <div className="product-card__info">
                <h3 className="product-card__title">{title}</h3>
                <p className="product-card__origin">Страна: {origin}</p>
                <p className="product-card__price">{formattedPrice}</p>
            </div>
        </div>
    );
};

export default ProductCard;
