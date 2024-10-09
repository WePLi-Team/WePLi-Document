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
        <h2 className={styles.mainTitle}>혼자만의 감상에서 벗어나</h2>
        <h2 className={styles.mainTitle}>함께 만들어가는 음악 여정에 참여하세요</h2>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`} // 웹 페이지 탭 제목 부분
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
