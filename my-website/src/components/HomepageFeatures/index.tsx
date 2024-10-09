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
                <h2 className="margin-bottom--lg">STREET DROP ENGINEERING</h2>
                <p className="margin-bottom--md">
                  스트릿 드랍을 만들어가는 백엔드 개발자들의 다양한 경험과 실제 사례를 바탕으로한 문제 해결과정을 공유합니다.
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
              { title: '모니터링', link: '/docs/intro', description: '프로메테우스 및 그라파나를 통해 서비스의 상태 모니터링과 500대 에러 Slack 알림, 슬로우 쿼리 모니터링 등을 통해서, 서비스의 안정성을 높이고 있습니다.' },
              { title: '설계', link: '/docs/intro', description: 'API 서버, Admin 서버, Batch 서버, 알림 서버 등을 분리하여, 서비스의 안정성과 확장성을 높이고 있습니다.' },
              { title: '문서화', link: 'https://test-api.street-drop.com/swagger', description: 'Swagger를 통해 API 문서를 자동화하고 있습니다.' },
              { title: '로그', link: '/docs/intro', description: 'ELK를 통해 서비스의 로그를 수집하고 있습니다.' },
              { title: '성능', link: '/docs/intro', description: 'JMeter를 통해 서비스의 성능을 측정하고 있습니다.' }
            ].map((feature, idx) => (
              <div className="col col--4" key={idx}>
                <div className="margin-top--xl shadow--lg callout_VNYy">
                  <div className="card__header">
                    <h3>{feature.title}</h3>
                  </div>
                  <div className="card__body">
                    <p><Link to={feature.link} className="callout__link">{feature.description}</Link></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
  );
}