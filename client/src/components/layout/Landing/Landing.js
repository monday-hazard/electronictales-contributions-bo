import React from 'react';
import './Landing.css';
import Hero from '../../elements/hero/Hero';

const Landing = () => {
    const titleText = 'Bienvenue sur le ';
    const styledTitleText = "Studio d'ElectronicTales";
    const styledTitleClass = 'site-name';
    const subtitleText =
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, quidem accusamus totam incidunt quod a labore rerum rem nihil deleniti!';

    return (
        <div className="landing">
            <Hero
                titleText={titleText}
                styledTitleText={styledTitleText}
                styledTitleClass={styledTitleClass}
                subtitleText={subtitleText}
            />
        </div>
    );
};

export default Landing;
