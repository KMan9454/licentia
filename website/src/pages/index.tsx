import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './index.module.css';
import React from 'react';

/** ------- CONFIG -------- */
/** Load every image in /static/img/screenshots */
const req = require.context(
  '@site/static/img/screenshots',
  false,
  /\.(png|jpe?g|webp)$/i
);
const ALL_SHOTS: string[] = req.keys().map((k: string) => req(k).default as string);

/** Main Hero function */
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

/** Tiny icon row for Features */
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
  // Shuffle ONCE for this page load
  const SHOTS = React.useMemo(() => {
    const a = [...ALL_SHOTS];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }, []);

  // Repeat enough times so the track is always wider than the viewport
  const [repeat, setRepeat] = React.useState(2);
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const trackRef = React.useRef<HTMLDivElement | null>(null);

  // Build the repeated list (no mid-loop reshuffle)
  const loop = React.useMemo(
    () => Array.from({ length: repeat }).flatMap(() => SHOTS),
    [SHOTS, repeat]
  );

  // Measure widths and ensure the track is at least 2× the viewport
  const ensureRepeat = React.useCallback(() => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const total = track.scrollWidth || 0; // width of current repeats
    if (!total) return;
    const one = total / repeat;           // width of one sequence

    const needed = Math.max(2, Math.ceil((scroller.clientWidth * 2) / one));
    if (needed !== repeat) setRepeat(needed);
  }, [repeat]);

  React.useEffect(() => {
    const id = requestAnimationFrame(ensureRepeat);
    return () => cancelAnimationFrame(id);
  }, [ensureRepeat, loop.length]);

  React.useEffect(() => {
    const ro = new ResizeObserver(() => ensureRepeat());
    if (trackRef.current) ro.observe(trackRef.current);
    if (scrollerRef.current) ro.observe(scrollerRef.current);
    const onResize = () => ensureRepeat();
    window.addEventListener('resize', onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, [ensureRepeat]);

  // Move exactly 1 sequence per animation loop (seamless)
  const marqueeEnd = `-${100 / repeat}%`;

  return (
    <section className={styles.showcase}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <img src="/img/index-showcase.png" alt="Showcase" className={styles.headingImg} />
        </h2>
      </div>

      <div className={styles.marqueeOuter}>
        <div className={styles.scroller} ref={scrollerRef}>
          <div ref={trackRef} className={styles.marqueeTrack} style={{ ['--marqueeEnd' as any]: marqueeEnd }}>
            {loop.map((src, i) => (
              <img key={`${src}-${i}`} src={src} alt={`screenshot ${i + 1}`} className="zoomable" />
            ))}
          </div>
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
