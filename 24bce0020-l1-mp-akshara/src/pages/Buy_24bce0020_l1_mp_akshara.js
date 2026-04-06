import React, { useState } from 'react';

// Page: Buy | Student: Akshara Raj | 24BCE0020 | L1
const AKSHARARAJ_24BCE0020_Buy = ({ bookListings_24BCE0020 }) => {

  const [filter_24BCE0020, setFilter_24BCE0020] = useState('All');

  // Default dummy listings
  const dummyBooks_24BCE0020 = [
    { id: 'd1', title: 'Engineering Mathematics – I', author: 'B.S. Grewal', price: 180, condition: 'Good', semester: '1', dept: 'Maths', seller: 'Rohit V (22BCE1045)', icon: '📐', listingType: 'sell' },
    { id: 'd2', title: 'Basic Electrical Engineering', author: 'U.A. Bakshi', price: 150, condition: 'Excellent', semester: '1', dept: 'ECE', seller: 'Divya K (22ECE2011)', icon: '⚡', listingType: 'sell' },
    { id: 'd3', title: 'Programming in C', author: 'E. Balagurusamy', price: 120, condition: 'Good', semester: '2', dept: 'CSE', seller: 'Arun M (23CSE3078)', icon: '💻', listingType: 'sell' },
    { id: 'd4', title: 'Data Structures & Algorithms', author: 'Mark Allen Weiss', price: 350, condition: 'Excellent', semester: '3', dept: 'CSE', seller: 'Priya N (22CSE1099)', icon: '🧮', listingType: 'sell' },
    { id: 'd5', title: 'Digital Electronics', author: 'Morris Mano', price: 220, condition: 'Good', semester: '3', dept: 'ECE', seller: 'Siddharth R (22ECE4056)', icon: '🔌', listingType: 'sell' },
    { id: 'd6', title: 'OOP with Java', author: 'Herbert Schildt', price: 280, condition: 'Excellent', semester: '4', dept: 'CSE', seller: 'Vignesh A (21CSE5012)', icon: '☕', listingType: 'sell' },
  ];

  // Merge: user-listed "sell" or "both" books + dummy
  const userSellBooks_24BCE0020 = (bookListings_24BCE0020 || []).filter(
    b => b.listingType === 'sell' || b.listingType === 'both'
  );
  const allBooks_24BCE0020 = [...userSellBooks_24BCE0020, ...dummyBooks_24BCE0020];

  const filters_24BCE0020 = ['All', 'CSE', 'ECE', 'Maths', 'Physics', 'Chemistry', 'MECH'];

  const filtered_24BCE0020 = filter_24BCE0020 === 'All'
    ? allBooks_24BCE0020
    : allBooks_24BCE0020.filter(b => b.dept === filter_24BCE0020);

  const getConditionColor = (c) => {
    if (c === 'Excellent') return '#00e5c8';
    if (c === 'Good') return '#f5c842';
    return '#ff8c42';
  };

  return (
    <div style={{ minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.78rem', color: '#ff4d8d', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>
            // Buy Module — 24BCE0020
          </p>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800 }}>
            Buy <span style={{ color: '#ff4d8d' }}>Books</span>
          </h1>
          <p style={{ color: '#7a7a9a', marginTop: '10px' }}>
            Browse books listed by VIT students. Pay less, learn more.
            {userSellBooks_24BCE0020.length > 0 && (
              <span style={{ marginLeft: '10px', background: '#ff4d8d22', color: '#ff4d8d', border: '1px solid #ff4d8d44', borderRadius: '10px', padding: '2px 10px', fontSize: '0.8rem', fontWeight: 700 }}>
                🆕 {userSellBooks_24BCE0020.length} new listing{userSellBooks_24BCE0020.length > 1 ? 's' : ''}
              </span>
            )}
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {filters_24BCE0020.map(f => (
            <button key={f} onClick={() => setFilter_24BCE0020(f)} style={{
              padding: '8px 20px', borderRadius: '20px', border: '1px solid',
              borderColor: filter_24BCE0020 === f ? '#ff4d8d' : '#2a2a3a',
              background: filter_24BCE0020 === f ? '#ff4d8d' : 'transparent',
              color: filter_24BCE0020 === f ? '#0a0a0f' : '#b0b0c8',
              fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
            }}>{f}</button>
          ))}
        </div>

        {/* Book Grid */}
        {filtered_24BCE0020.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px', color: '#7a7a9a' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📭</div>
            <p>No books found for this filter.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '22px' }}>
            {filtered_24BCE0020.map(book => (
              <div key={book.id} style={{
                background: '#1a1a26',
                border: `1px solid ${book.isUserListed ? '#ff4d8d55' : '#2a2a3a'}`,
                borderRadius: '14px',
                padding: '22px',
                transition: 'transform 0.3s, border-color 0.3s',
                position: 'relative',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = '#ff4d8d88'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = book.isUserListed ? '#ff4d8d55' : '#2a2a3a'; }}
              >
                {book.isUserListed && (
                  <div style={{
                    position: 'absolute', top: '12px', right: '12px',
                    background: '#ff4d8d', color: '#fff',
                    borderRadius: '4px', padding: '2px 8px', fontSize: '0.7rem', fontWeight: 700,
                  }}>NEW</div>
                )}

                {/* Image or icon */}
                {book.imagePreview
                  ? <img src={book.imagePreview} alt={book.title} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '14px' }} />
                  : <div style={{ fontSize: '2.4rem', marginBottom: '14px' }}>{book.icon}</div>
                }

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.3, maxWidth: '175px' }}>{book.title}</h3>
                  <span style={{ background: '#ff4d8d22', color: '#ff4d8d', border: '1px solid #ff4d8d44', borderRadius: '6px', padding: '4px 10px', fontFamily: "'Space Mono', monospace", fontSize: '0.95rem', fontWeight: 800, whiteSpace: 'nowrap' }}>
                    ₹{book.price}
                  </span>
                </div>

                <p style={{ color: '#7a7a9a', fontSize: '0.82rem', marginBottom: '14px' }}>by {book.author}</p>

                {book.mrp > 0 && (
                  <p style={{ fontSize: '0.78rem', color: '#7a7a9a', marginBottom: '10px' }}>
                    MRP: <span style={{ textDecoration: 'line-through' }}>₹{book.mrp}</span>
                    <span style={{ color: '#00e5c8', marginLeft: '8px', fontWeight: 700 }}>
                      Save ₹{book.mrp - book.price}
                    </span>
                  </p>
                )}

                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                  <span style={{ background: `${getConditionColor(book.condition)}22`, color: getConditionColor(book.condition), border: `1px solid ${getConditionColor(book.condition)}44`, borderRadius: '4px', padding: '3px 9px', fontSize: '0.75rem', fontWeight: 600 }}>{book.condition}</span>
                  <span style={{ background: '#2a2a3a', color: '#7a7a9a', borderRadius: '4px', padding: '3px 9px', fontSize: '0.75rem' }}>Sem {book.semester}</span>
                  <span style={{ background: '#2a2a3a', color: '#7a7a9a', borderRadius: '4px', padding: '3px 9px', fontSize: '0.75rem' }}>{book.dept}</span>
                </div>

                <div style={{ borderTop: '1px solid #2a2a3a', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '0.78rem', color: '#7a7a9a' }}>🎓 {book.seller}</div>
                  <button style={{ background: '#ff4d8d', color: '#fff', border: 'none', borderRadius: '6px', padding: '7px 14px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.target.style.opacity = '0.82'}
                    onMouseLeave={e => e.target.style.opacity = '1'}
                    onClick={() => alert(`Contact ${book.seller} for "${book.title}"`)}
                  >Contact</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <p style={{ textAlign: 'center', marginTop: '60px', fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: '#3a3a5a' }}>
          24BCE0020_L1_MP_AKSHARA · Buy Module
        </p>
      </div>
    </div>
  );
};

export default AKSHARARAJ_24BCE0020_Buy;
