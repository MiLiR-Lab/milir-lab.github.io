import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: (FeatureItem & { link: string })[] = [
  {
    title: '通用工具',
    Svg: require('@site/static/img/tools.svg').default,
    description: (<> </>),
    link: '/docs/home/tools',
  },
  {
    title: '编程语言',
    Svg: require('@site/static/img/program.svg').default,
    description: (<> </>),
    link: '/docs/home/program',
  },
  {
    title: '嵌入式开发',
    Svg: require('@site/static/img/embdev.svg').default,
    description: (<> </>),
    link: '/docs/home/embdev',
  },
  {
    title: '机器人开发',
    Svg: require('@site/static/img/robot.svg').default,
    description: (<> </>),
    link: '/docs/home/robot',
  },
];

function Feature({title, Svg, description, link}: FeatureItem & { link: string }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link to={link}>{title}</Link>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
