import React from 'react';

// Page: Portfolio | Student: Akshara Raj | 24BCE0020 | L1
const AKSHARARAJ_24BCE0020_Portfolio = () => {

  const studentName_24BCE0020 = "Akshara Raj";
  const regNo_24BCE0020 = "24BCE0020";
  const lab_24BCE0020 = "L1";
  const dept_24BCE0020 = "B.Tech Computer Science & Engineering";
  const college_24BCE0020 = "VIT Vellore";
  const year_24BCE0020 = "2nd Year";

  // TODO: Replace with your actual portfolio URL when ready
  const portfolioURL_24BCE0020 = "https://portfolio-znfi.onrender.com";
  
  const skills_24BCE0020 = [
    { label: 'React.js', level: 70, color: '#00e5c8' },
    { label: 'JavaScript', level: 75, color: '#f5c842' },
    { label: 'HTML & CSS', level: 85, color: '#ff4d8d' },
    { label: 'Python', level: 65, color: '#a78bfa' },
    { label: 'C Programming', level: 72, color: '#f5c842' },
    { label: 'SQL / MySQL', level: 60, color: '#00e5c8' },
  ];

  const projects_24BCE0020 = [
    {
      title: 'BookSwap Hub',
      desc: 'A peer-to-peer campus book exchange platform for VIT students to buy, sell, and rent textbooks.',
      tech: ['React.js', 'JavaScript', 'CSS'],
      icon: '📚',
      color: '#f5c842',
    },
    {
      title: 'Portfolio Website',
      desc: 'Personal developer portfolio showcasing projects, skills, and contact information.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: '💼',
      color: '#00e5c8',
    },
    {
      title: 'Student Management System',
      desc: 'A database-driven CRUD application for managing student records and marks.',
      tech: ['Python', 'MySQL', 'Tkinter'],
      icon: '🎓',
      color: '#a78bfa',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #12121a 0%, #1a1a26 100%)',
          border: '1px solid #2a2a3a',
          borderRadius: '20px',
          padding: '48px 40px',
          marginBottom: '48px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-40px', right: '-40px',
            width: '200px', height: '200px',
            background: 'radial-gradient(circle, rgba(245,200,66,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }} />

          <div style={{
            width: '80px', height: '80px',
            background: 'linear-gradient(135deg, #f5c842, #00e5c8)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem',
            marginBottom: '20px',
          }}>👩‍💻</div>

          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '8px' }}>
            {studentName_24BCE0020}
          </h1>
          <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '16px', fontSize: '1rem' }}>
            {dept_24BCE0020}
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '28px' }}>
            {[
              { label: 'Reg No', value: regNo_24BCE0020 },
              { label: 'Lab', value: lab_24BCE0020 },
              { label: 'Year', value: year_24BCE0020 },
              { label: 'College', value: college_24BCE0020 },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.7rem', color: '#7a7a9a', fontFamily: "'Space Mono', monospace", letterSpacing: '1px' }}>
                  {item.label.toUpperCase()}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Portfolio Link */}
          <a
            href={portfolioURL_24BCE0020}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 28px',
              background: '#f5c842',
              color: '#0a0a0f',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.95rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(245,200,66,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            🌐 View My Portfolio
            <span style={{ fontSize: '1.1rem' }}>↗</span>
          </a>
          
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.75rem', color: '#00e5c8',
            letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px',
          }}>// Technical Skills</p>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '28px' }}>
            My <span style={{ color: '#00e5c8' }}>Skillset</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {skills_24BCE0020.map((skill, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{skill.label}</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", color: skill.color, fontSize: '0.85rem' }}>
                    {skill.level}%
                  </span>
                </div>
                <div style={{ background: '#2a2a3a', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    background: skill.color,
                    borderRadius: '4px',
                    transition: 'width 1s ease',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.75rem', color: '#a78bfa',
            letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px',
          }}>// Projects</p>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '28px' }}>
            My <span style={{ color: '#a78bfa' }}>Work</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {projects_24BCE0020.map((proj, i) => (
              <div key={i} style={{
                background: '#1a1a26',
                border: '1px solid #2a2a3a',
                borderLeft: `4px solid ${proj.color}`,
                borderRadius: '12px',
                padding: '24px',
                display: 'flex', gap: '20px', alignItems: 'flex-start',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateX(6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <div style={{ fontSize: '2rem' }}>{proj.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: '6px' }}>{proj.title}</h3>
                  <p style={{ color: '#7a7a9a', fontSize: '0.9rem', marginBottom: '12px', lineHeight: 1.6 }}>{proj.desc}</p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {proj.tech.map((t, j) => (
                      <span key={j} style={{
                        background: `${proj.color}22`,
                        color: proj.color,
                        border: `1px solid ${proj.color}44`,
                        borderRadius: '4px', padding: '3px 10px', fontSize: '0.78rem', fontWeight: 600,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p style={{
          textAlign: 'center', marginTop: '60px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.75rem', color: '#3a3a5a',
        }}>
          24BCE0020_L1_MP_AKSHARA · Portfolio Page · {studentName_24BCE0020}
        </p>
      </div>
    </div>
  );
};

export default AKSHARARAJ_24BCE0020_Portfolio;
