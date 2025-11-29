import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const socialLinks = [
  {
    logo: 'img/open-source.webp',
    url: 'https://github.com/MiLiR-Lab/milir-lab.github.io',
    label: '开源代码',
    width: 16,
    height: 16
  },
  {
    logo: 'img/contact.webp',
    url: '/contact',
    label: '联系我们',
    width: 16,
    height: 16
  },
  {
    logo: 'img/history.webp',
    url: '/blog',
    label: '网站更新',
    width: 16,
    height: 16
  }
];

function Footer() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.socialLinks}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={styles.socialLink}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <img
                src={useBaseUrl(link.logo)}
                alt={link.label}
                className={styles.logo}
                width={link.width}
                height={link.height}
              />
              <span className={styles.label}>{link.label}</span>
            </a>
          ))}
        </div>

        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} {siteConfig.title}. Built with Docusaurus.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
