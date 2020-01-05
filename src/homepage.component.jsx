import React from 'react';

import './homepage.styles.scss'

const HomePage = () => (
    <section className="home">
        <div className="category-menu">
            <article className="category-menu__item">
                <div className="category-menu__content">
                    <h2 className="category-menu__title">Hats</h2>
                    <span className="category-menu__subtitle">Shop now</span>
                </div>
            </article>
            <article className="category-menu__item">
                <div className="category-menu__content">
                    <h2 className="category-menu__title">Jackets</h2>
                    <span className="category-menu__subtitle">Shop now</span>
                </div>
            </article>
            <article className="category-menu__item">
                <div className="category-menu__content">
                    <h2 className="category-menu__title">Sneakers</h2>
                    <span className="category-menu__subtitle">Shop now</span>
                </div>
            </article>
            <article className="category-menu__item">
                <div className="category-menu__content">
                    <h2 className="category-menu__title">Womens</h2>
                    <span className="category-menu__subtitle">Shop now</span>
                </div>
            </article>
            <article className="category-menu__item">
                <div className="category-menu__content">
                    <h2 className="category-menu__title">Mens</h2>
                    <span className="category-menu__subtitle">Shop now</span>
                </div>
            </article>
        </div>
    </section>
);

export default HomePage;
