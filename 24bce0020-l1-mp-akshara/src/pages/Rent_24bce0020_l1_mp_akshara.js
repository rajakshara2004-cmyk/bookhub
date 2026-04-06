import React, { useState } from 'react';

// Page: Rent | Student: Akshara Raj | 24BCE0020 | L1
const AKSHARARAJ_24BCE0020_Rent = ({ bookListings_24BCE0020 }) => {

  const [activeTab_24BCE0020, setActiveTab_24BCE0020] = useState('browse');

  const dummyRentBooks_24BCE0020 = [
    { id: 'r1', title: 'Signals & Systems', author: 'Oppenheim', pricePerMonth: 60, duration: '1–3 months', condition: 'Good', semester: '4', dept: 'ECE', owner: 'Suriya P (22ECE2089)', icon: '📡', available: true },
    { id: 'r2', title: 'Database Management Systems', author: 'Ramakrishnan', pricePerMonth: 50, duration: '1–4 months', condition: 'Excellent', semester: '4', dept: 'CSE', owner: 'Nithya S (22CSE3156)', icon: '🗄️', available: true },
    { id: 'r3', title: 'Fluid Mechanics', author: 'R.K. Bansal', pricePerMonth: 45, duration: '1–2 months', condition: 'Good', semester: '3', dept: 'MECH', owner: 'Arjun K (23MEC1023)', icon: '💧', available: true },
    { id: 'r4', title: 'Discrete Mathematics', author: 'Kenneth Rosen', pricePerMonth: 65, duration: '1–3 months', condition: 'Excellent', semester: '3', dept: 'CSE', owner: 'Karan M (23CSE4034)', icon: '🔢', available: false },
  ];

  // Merge: user-listed "rent" or "both" books + dummy
  const userRentBooks_24BCE0020 = (bookListings_24BCE0020 || []).filter(
    b => b.listingType === 'rent' || b.listingType === 'both'
  );
  const allRentBooks_24BCE0020 = [...userRentBooks_24BCE0020, ...dummyRentBooks_24BCE0020];

  const rules_24BCE0020 = [
    { icon: '📅', rule: 'Minimum rental period: 1 month' },
    { icon: '💵', rule: 'Pay monthly rental fee directly to the book owner' },
    { icon: '🏫', rule: 'Exchange on VIT campus only' },
    { icon: '🔒', rule: 'Return book in same or better condition' },
    { icon: '❌', rule: 'Lost or damaged books must be compensated at MRP' },
  ];

  const getConditionColor = (c) => {
    if (c === 'Excellent') return '#00e5c8';
    if (c === 'Good') return '#f5c842';
    return '#ff8c42';
  };

  return (
    <div style={{ minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.78rem', color: '#a78bfa', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>
            // Rent Module — 24BCE0020
          </p>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800 }}>
            Rent <span style={{ color: '#a78bfa' }}>Books</span>
          </h1>
          <p style={{ color: '#7a7a9a', marginTop: '10px' }}>
            Need a book just for one semester? Rent at a fraction of the cost.
            {userRentBooks_24BCE0020.length > 0 && (
              <span style={{ marginLeft: '10px', background: '#a78bfa22', color: '#a78bfa', border: '1px solid #a78bfa44', borderRadius: '10px', padding: '2px 10px', fontSize: '0.8rem', fontWeight: 700 }}>
                🆕 {userRentBooks_24BCE0020.length} new listing{userRentBooks_24BCE0020.length > 1 ? 's' : ''}
              </span>
            )}
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '32px', background: '#12121a', borderRadius: '10px', padding: '4px', width: 'fit-content' }}>
          {[{ key: 'browse', label: '📚 Browse Rentals' }, { key: 'rules', label: '📋 Rental Rules' }].map(tab => (
            <button key={tab.key} onClick={() => setActiveTab_24BCE0020(tab.key)} style={{
              padding: '10px 22px', borderRadius: '8px', border: 'none',
              background: activeTab_24BCE0020 === tab.key ? '#a78bfa' : 'transparent',
              color: activeTab_24BCE0020 === tab.key ? '#0a0a0f' : '#7a7a9a',
              fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.2s',
              fontFamily: "'Syne', sans-serif",
            }}>{tab.label}</button>
          ))}
        </div>

        {/* Browse Tab */}
        {activeTab_24BCE0020 === 'browse' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '20px' }}>
            {allRentBooks_24BCE0020.map(book => (
              <div key={book.id} style={{
                background: '#1a1a26',
                border: `1px solid ${!book.available ? '#1a1a1a' : book.isUserListed ? '#a78bfa55' : '#2a2a3a'}`,
                borderRadius: '14px',
                padding: '22px',
                opacity: book.available === false ? 0.52 : 1,
                transition: 'transform 0.3s, border-color 0.3s',
                position: 'relative',
              }}
                onMouseEnter={e => { if (book.available !== false) { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = '#a78bfa88'; }}}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = !book.available ? '#1a1a1a' : book.isUserListed ? '#a78bfa55' : '#2a2a3a'; }}
              >
                {book.isUserListed && book.available !== false && (
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: '#a78bfa', color: '#0a0a0f', borderRadius: '4px', padding: '2px 8px', fontSize: '0.7rem', fontWeight: 700 }}>NEW</div>
                )}
                {book.available === false && (
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: '#ff4d8d33', color: '#ff4d8d', border: '1px solid #ff4d8d55', borderRadius: '4px', padding: '2px 8px', fontSize: '0.72rem', fontWeight: 700 }}>RENTED OUT</div>
                )}

                {book.imagePreview
                  ? <img src={book.imagePreview} alt={book.title} style={{ width: '100%', height: '110px', objectFit: 'cover', borderRadius: '8px', marginBottom: '14px' }} />
                  : <div style={{ fontSize: '2.2rem', marginBottom: '14px' }}>{book.icon}</div>
                }

                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>{book.title}</h3>
                <p style={{ color: '#7a7a9a', fontSize: '0.82rem', marginBottom: '14px' }}>by {book.author}</p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <span style={{ background: '#a78bfa22', color: '#a78bfa', border: '1px solid #a78bfa44', borderRadius: '6px', padding: '5px 12px', fontFamily: "'Space Mono', monospace", fontSize: '0.95rem', fontWeight: 800 }}>
                    ₹{book.pricePerMonth}/mo
                  </span>
                  <span style={{ color: '#7a7a9a', fontSize: '0.8rem' }}>for {book.duration}</span>
                </div>

                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                  <span style={{ background: `${getConditionColor(book.condition)}22`, color: getConditionColor(book.condition), border: `1px solid ${getConditionColor(book.condition)}44`, borderRadius: '4px', padding: '3px 9px', fontSize: '0.75rem', fontWeight: 600 }}>{book.condition}</span>
                  <span style={{ background: '#2a2a3a', color: '#7a7a9a', borderRadius: '4px', padding: '3px 9px', fontSize: '0.75rem' }}>Sem {book.semester}</span>
                  <span style={{ background: '#2a2a3a', color: '#7a7a9a', borderRadius: '4px', padding: '3px 9px', fontSize: '0.75rem' }}>{book.dept}</span>
                </div>

                <div style={{ borderTop: '1px solid #2a2a3a', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '0.78rem', color: '#7a7a9a' }}>🎓 {book.owner || book.seller}</div>
                  {book.available !== false && (
                    <button style={{ background: '#a78bfa', color: '#0a0a0f', border: 'none', borderRadius: '6px', padding: '7px 14px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', transition: 'opacity 0.2s' }}
                      onMouseEnter={e => e.target.style.opacity = '0.82'}
                      onMouseLeave={e => e.target.style.opacity = '1'}
                      onClick={() => alert(`Contact ${book.owner || book.seller} to rent "${book.title}" at ₹${book.pricePerMonth}/month`)}
                    >Rent Now</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Rules Tab */}
        {activeTab_24BCE0020 === 'rules' && (
          <div style={{ maxWidth: '580px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '22px' }}>
              Rental <span style={{ color: '#a78bfa' }}>Guidelines</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {rules_24BCE0020.map((r, i) => (
                <div key={i} style={{ background: '#1a1a26', border: '1px solid #2a2a3a', borderLeft: '3px solid #a78bfa', borderRadius: '10px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ fontSize: '1.3rem' }}>{r.icon}</span>
                  <span style={{ color: '#b0b0c8', fontSize: '0.93rem' }}>{r.rule}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <p style={{ textAlign: 'center', marginTop: '60px', fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: '#3a3a5a' }}>
          24BCE0020_L1_MP_AKSHARA · Rent Module
        </p>
      </div>
    </div>
  );
};

export default AKSHARARAJ_24BCE0020_Rent;
