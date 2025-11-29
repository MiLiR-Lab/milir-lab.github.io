// src/components/HomepageFeatures/index.tsx
import React, { useState } from 'react';
import clsx from 'clsx';
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
    link: 'https://github.com/MiLiR-Lab/milir-lab.github.io'
  },
  {
    title: '灵感（Light）',
    image: '/img/light.webp',
    description: '捕捉灵感瞬间，点亮创意火花',
    link: '/contact'
  },
  {
    title: '研究（Research）',
    image: '/img/research.webp',
    description: '深入研究探索，推动知识边界',
    link: '/blog'
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

// Remove the JSX.Element return type annotation
export default function HomepageFeatures() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.dropdownContainer}>
          <button
            className={styles.dropdownButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="features-dropdown"
          >
            关于我们
            <span className={clsx(styles.arrow, { [styles.arrowOpen]: isOpen })}>▼</span>
          </button>
          <p className={styles.subtitle}>MiLiR-Lab 是一个开放的网站，旨在共享和记录学习和实践的成果。</p>

          {isOpen && (
            <div
              id="features-dropdown"
              className={styles.featuresGrid}
            >
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
