import React from 'react';
import styles from './styles.module.css';
import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  image: string;
  description: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '思考（Mind）',
    image: '/img/mind.webp',
    description: '探索思维的深度，激发创新灵感',
    link: ''
  },
  {
    title: '灵感（Light）',
    image: '/img/light.webp',
    description: '捕捉灵感瞬间，点亮创意火花',
    link: ''
  },
  {
    title: '研究（Research）',
    image: '/img/research.webp',
    description: '深入研究探索，推动知识边界',
    link: ''
  },
];

function Feature({ title, image, description, link }: FeatureItem) {
  return (
    <a
      href={link}
      className={styles.featureItem}
      target={link.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
    >
      <div className={styles.featureImageContainer}>
        <img
          src={image}
          alt={title}
          className={styles.featureImage}
          loading="lazy"
        />
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        {description && <p className={styles.featureDescription}>{description}</p>}
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.dropdownContainer}>
          <p className={styles.subtitle}>MiLiR-Lab 是一个开放的网站，旨在共享和记录学习和实践的成果。</p>

          <div
            id="features-dropdown"
            className={styles.featuresGrid}
          >
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
