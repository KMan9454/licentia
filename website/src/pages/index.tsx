import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './index.module.css';
import React from 'react';

/** ------- CONFIG -------- */
// how many screenshots exist (s01.png ... sNN.png)
const SCREENSHOT_COUNT = 35;
const SHOT_PREFIX = '/img/screenshots/s';
const SHOT_EXT = '.png';

function buildShots(n: number): string[] {
  const pad = (i: number) => i.toString().padStart(2, '0');
  return Array.from({ length: n }, (_, i) => `${SHOT_PREFIX}${pad(i + 1)}${SHOT_EXT}`);
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Make a new order that does NOT start with the previous last item */
function reshuffleNoImmediateRepeat(all: string[], prev: string[] | null): string[] {
  let next = shuffle(all);
  if (prev && next.length > 0 && prev[prev.length - 1] === next[0]) {
    // rotate so the first differs
    next.push(next.shift() as string);
  }
  return next;
}

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.hero}>
      {/* background */}
      <div className={styles.heroBg} />
      <div className={styles.heroOverlay} />

      <div className={clsx('container', styles.heroInner)}>
        <img
          className={styles.heroLogo}
          src="/img/licentia-social-card.png"
          alt={`${siteConfig.title} logo`}
          width={520}
          height={260}
        />

        <p className={styles.tagline}>
          Licentia NEXT: Unleash Power, Indulge Desire, Leave Heads Rolling.
        </p>

        <div className={styles.badges}>
          <span className={clsx('badge', styles.badge)}>Wabbajack install</span>
          <span className={clsx('badge', styles.badge)}>~2000 mods</span>
          <span className={clsx('badge', styles.badge)}>LotD included</span>
          <span className={clsx('badge', styles.badge)}>OStim ready</span>
        </div>

        <div className={styles.ctaRow}>
          <a className={clsx('button button--secondary button--lg', styles.cta)}
            href="/welcome">
            Install
          </a>
          <a className={clsx('button button--outline button--lg', styles.ctaOutline)}
            href="/how-to-update">
            Update
          </a>
          <a className={clsx('button button--link button--lg', styles.ctaLink)}
            href="/changelog">
            Changelog
          </a>
        </div>
      </div>
    </section>
  );
}

/** Tiny icon row instead of image columns */
function FeatureIcons() {
  return (
    <section className={styles.iconsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Features</h2>
        <div className={styles.iconRow}>
          <div className={styles.iconCard}>
            <span className={styles.iconGlyph} aria-hidden>⚔️</span>
            <div className={styles.iconTitle}>Combat</div>
            <div className={styles.iconText}>Timing, stamina, smarter AI.</div>
          </div>
          <div className={styles.iconCard}>
            <span className={styles.iconGlyph} aria-hidden>🧭</span>
            <div className={styles.iconTitle}>Exploration</div>
            <div className={styles.iconText}>New quests, dungeons, encounters.</div>
          </div>
          <div className={styles.iconCard}>
            <span className={styles.iconGlyph} aria-hidden>🧩</span>
            <div className={styles.iconTitle}>Variety</div>
            <div className={styles.iconText}>LotD, collections, curated content.</div>
          </div>
          <div className={styles.iconCard}>
            <span className={styles.iconGlyph} aria-hidden>🔞</span>
            <div className={styles.iconTitle}>Adult systems</div>
            <div className={styles.iconText}>Toggleable NSFW integrations.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const all = React.useMemo(() => buildShots(SCREENSHOT_COUNT), []);
  const [queue, setQueue] = React.useState<string[]>(() => reshuffleNoImmediateRepeat(all, null));

  /** When one full marquee cycle finishes, reshuffle for the next pass. */
  const onIter = React.useCallback(() => {
    setQueue(prev => reshuffleNoImmediateRepeat(all, prev));
  }, [all]);

  // build a seamless track by duplicating the queue
  const loop = React.useMemo(() => [...queue, ...queue], [queue]);

  return (
    <section className={styles.showcase}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Showcase</h2>
      </div>
      <div className={styles.marqueeOuter}>
        <div
          className={styles.marqueeTrack}
          onAnimationIteration={onIter}
        >
          {loop.map((src, i) => (
            <img key={`${src}-${i}`} src={src} alt={`screenshot ${i + 1}`} className={styles.marqueeImg} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Skyrim modlist: Licentia NEXT — power, variety, adult systems, and smooth onboarding.">
      <Hero />
      <main>
        <FeatureIcons />
        <Showcase />
      </main>
    </Layout>
  );
}
