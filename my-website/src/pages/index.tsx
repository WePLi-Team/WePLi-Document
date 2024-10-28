import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { RainbowButtonLight, RainbowButtonDark } from "../components/RainbowButton";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.bannerContainer}>
      {/* Background and overlay container */}
      <div className={styles.backgroundOverlay}></div>

      {/* Text content container */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* <Heading as="h1" className={styles.wepliTitle}>
          { siteConfig.title }
        </Heading> */}
        <img src='img/img_logo_small.png' style={{ width: '52px', margin: 'auto'}}></img>
        <h2 className={styles.mainTitle}>Share Your Sound,<br/>
        Unite in Harmony</h2>
        <p>위플리를 만들어가는 저희의 다양한 경험과 실제 사례를 바탕으로한 문제 해결과정을 공유합니다.<br/>
        높은 수준의 코드 품질과 안정적인 서비스를 만들기 위해 노력하고 있습니다.</p>

        <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
          <RainbowButtonDark className='bg-black rainbow-button text-sm'>Get Unlimited Access</RainbowButtonDark>
          <RainbowButtonLight className='bg-black rainbow-button text-sm'>Get Unlimited Access</RainbowButtonLight>
        </div>
      </div>
    </header>
  );
}



export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`} // 웹 페이지 탭 제목 부분
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
