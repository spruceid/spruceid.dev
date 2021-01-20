import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Open Source Street Cred',
    imageUrl: 'img/opensource.png',
    description: (
      <>
        Everything about our design, our philosophy, and our aesthetic is committed to open-source and open processes. That includes our documentation, which you can interact with directly on GitHub using the link in the upper right.
      </>
    ),
  },
  {
    title: 'White Labels, Deep Cuts',
    imageUrl: 'img/whitelabel.jpg',
    description: (
      <>
        We don't care if your endusers never learn our name.  We are confident that the right people are listening, and our sound will be known and remembered for the longevity of its samples.
      </>
    ),
  },
  {
    title: 'Community Before Commerce',
    imageUrl: 'img/community.png',
    description: (
      <>
        We work as hard for our communities as we work for our clients. If you have doubts about our priorities or tactics, or if there are projects going on in the community you feel we should know about, feel free to reach out to our Open Source Yenta.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
          <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='docs/didkit'>
              DIDKit
            </Link>
            &nbsp;
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='docs/credible'>
              Credible Wallet
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
