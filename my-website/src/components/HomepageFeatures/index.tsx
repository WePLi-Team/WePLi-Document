import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Home(): JSX.Element {
  return (
      <main>
        <section className={`padding-vert--xl container ${styles.heroSection}`}>
          <div className="row margin-bottom--sm">
            <div className="col col--8">
              <div>
                <h2 className={`${styles.hero__title} margin-bottom--lg`}>WEPLI ENGINEERING</h2>
                <p className="margin-bottom--md">
                  위플리를 만들어가는 저희의 다양한 경험과 실제 사례를 바탕으로한 문제 해결과정을 공유합니다.
                  높은 수준의 코드 품질과 안정적인 서비스를 만들기 위해 노력하고 있습니다.
                </p>
                <p className="margin-bottom--sm">
                  비즈니스, 모니터링, 설계, 문서화, 로그, 성능 등 다양한 주제를 다루고 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              { title: '비즈니스', link: '/docs/intro', description: '유저 행동 로깅과 어드민 페이지를 통해, 사용자의 행동을 분석하고, 통계를 내며 서비스를 개선해나가고 있습니다.' },
              { title: '모니터링', link: '/docs/intro', description: 'Firebase Crashlytics를 사용하여 앱의 크래시 및 버그를 모니터하고 있습니다. 또한 사용자의 피드백을 신속하게 수집하고 대응하기 위해 Google Play Console의 리뷰를 모니터링합니다.' },
              { title: '설계', link: '/docs/intro', description: 'API 서버, Admin 서버, Batch 서버, 알림 서버 등을 분리하여, 서비스의 안정성과 확장성을 높이고 있습니다.' },
              { title: '문서화', link: '/docs/intro', description: 'Kotlin Dokka를 사용하여 코드 문서화를 자동화하고, 개발자 간의 효율적인 소통을 지원하고 있습니다.' },
              { title: '로그', link: '/docs/intro', description: 'Android 로그 시스템을 활용하여 앱의 성능 및 사용자 이벤트를 로깅합니다. 추가적으로 ELK 스택을 통해 서버와 앱 로그를 통합 관리하고 있습니다.' },
              { title: '성능', link: '/docs/intro', description: 'Android Profiler와 LeakCanary를 통해 앱의 메모리 사용량과 성능을 모니터링하며, 이를 기반으로 최적화 작업을 수행하고 있습니다.' }
            ].map((feature, idx) => (
              <div className="col col--4" key={idx}>
                <div className={`margin-top--xl shadow--lg ${styles.callout}`}>
                  <div className="card__header">
                    <h3>{feature.title}</h3>
                  </div>
                  <div className="card__body">
                    <p><Link to={feature.link} className={styles.callout__link}>{feature.description}</Link></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
  );
}