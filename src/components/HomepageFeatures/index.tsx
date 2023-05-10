import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '實戰學習',
    Img: require('@site/static/img/computer.png').default,
    description: (
      <>
        提供雲端平台讓學生與社群成員親身測試與部署軟體基礎設施相關服務。
      </>
    ),
  },
  {
    title: '全方位支援',
    Img: require('@site/static/img/cloud-server.png').default,
    description: (
      <>
        涵蓋多種服務，如虛擬機器、儲存、網路、負載平衡等，滿足不同需求。
      </>
    ),
  },
  {
    title: '開源共享',
    Img: require('@site/static/img/care.png').default,
    description: (
      <>
        資源提供給開源社群，支持相關服務建設與工作坊活動。
      </>
    ),
  },
];

function Feature({title, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
