# Карточка товара - React компонент

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue.svg)
[![GitHub Pages](https://img.shields.io/badge/Live_Demo-GitHub_Pages-green.svg)](https://gaigerov.github.io/products-app)

Этот проект представляет собой адаптивный компонент карточки товара, созданный с использованием React и TypeScript. Компонент отображает информацию о товаре с форматированием цены и адаптируется под разные размеры экрана.

## Особенности

-   🖼️ Отображение информации о товаре (название, страна происхождения, цена)
-   💰 Форматирование цены с учетом валюты (RUB, USD, EUR)
-   📱 Полностью адаптивный дизайн (мобильные и десктоп устройства)
-   🎨 Плавные анимации при наведении
-   🛡️ Обработка ошибок загрузки изображений
-   🧩 Строгая типизация с использованием TypeScript
-   🧱 Следование методологии БЭМ

## Демо

[Посмотреть демо на GitHub Pages](https://gaigerov.github.io/products-app)

## Установка и запуск

1. Клонируйте репозиторий:

```bash
git clone https://github.com/gaigerov/products-app.git
cd products-app
```

2. Установите зависимости:

```bash
npm install
```

3. Запустите приложение:

```bash
npm start
```

Приложение будет доступно по адресу: [http://localhost:3000](http://localhost:3000)

## Деплой на GitHub Pages

Проект автоматически публикуется на GitHub Pages при выполнении команды:

```bash
npm run deploy
```

## Структура проекта

```
src/
├── components/
│   └── ProductCard/
│       ├── ProductCard.tsx       # Компонент карточки товара
│       └── ProductCard.css       # Стили компонента
├── images/                       # Изображения товаров
├── App.tsx                       # Главный компонент приложения
├── App.css                       # Глобальные стили
├── index.tsx                     # Точка входа
└── index.css                     # Базовые стили
```

## Использование компонента

```tsx
import ProductCard from './components/ProductCard/ProductCard';

function App() {
    return (
        <ProductCard
            title="Название товара"
            origin="Страна производитель"
            price={34900}
            currency="RUB"
            imageUrl="/path/to/image.jpg"
        />
    );
}
```

### Параметры компонента

| Параметр | Тип                     | Обязательный | Описание                  |
| -------- | ----------------------- | ------------ | ------------------------- |
| title    | string                  | Да           | Название товара           |
| origin   | string                  | Да           | Страна происхождения      |
| price    | number                  | Да           | Цена в копейках (для RUB) |
| currency | 'RUB' \| 'USD' \| 'EUR' | Да           | Валюта цены               |
| imageUrl | string                  | Да           | URL изображения товара    |

## Технологии

-   [React](https://reactjs.org/) - JavaScript библиотека для создания пользовательских интерфейсов
-   [TypeScript](https://www.typescriptlang.org/) - Статическая типизация для JavaScript
-   [БЭМ](https://ru.bem.info/) - Методология именования CSS-классов
-   [Intl.NumberFormat](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) - Форматирование чисел и валют
-   [CSS3](https://developer.mozilla.org/ru/docs/Web/CSS) - Стилизация компонента

## Лицензия

Этот проект распространяется под лицензией MIT. Подробнее см. в файле [LICENSE](LICENSE).

---
