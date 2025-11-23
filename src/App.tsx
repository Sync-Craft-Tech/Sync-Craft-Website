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
{/* ====================== HERO ====================== */}
<section
  id="Home"
  className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden"
  ref={heroRef}
>
  {/* Grid Content */}
  <div className="hero px-4 md:px-6 relative z-10">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">

      {/* LEFT column: Hero text */}
      {/* Added z-20 to ensure text sits ON TOP of the circuit lines */}
      <div className="flex flex-col justify-center space-y-4 relative z-20">
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

      {/* RIGHT column: The "Canvas" Container */}
      <div className="flex items-center justify-center relative z-10">
        
        {/* THE MOVABLE STAGE 
           This div handles the 3D Tilt. Everything inside moves together.
           Adjust h-[...] to make the touch area larger/smaller.
        */}
        <div 
          className="relative w-full max-w-[600px] h-[500px]"
          style={{
            transformStyle: 'preserve-3d',
            transform: `
              perspective(1000px)
              rotateX(var(--cpu-tilt-x))
              rotateY(var(--cpu-tilt-y))
              translateY(var(--cpu-translate-y))
              scale(var(--cpu-scale))
            `,
            // Smooths out the movement slightly
            transition: 'transform 0.1s ease-out' 
          }}
        >

          {/* =============================================== */}
          {/* LAYER 1: THE SVG (Background Circuit)           */}
          {/* =============================================== */}
          <div 
            className="absolute pointer-events-none"
            style={{
              // --- CONTROLS: MOVE THE SVG HERE ---
              top: "80%",    // Anchor to vertical center
              left: "50%",   // Anchor to horizontal center
              width: "360%", // Make it larger than the box
              height: "360%",
              
              // Use translate to fine-tune position relative to center
              // Change scale() to zoom the circuit in/out
              transform: "translate(-50%, -50%) scale(1.2)" 
            }}
          >
            <CncSvg
              primaryColor="#3f5787"
              size="100%"
              className="w-full h-full opacity-90"
            />
          </div>

          {/* =============================================== */}
          {/* LAYER 2: THE LOGO (Foreground)                  */}
          {/* =============================================== */}
          <img
            src={logo}
            alt="SyncCraft Logo"
            className="sync-logo logo-pulse absolute z-20"
            style={{
              // --- CONTROLS: MOVE THE LOGO HERE ---
              // 1. Set the size
              width: "180px",
              height: "180px",

              // 2. Position relative to the container
              top: "28%", 
              left: "21%",

              // 3. FINE TUNING:
              // Use translate(Xpx, Ypx) to nudge the logo 
              // until it fits perfectly into the 'socket' of the SVG.
              // Example: translate(-50%, -60%) moves it UP slightly.
              transform: "translate(-50%, -50%)" 
            }}
          />

        </div>
      </div>

    </div>
  </div>
</section>

      {/* Services Sections */}
      <ServicesComponent />
      {/* Contact Section */}
      <ContactUsComponents />
    </>
  );
}

export default App;