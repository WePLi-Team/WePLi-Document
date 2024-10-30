import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import StatsLayout from '../components/Stats';
import ReviewSection from '../components/Reviews';

import { RainbowButtonLight, RainbowButtonDark } from "../components/RainbowButton";
import Example from '../components/Stats';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.bannerContainer}>
      {/* Background and overlay container */}
      <div className={styles.backgroundOverlay}></div>

      {/* Text content container */}
      <div className="container flex flex-col items-center gap-6" style={{ position: 'relative', zIndex: 10 }}>
        {/* <Heading as="h1" className={styles.wepliTitle}>
          { siteConfig.title }
        </Heading> */}
        <img src='img/img_logo_small.png' style={{ width: '52px', margin: 'auto'}}></img>
        <h2 className={styles.mainTitle}>Share Your Sound,<br/>
        Unite in Harmony</h2>
        <p>
          위플리를 만들어가는 저희의 다양한 경험과 <b>실제 사례</b>를 바탕으로한 <b>문제 해결과정</b>을 공유합니다.<br />
          <b>높은 수준의 코드 품질</b>과 <b>안정적인 서비스</b>를 만들기 위해 노력하고 있습니다.
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
          <Link to="/docs/intro" className="w-full sm:w-auto">
            <RainbowButtonDark className='bg-black rainbow-button text-sm'>Explore Our Docs</RainbowButtonDark>
          </Link>
          <Link to="/blog" className="w-full sm:w-auto">
            <RainbowButtonLight className='bg-black rainbow-button text-sm'>Discover More</RainbowButtonLight>
          </Link>
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
        <ReviewSection />
      </main>
    </Layout>
  );
}