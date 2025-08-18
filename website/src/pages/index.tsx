import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './index.module.css';
import React from 'react';
import mediumZoom from 'medium-zoom';

/** ------- CONFIG -------- */
/** Load every image in /static/img/screenshots */
const req = require.context(
  '@site/static/img/screenshots',
  false,
  /\.(png|jpe?g|webp)$/i
);
const ALL_SHOTS: string[] = req.keys().map((k: string) => req(k).default as string);

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
  if (!prev) return shuffle(all);
  let next = shuffle(all);
  if (prev.length && next.length && prev[prev.length - 1] === next[0]) {
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
          <i>"Unleash Power, Indulge Desire, Leave Heads Rolling"</i>
        </p>

        <div className={styles.badges}>
          <span className={clsx('badge', styles.badge)}>Wabbajack install</span>
          <span className={clsx('badge', styles.badge)}>~2000 mods</span>
          <span className={clsx('badge', styles.badge)}>LotD included</span>
          <span className={clsx('badge', styles.badge)}>OStim ready</span>
        </div>

        <div className={styles.ctaRow}>
          <a className={clsx('button button--primary button--lg', styles.ctaSolid)} href="/welcome">
            Install
          </a>
          <a className={clsx('button button--primary button--lg', styles.ctaSolid)} href="/how-to-update">
            Update
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
        <h2 className={styles.sectionTitle}><img src="/img/index-features.png" alt="Features" className={styles.headingImg} /></h2>
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
  const all = React.useMemo(() => ALL_SHOTS, []);
  const [queue, setQueue] = React.useState<string[]>(() => reshuffleNoImmediateRepeat(all, null));
  const [paused, setPaused] = React.useState(false);

  // medium-zoom on images
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    if (!trackRef.current) return;
    const zoom = mediumZoom(trackRef.current.querySelectorAll('img'), {
      margin: 24,
      background: getComputedStyle(document.documentElement)
        .getPropertyValue('--zoom-backdrop')
        .trim() || 'rgba(0,0,0,.7)',
    });
    return () => zoom.detach();
  }, []);

  // reshuffle on every full animation loop
  const onIter = React.useCallback(() => {
    setQueue(prev => reshuffleNoImmediateRepeat(all, prev));
  }, [all]);

  // manual controls
  const scrollBy = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;
    const outer = trackRef.current.parentElement!;
    outer.scrollBy({ left: (dir === 'left' ? -1 : 1) * outer.clientWidth * 0.6, behavior: 'smooth' });
  };

  const loop = React.useMemo(() => [...queue, ...queue], [queue]);

  return (
    <section className={styles.showcase}>
      <div className="container">
        <h2 className={styles.sectionTitle}><img src="/img/index-showcase.png" alt="Showcase" className={styles.headingImg} /></h2>
      </div>

      <div
        className={styles.marqueeOuter}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setTimeout(() => setPaused(false), 100)}
      >
        <button
          type="button"
          aria-label="Scroll left"
          className={clsx(styles.navBtn, styles.navLeft)}
          onClick={() => scrollBy('left')}
        />
        <div
          className={clsx(styles.marqueeTrack, paused && styles.paused)}
          onAnimationIteration={onIter}
          ref={trackRef}
        >
          {loop.map((src, i) => (
            <img key={`${src}-${i}`} src={src} alt={`screenshot ${i + 1}`} className="zoomable" />
          ))}
        </div>
        <button
          type="button"
          aria-label="Scroll right"
          className={clsx(styles.navBtn, styles.navRight)}
          onClick={() => scrollBy('right')}
        />
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
