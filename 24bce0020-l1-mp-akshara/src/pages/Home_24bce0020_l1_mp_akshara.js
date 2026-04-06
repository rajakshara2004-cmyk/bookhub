import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Page: Home | Student: Akshara Raj | 24BCE0020 | L1
const AKSHARARAJ_24BCE0020_Home = () => {

  const studentName_24BCE0020 = "Akshara Raj";
  const regNo_24BCE0020 = "24BCE0020";
  const projectTitle_24BCE0020 = "BookSwap Hub";
  const collegeName_24BCE0020 = "VIT Vellore";

  // ── Typewriter for "Hello Vitians" ──
  const fullText_24BCE0020 = "Hello Vitians";
  const [displayText_24BCE0020, setDisplayText_24BCE0020] = useState('');
  const [cursorVisible_24BCE0020, setCursorVisible_24BCE0020] = useState(true);
  const [typingDone_24BCE0020, setTypingDone_24BCE0020] = useState(false);

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText_24BCE0020.length) {
        setDisplayText_24BCE0020(fullText_24BCE0020.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTypingDone_24BCE0020(true);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible_24BCE0020(v => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Floating particles
  const particles_24BCE0020 = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 6 + 6,
  }));

  const modules_24BCE0020 = [
    { icon: '📤', title: 'Sell Module', color: '#00e5c8', path: '/sell', features: ['List books for sale', 'Upload book image', 'Set price & condition', 'Sell or put for rent'] },
    { icon: '🛒', title: 'Buy Module', color: '#ff4d8d', path: '/buy', features: ['Browse student listings', 'Filter by subject', 'View seller contact', 'Book condition details'] },
    { icon: '📚', title: 'Rent Module', color: '#a78bfa', path: '/rent', features: ['Rent at low cost', 'Monthly rental pricing', 'Browse rent listings', 'Return after semester'] },
    { icon: '💼', title: 'Portfolio', color: '#f5c842', path: '/portfolio', features: ['Developer profile', 'Skills showcase', 'Project highlights', 'Contact & links'] },
  ];

  const workflow_24BCE0020 = [
    { step: '01', label: 'Student visits BookSwap Hub', icon: '👤' },
    { step: '02', label: 'Chooses Buy / Sell / Rent', icon: '🔀' },
    { step: '03', label: 'Browses listings', icon: '🔍' },
    { step: '04', label: 'Contacts seller', icon: '📞' },
    { step: '05', label: 'Exchange on campus', icon: '🤝' },
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0f',
      }}>

        {/* Animated radial glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,229,200,0.12) 0%, rgba(167,139,250,0.07) 40%, transparent 70%)',
          animation: 'pulse_glow 4s ease-in-out infinite alternate',
          pointerEvents: 'none',
        }} />

        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,229,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,200,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }} />

        {/* Floating particles */}
        {particles_24BCE0020.map(p => (
          <div key={p.id} style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: p.id % 3 === 0 ? '#00e5c8' : p.id % 3 === 1 ? '#a78bfa' : '#f5c842',
            opacity: 0.25,
            animation: `float_particle ${p.duration}s ${p.delay}s ease-in-out infinite alternate`,
            pointerEvents: 'none',
          }} />
        ))}

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 2, padding: '0 24px' }}>

          {/* Badge */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(245,200,66,0.1)',
            border: '1px solid rgba(245,200,66,0.35)',
            borderRadius: '20px',
            padding: '6px 20px',
            fontSize: '0.78rem',
            color: '#f5c842',
            fontFamily: "'Space Mono', monospace",
            letterSpacing: '2px',
            marginBottom: '36px',
            animation: 'fadeSlideUp 0.8s ease forwards',
          }}>
            {regNo_24BCE0020} · {studentName_24BCE0020} · L1 Mini Project
          </div>

          {/* HELLO VITIANS — typewriter with gradient */}
          <h1 style={{
            fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: '28px',
            background: 'linear-gradient(135deg, #00e5c8 0%, #a78bfa 50%, #f5c842 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 40px rgba(0,229,200,0.35))',
            letterSpacing: '-2px',
            minHeight: '1.1em',
          }}>
            {displayText_24BCE0020}
            <span style={{
              opacity: cursorVisible_24BCE0020 ? 1 : 0,
              WebkitTextFillColor: '#00e5c8',
              transition: 'opacity 0.1s',
              marginLeft: '4px',
            }}>|</span>
          </h1>

          {/* Subtitle */}
          <div style={{
            opacity: typingDone_24BCE0020 ? 1 : 0,
            transform: typingDone_24BCE0020 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.7s ease',
          }}>
            <p style={{
              fontSize: 'clamp(1.3rem, 3vw, 2rem)',
              fontWeight: 700,
              color: '#f0f0f5',
              marginBottom: '10px',
              letterSpacing: '1px',
            }}>
              {projectTitle_24BCE0020}
            </p>
            <p style={{
              fontSize: '1.05rem',
              color: '#7a7a9a',
              marginBottom: '44px',
              letterSpacing: '1px',
            }}>
              Stack. Swap. Study Smart.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
              <Link to="/sell" style={{
                padding: '14px 32px',
                background: '#00e5c8',
                color: '#0a0a0f',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 0 24px rgba(0,229,200,0.35)',
                transition: 'all 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(0,229,200,0.55)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(0,229,200,0.35)'; }}
              >
                🗂 Sell Book
              </Link>
              <Link to="/buy" style={{
                padding: '14px 32px',
                background: '#a855f7',
                color: '#fff',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 0 24px rgba(167,139,250,0.35)',
                transition: 'all 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                📖 Buy Books
              </Link>
              <Link to="/rent" style={{
                padding: '14px 32px',
                background: '#f5c842',
                color: '#0a0a0f',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 0 24px rgba(245,200,66,0.35)',
                transition: 'all 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                📚 Rent Books
              </Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/portfolio" style={{
                padding: '13px 32px',
                background: '#1a1a2e',
                color: '#f0f0f5',
                border: '1px solid #3a3a5a',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'flex', alignItems: 'center', gap: '8px',
                transition: 'all 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#f5c842'; e.currentTarget.style.color = '#f5c842'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#3a3a5a'; e.currentTarget.style.color = '#f0f0f5'; }}
              >
                👤 Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CSS Animations injected via style tag ── */}
      <style>{`
        @keyframes pulse_glow {
          from { opacity: 0.7; transform: scale(1); }
          to   { opacity: 1;   transform: scale(1.05); }
        }
        @keyframes float_particle {
          from { transform: translateY(0px) scale(1); }
          to   { transform: translateY(-30px) scale(1.3); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── PROBLEM STATEMENT ── */}
      <section style={{ padding: '80px 0', background: '#12121a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.78rem', color: '#00e5c8', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>// Problem Statement</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '36px' }}>Why {projectTitle_24BCE0020}?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {[
              { icon: '💸', title: 'High Book Costs', desc: 'Engineering textbooks cost ₹500–₹2000 each. Students spend thousands every semester.' },
              { icon: '🗑️', title: 'Books Go to Waste', desc: 'After exams, books collect dust. No platform to pass them to juniors within college.' },
              { icon: '🔗', title: 'No Campus Marketplace', desc: `${collegeName_24BCE0020} lacks a dedicated peer-to-peer book exchange platform.` },
            ].map((item, i) => (
              <div key={i} style={{ background: '#1a1a26', border: '1px solid #2a2a3a', borderRadius: '12px', padding: '26px', transition: 'border-color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#f5c842'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a3a'}
              >
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#7a7a9a', lineHeight: 1.7, fontSize: '0.92rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#1a1a26', border: '1px solid #2a2a3a', borderLeft: '4px solid #00e5c8', borderRadius: '12px', padding: '28px' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: '#00e5c8', letterSpacing: '2px', marginBottom: '12px' }}>// PROBLEM DESCRIPTION</p>
            <p style={{ color: '#b0b0c8', lineHeight: 1.8 }}>
              Students at {collegeName_24BCE0020} face a recurring challenge — the need to purchase expensive textbooks used for only a short duration.
              Senior students are left with books they no longer need, while juniors struggle to afford new ones.
              <strong style={{ color: '#f5c842' }}> {projectTitle_24BCE0020}</strong> bridges this gap with a simple web platform where books can be listed for sale or rent — all within the campus community.
            </p>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.78rem', color: '#a78bfa', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>// Modules & Key Features</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '36px' }}>What's Inside?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {modules_24BCE0020.map((mod, i) => (
              <Link to={mod.path} key={i} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#1a1a26', border: `1px solid ${mod.color}33`, borderRadius: '14px', padding: '26px', transition: 'transform 0.3s, box-shadow 0.3s', height: '100%' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 40px ${mod.color}22`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{mod.icon}</div>
                  <h3 style={{ fontWeight: 700, color: mod.color, marginBottom: '14px' }}>{mod.title}</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    {mod.features.map((f, j) => (
                      <li key={j} style={{ color: '#b0b0c8', fontSize: '0.88rem', display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span style={{ color: mod.color, fontSize: '0.6rem' }}>▶</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <section style={{ padding: '80px 0', background: '#12121a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.78rem', color: '#f5c842', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>// Design Layout</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '36px' }}>Workflow Diagram</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
            {workflow_24BCE0020.map((item, i) => (
              <React.Fragment key={i}>
                <div style={{ background: '#1a1a26', border: '1px solid #2a2a3a', borderRadius: '12px', padding: '18px 22px', textAlign: 'center', minWidth: '130px', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#00e5c8'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a3a'}
                >
                  <div style={{ fontSize: '1.6rem', marginBottom: '8px' }}>{item.icon}</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#f5c842', marginBottom: '5px' }}>STEP {item.step}</div>
                  <div style={{ fontSize: '0.82rem', color: '#b0b0c8', lineHeight: 1.4 }}>{item.label}</div>
                </div>
                {i < workflow_24BCE0020.length - 1 && <div style={{ color: '#3a3a5a', fontSize: '1.4rem' }}>→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '28px 24px', borderTop: '1px solid #2a2a3a', color: '#7a7a9a', fontSize: '0.8rem', fontFamily: "'Space Mono', monospace" }}>
        {projectTitle_24BCE0020} · {studentName_24BCE0020} · {regNo_24BCE0020} · L1 · VIT Vellore
      </footer>
    </div>
  );
};

export default AKSHARARAJ_24BCE0020_Home;
