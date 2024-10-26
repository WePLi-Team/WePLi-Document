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
    <header className={styles.heroSection}>
      {/* Background and overlay container */}
      <div className={styles.heroBackground}>
        {/* Optional: Background image if needed */}
      </div>

      {/* Text content container */}
      <div className={styles.heroContent}>
        <img src='img/img_logo_small.png' alt="Logo" className={styles.logo}></img>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <h1 className={styles.heroTitle}>혼자만의 감상에서 벗어나</h1>
        <h1 className={styles.heroTitle}>함께 만들어가는 음악 여정에 참여하세요</h1>
        <div className={styles.heroButtons}>
          <Link
            className={styles.primaryButton}
            to="#features">
            시작하기
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
