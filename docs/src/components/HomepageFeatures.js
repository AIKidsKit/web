import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Learn Concepts',
    Svg: require('../../static/img/learn.svg').default,
    description: (
      <>
        Explore <b><a href="/docs/learn">AI Concepts </a></b> using fun characters and 
        visual assets! Engage kids' attention and
        have meaningful conversations.
      </>
    ),
  },
  {
    title: 'Train Models',
    Svg: require('../../static/img/train.svg').default,
    description: (
      <>
        Use <b><a href="/docs/lobeai">Lobe.AI </a></b>
        to build your own image classifier - with no code! 
        Export your model, integrate it in apps, test it with real users!
      </>
    ),
  },
  {
    title: 'Build Apps',
    Svg: require('../../static/img/build.svg').default,
    description: (
      <>
        Help kids bring models to life with block-based programs in
        <b><a href="/docs/makecode"> Make Code</a></b> - 
        or try out our templates for mobile and web apps.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
