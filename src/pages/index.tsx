import { useState } from 'react';
import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

// 图片列表 - 替换成你的图片路径和对应链接
const imageItems = [
  {
    src: '/img/contact.webp',
    alt: 'Contact',
    link: '/contact'  // 替换成实际链接
  },
  {
    src: '/img/history.webp',
    alt: 'History',
    link: '/history'  // 替换成实际链接
  },
  {
    src: '/img/open-source.webp',
    alt: 'Open Source',
    link: '/open-source'  // 替换成实际链接
  },
  {
    src: '/img/mind.webp',
    alt: 'Mind',
    link: '/mind'  // 替换成实际链接
  },
  {
    src: '/img/research.webp',
    alt: 'Research',
    link: '/research'  // 替换成实际链接
  }
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? imageItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === imageItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = imageItems[currentIndex];

  return (
    <div className={styles.carousel}>
      <button className={styles.arrowButton} onClick={goToPrevious}>
        &lt;
      </button>

      <a
        href={currentItem.link}
        className={styles.imageLink}
      >
        <img
          src={currentItem.src}
          alt={currentItem.alt}
          className={styles.carouselImage}
        />
      </a>

      <button className={styles.arrowButton} onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <div className={styles.carouselContainer}>
        <ImageCarousel />
      </div>
      <main>
        {/* 这里可以放其他主要内容 */}
      </main>
      <HomepageFeatures />
    </Layout>
  );
}
