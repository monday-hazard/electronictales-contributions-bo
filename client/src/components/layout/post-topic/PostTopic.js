import React from 'react';
import Card from '../../elements/card/Card';
import CardContent from '../../elements/card/CardContent';
import Hero from '../../elements/hero/Hero';

import './PostTopic.css';

const PostTopic = () => {
    const titleText = 'Proposer un sujet';
    const subtitleText =
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, quidem accusamus totam incidunt quod a labore rerum rem nihil deleniti!';
    const introTLTA =
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit.';
    const introRegular =
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit.';
    return (
        <div className="post-topic">
            <Hero titleText={titleText} subtitleText={subtitleText} />
            <section className="topic-info">
                <Card isSquare title="TLTA">
                    <CardContent text={introTLTA} />
                </Card>
                <Card isSquare title="Regular">
                    <CardContent text={introRegular} />
                </Card>
            </section>
        </div>
    );
};

export default PostTopic;
