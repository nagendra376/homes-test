import { useEffect, useId, useRef } from 'react';
import './banner.css';

export default function BannerAnimation({ image, eyebrow, title, description, children }) {
  const banner = useRef(null);
  const headingId = useId();

  useEffect(() => {
    const section = banner.current;
    const scene = section.firstElementChild;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let scrollDistance = 1;
    let sceneHeight = 0;

    function update() {
      frame = 0;
      const offset = Math.max(0, -section.getBoundingClientRect().top);
      const progress = Math.min(offset / scrollDistance, 1);
      const fade = 1 - Math.min(progress / 0.82, 1);

      scene.style.setProperty('--house-rise', `-${Math.round(progress * sceneHeight * 0.68)}px`);
      scene.style.setProperty('--copy-drop', `${Math.round(progress * sceneHeight * 0.14)}px`);
      scene.style.setProperty('--copy-scale', 1 - 0.32 * (1 - fade));
      scene.style.setProperty('--copy-opacity', fade);
      scene.style.setProperty('--drift', `${Math.round(progress * 145)}px`);
      scene.style.setProperty('--mist-rise', `-${Math.round(progress * sceneHeight * 0.70)}px`);
    }

    function scheduleUpdate() {
      if (!motionPreference.matches && !frame) {
        frame = window.requestAnimationFrame(update);
      }
    }

    function measure() {
      sceneHeight = scene.offsetHeight;
      scrollDistance = Math.max(section.offsetHeight - sceneHeight, 1);
      scheduleUpdate();
    }

    const observer = new ResizeObserver(measure);
    observer.observe(section);
    observer.observe(scene);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    motionPreference.addEventListener('change', measure);
    measure();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scheduleUpdate);
      motionPreference.removeEventListener('change', measure);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="banner" ref={banner} aria-labelledby={headingId}>
      <div className="banner__scene">
        <div className="banner__cloud banner__cloud--left" />
        <div className="banner__cloud banner__cloud--right" />
        <div className="banner__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id={headingId}>{title}</h1>
          <p className="banner__description">{description}</p>
          <div className="banner__actions">{children}</div>
        </div>
        <img className="banner__house" src={image} alt="" fetchPriority="high" />
        <div className="banner__mist" />
      </div>
    </section>
  );
}
