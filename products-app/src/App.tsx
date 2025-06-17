import React from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import './App.css';

// Локальные изображения
import coffeeImage from './images/coffee.jpg';
import teaImage from './images/tea.jpg';
import chocolateImage from './images/chocolate.jpg';

function App() {
    return (
        <div className="App">
            <h1>Каталог товаров</h1>
            <div className="product-container">
                <ProductCard
                    title="Кофе в зернах 'Арабика'"
                    origin="Бразилия"
                    price={34900}
                    currency="RUB"
                    imageUrl={coffeeImage}
                />
                <ProductCard
                    title="Чай 'Эрл Грей'"
                    origin="Индия"
                    price={2500}
                    currency="USD"
                    imageUrl={teaImage}
                />
                <ProductCard
                    title="Шоколад 'Belgian'"
                    origin="Бельгия"
                    price={350}
                    currency="EUR"
                    imageUrl={chocolateImage}
                />
            </div>
        </div>
    );
}

export default App;
