import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.bannerContainer}>
      {/* Background and overlay container */}
      <div className={styles.backgroundOverlay}></div>

      {/* Text content container */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <Heading as="h1" className={styles.wepliTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.wepliSubscription}>{siteConfig.tagline}</p>
        <h2 className={styles.mainTitle}>위플리 개발간</h2>
        <h2 className={styles.mainTitle}>다양한 경험을 공유합니다.</h2>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
