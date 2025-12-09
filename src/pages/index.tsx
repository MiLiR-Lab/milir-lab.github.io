// ...existing code...
import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

// ...existing code...
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>
        <section className={styles.aboutSection}>
          <div className={styles.aboutContainer}>
            <h2></h2>
            <p>

            </p>
          </div>
        </section>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
// ...existing code...