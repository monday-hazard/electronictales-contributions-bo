import React from 'react';
import Hero from '../../elements/hero/Hero';
import PageSection from '../../elements/page-section/PageSection';
import homeImg1 from '../../../resources/img/imghome1.png';
import homeImg2 from '../../../resources/img/imghome2.png';  

import './Landing.css';

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
            <PageSection imgLeft isTopic hasText imgSrc={homeImg1}/>
            <PageSection imgSrc={homeImg2}/>
        </div>
    );
};

export default Landing;
