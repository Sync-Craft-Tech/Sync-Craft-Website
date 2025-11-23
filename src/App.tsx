// ===========================================
// Imports
// ===========================================
import React, { useRef, useEffect } from 'react';
import './App.css';

// Sections used in the page
import ContactUsComponents from './components/custom/ContactUs.components';
import ServicesComponent from './components/custom/Services.components';

// The inline animated CPU SVG component
import CncSvg from './components/custom/CncSvg';

// SyncCraft logo (placed inside CPU box)
import logo from "/SyncCraft-logo.svg";


function App() {
  const heroRef = useRef<HTMLDivElement | null>(null);        // hero wrapper (for scroll)
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef({ y: 0 });

  useEffect(() => {
    const wrapper = heroRef.current;
    if (!wrapper) return;

    const tiltMax = 8;
    const translateMax = 18;

    const onMouseMove = (ev: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const relX = (ev.clientX - rect.left) / rect.width;
      const relY = (ev.clientY - rect.top) / rect.height;
      pointerRef.current.x = (relX - 0.5) * 2;
      pointerRef.current.y = (relY - 0.5) * 2;
      scheduleUpdate();
    };
    const onTouchMove = (ev: TouchEvent) => {
      if (!ev.touches || ev.touches.length === 0) return;
      const t = ev.touches[0];
      onMouseMove(t as unknown as MouseEvent);
    };
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const sc = docHeight > 0 ? window.scrollY / docHeight : 0;
      scrollRef.current.y = sc;
      scheduleUpdate();
    };

    const doUpdate = () => {
      rafRef.current = null;
      const px = pointerRef.current.x;
      const py = pointerRef.current.y;
      const sc = scrollRef.current.y;

      const tiltX = (-py * tiltMax).toFixed(2) + 'deg';
      const tiltY = (px * tiltMax).toFixed(2) + 'deg';
      const translateY = ((sc - 0.5) * 2 * translateMax).toFixed(2) + 'px';
      const scale = (1 + Math.abs(px) * 0.02 + Math.abs(py) * 0.02).toFixed(3);

      // Write variables on the hero wrapper so CSS can use them
      wrapper.style.setProperty('--cpu-tilt-x', tiltX);
      wrapper.style.setProperty('--cpu-tilt-y', tiltY);
      wrapper.style.setProperty('--cpu-translate-y', translateY);
      wrapper.style.setProperty('--cpu-scale', scale);
    };

    const scheduleUpdate = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(doUpdate);
    };

    wrapper.addEventListener('mousemove', onMouseMove, { passive: true });
    wrapper.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    return () => {
      wrapper.removeEventListener('mousemove', onMouseMove);
      wrapper.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* ====================== HERO ====================== */}
      <section
        id="Home"
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden"
        ref={heroRef} /* hero wrapper - JS writes CSS variables here */
      >

        {/* Full-hero CncSvg background (fills entire hero) */}
        <div className="absolute z-0 pointer-events-none"
        style={{
          top: "-900px",     // move up/down (+ is down)
          left: "-200px",    // move left/right (+ is right)
          width: "170%",     // scale wider
          height: "140%",    // scale taller
        }}>
          {/* Inline component (preferred so colors/animation remain editable) */}
          <CncSvg primaryColor="#3f5787" size="100%" className="w-full h-full hero-svg" />

          
        </div>

        {/* Foreground hero content */}
        <div className="hero px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">

            {/* LEFT column: Added hero text block (user provided) */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Build Something
                  <span className="text-primary"> Amazing</span> Today
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Create beautiful, modern applications with our powerful
                  platform. Start building your next big idea with confidence
                  and style.
                </p>
              </div>
            </div>

            {/* RIGHT column: Removed CPU box. Instead, keep an empty area (logo is centered over the SVG globally) */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-3xl">
              </div>
            </div>

          </div>
        </div>

        {/* Center the SyncCraft logo in the hero (absolute centered) */}
        <img
        src={logo}
        alt="SyncCraft Logo"
        className="absolute logo-pulse sync-logo"
        style={{
          top: "28%",     // vertical movement
          left: "64%",    // horizontal movement
          width: 180,
          height: 180,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none"
        }}
      />
      </section>

      {/* Services Sections */}
      <ServicesComponent />
      {/* Contact Section */}
      <ContactUsComponents />
    </>
  );
}

export default App;