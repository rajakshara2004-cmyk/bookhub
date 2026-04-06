import React, { useState } from 'react';

// Page: Sell | Student: Akshara Raj | 24BCE0020 | L1
const AKSHARARAJ_24BCE0020_Sell = ({ addBook_24BCE0020, bookListings_24BCE0020 }) => {

  const initialForm_24BCE0020 = {
    bookName: '',
    author: '',
    mrp: '',
    sellingPrice: '',
    rentPerMonth: '',
    condition: 'Good',
    semester: '',
    dept: '',
    sellerName: '',
    listingType: 'sell', // 'sell' | 'rent' | 'both'
    imagePreview: null,
  };

  const [form_24BCE0020, setForm_24BCE0020] = useState(initialForm_24BCE0020);
  const [submitted_24BCE0020, setSubmitted_24BCE0020] = useState(false);
  const [errors_24BCE0020, setErrors_24BCE0020] = useState({});

  const deptIcons_24BCE0020 = {
    CSE: '💻', ECE: '⚡', MECH: '⚙️', CIVIL: '🏗️',
    Maths: '📐', Physics: '🔭', Chemistry: '🧪', Other: '📖',
  };

  const handleChange_24BCE0020 = (e) => {
    const { name, value } = e.target;
    setForm_24BCE0020(prev => ({ ...prev, [name]: value }));
    setErrors_24BCE0020(prev => ({ ...prev, [name]: '' }));
  };

  const handleImage_24BCE0020 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm_24BCE0020(prev => ({ ...prev, imagePreview: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validate_24BCE0020 = () => {
    const e = {};
    if (!form_24BCE0020.bookName.trim()) e.bookName = 'Book name is required';
    if (!form_24BCE0020.author.trim()) e.author = 'Author name is required';
    if (!form_24BCE0020.sellerName.trim()) e.sellerName = 'Your name is required';
    if (!form_24BCE0020.dept) e.dept = 'Select department';
    if (!form_24BCE0020.semester.trim()) e.semester = 'Semester is required';
    if ((form_24BCE0020.listingType === 'sell' || form_24BCE0020.listingType === 'both') && !form_24BCE0020.sellingPrice)
      e.sellingPrice = 'Selling price is required';
    if ((form_24BCE0020.listingType === 'rent' || form_24BCE0020.listingType === 'both') && !form_24BCE0020.rentPerMonth)
      e.rentPerMonth = 'Rent per month is required';
    return e;
  };

  const handleSubmit_24BCE0020 = (type) => {
    const formWithType = { ...form_24BCE0020, listingType: type };
    setForm_24BCE0020(formWithType);

    const e = {};
    if (!formWithType.bookName.trim()) e.bookName = 'Book name is required';
    if (!formWithType.author.trim()) e.author = 'Author name is required';
    if (!formWithType.sellerName.trim()) e.sellerName = 'Your name is required';
    if (!formWithType.dept) e.dept = 'Select department';
    if (!formWithType.semester.trim()) e.semester = 'Semester is required';
    if ((type === 'sell' || type === 'both') && !formWithType.sellingPrice) e.sellingPrice = 'Selling price is required';
    if ((type === 'rent' || type === 'both') && !formWithType.rentPerMonth) e.rentPerMonth = 'Rent/month required';

    if (Object.keys(e).length > 0) {
      setErrors_24BCE0020(e);
      return;
    }

    const newBook_24BCE0020 = {
      id: Date.now(),
      title: formWithType.bookName,
      author: formWithType.author,
      price: Number(formWithType.sellingPrice) || 0,
      mrp: Number(formWithType.mrp) || 0,
      pricePerMonth: Number(formWithType.rentPerMonth) || 0,
      condition: formWithType.condition,
      semester: formWithType.semester,
      dept: formWithType.dept,
      seller: formWithType.sellerName,
      listingType: type,
      icon: deptIcons_24BCE0020[formWithType.dept] || '📖',
      imagePreview: formWithType.imagePreview,
      duration: '1–3 months',
      available: true,
      isUserListed: true,
    };

    addBook_24BCE0020(newBook_24BCE0020);
    setSubmitted_24BCE0020(true);
    setTimeout(() => {
      setSubmitted_24BCE0020(false);
      setForm_24BCE0020(initialForm_24BCE0020);
      setErrors_24BCE0020({});
    }, 3000);
  };

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '13px 16px',
    background: '#12121a',
    border: `1px solid ${hasError ? '#ff4d8d' : '#2a2a3a'}`,
    borderRadius: '10px',
    color: '#f0f0f5',
    fontSize: '0.95rem',
    fontFamily: "'Syne', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  });

  const labelStyle = {
    display: 'block',
    fontSize: '0.85rem',
    color: '#7a7a9a',
    marginBottom: '8px',
    fontWeight: 600,
    letterSpacing: '0.5px',
  };

  const fieldGroup = (label, name, placeholder, type = 'text') => (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        name={name}
        value={form_24BCE0020[name]}
        onChange={handleChange_24BCE0020}
        placeholder={placeholder}
        style={inputStyle(!!errors_24BCE0020[name])}
        onFocus={e => e.target.style.borderColor = '#00e5c8'}
        onBlur={e => e.target.style.borderColor = errors_24BCE0020[name] ? '#ff4d8d' : '#2a2a3a'}
      />
      {errors_24BCE0020[name] && <p style={{ color: '#ff4d8d', fontSize: '0.78rem', marginTop: '5px' }}>⚠ {errors_24BCE0020[name]}</p>}
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.78rem', color: '#00e5c8', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>
            // Sell Module — 24BCE0020
          </p>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800 }}>
            📤 Sell / Rent <span style={{ color: '#00e5c8' }}>Your Book</span>
          </h1>
          <p style={{ color: '#7a7a9a', marginTop: '10px' }}>
            Fill in the details below. Your listing will instantly appear on the Buy & Rent pages.
          </p>
        </div>

        {/* Success Banner */}
        {submitted_24BCE0020 && (
          <div style={{
            background: 'rgba(0,229,200,0.12)',
            border: '1px solid #00e5c8',
            borderRadius: '12px',
            padding: '18px 24px',
            marginBottom: '28px',
            display: 'flex', alignItems: 'center', gap: '12px',
            animation: 'fadeSlideUp 0.4s ease',
          }}>
            <span style={{ fontSize: '1.6rem' }}>✅</span>
            <div>
              <p style={{ fontWeight: 700, color: '#00e5c8' }}>Book Listed Successfully!</p>
              <p style={{ fontSize: '0.85rem', color: '#7a7a9a' }}>Your book is now visible in the Buy / Rent section.</p>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div style={{
          background: '#1a1a26',
          border: '1px solid #2a2a3a',
          borderRadius: '18px',
          padding: '36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '22px',
        }}>

          {/* Book Image */}
          <div>
            <label style={labelStyle}>Book Image</label>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              background: '#12121a',
              border: '1px dashed #3a3a5a',
              borderRadius: '10px',
              padding: '14px 16px',
              cursor: 'pointer',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#00e5c8'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#3a3a5a'}
            >
              {form_24BCE0020.imagePreview ? (
                <img src={form_24BCE0020.imagePreview} alt="preview" style={{ width: '52px', height: '52px', objectFit: 'cover', borderRadius: '6px' }} />
              ) : (
                <div style={{ width: '52px', height: '52px', background: '#2a2a3a', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>📷</div>
              )}
              <div>
                <p style={{ color: '#00e5c8', fontWeight: 600, fontSize: '0.9rem' }}>Choose File</p>
                <p style={{ color: '#7a7a9a', fontSize: '0.8rem' }}>
                  {form_24BCE0020.imagePreview ? 'Image selected ✓' : 'No file chosen'}
                </p>
              </div>
              <input type="file" accept="image/*" onChange={handleImage_24BCE0020} style={{ display: 'none' }} />
            </label>
          </div>

          {/* Book Name & Author */}
          {fieldGroup('Book Name', 'bookName', 'e.g. Engineering Mathematics')}
          {fieldGroup('Author Name', 'author', 'e.g. B.S. Grewal')}

          {/* MRP & Selling Price */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {fieldGroup('MRP (₹)', 'mrp', 'e.g. 500', 'number')}
            {fieldGroup('Selling Price (₹)', 'sellingPrice', 'e.g. 250', 'number')}
          </div>

          {/* Rent per month */}
          {fieldGroup('Rent per Month (₹)', 'rentPerMonth', 'e.g. 60', 'number')}

          {/* Condition */}
          <div>
            <label style={labelStyle}>Book Condition</label>
            <select name="condition" value={form_24BCE0020.condition} onChange={handleChange_24BCE0020}
              style={{ ...inputStyle(false), cursor: 'pointer' }}>
              {['Excellent', 'Good', 'Fair'].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Dept & Semester */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Department</label>
              <select name="dept" value={form_24BCE0020.dept} onChange={handleChange_24BCE0020}
                style={{ ...inputStyle(!!errors_24BCE0020.dept), cursor: 'pointer' }}>
                <option value="">Select Dept</option>
                {Object.keys(deptIcons_24BCE0020).map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              {errors_24BCE0020.dept && <p style={{ color: '#ff4d8d', fontSize: '0.78rem', marginTop: '5px' }}>⚠ {errors_24BCE0020.dept}</p>}
            </div>
            {fieldGroup('Semester', 'semester', 'e.g. 3')}
          </div>

          {/* Seller Name */}
          {fieldGroup('Your Name & Reg No', 'sellerName', 'e.g. Akshara Raj (24BCE0020)')}

          {/* Submit Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '8px' }}>
            <button onClick={() => handleSubmit_24BCE0020('sell')} style={{
              padding: '14px',
              background: '#00e5c8',
              color: '#0a0a0f',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { e.target.style.opacity = '0.88'; e.target.style.transform = 'scale(1.02)'; }}
              onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'scale(1)'; }}
            >
              Sell
            </button>
            <button onClick={() => handleSubmit_24BCE0020('rent')} style={{
              padding: '14px',
              background: '#1a1a26',
              color: '#a78bfa',
              border: '2px solid #a78bfa',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.target.style.background = '#a78bfa'; e.target.style.color = '#0a0a0f'; }}
              onMouseLeave={e => { e.target.style.background = '#1a1a26'; e.target.style.color = '#a78bfa'; }}
            >
              Rent
            </button>
          </div>
          <button onClick={() => handleSubmit_24BCE0020('both')} style={{
            padding: '13px',
            background: 'linear-gradient(90deg, #00e5c8, #a78bfa)',
            color: '#0a0a0f',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '0.95rem',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            List for Both Sell & Rent
          </button>
        </div>

        {/* Active Listings Preview */}
        {bookListings_24BCE0020.length > 0 && (
          <div style={{ marginTop: '48px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px' }}>
              Your <span style={{ color: '#00e5c8' }}>Active Listings</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {bookListings_24BCE0020.map(book => (
                <div key={book.id} style={{
                  background: '#1a1a26',
                  border: '1px solid #00e5c844',
                  borderRadius: '12px',
                  padding: '18px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    {book.imagePreview
                      ? <img src={book.imagePreview} alt={book.title} style={{ width: '46px', height: '46px', borderRadius: '8px', objectFit: 'cover' }} />
                      : <div style={{ fontSize: '2rem' }}>{book.icon}</div>
                    }
                    <div>
                      <p style={{ fontWeight: 700 }}>{book.title}</p>
                      <p style={{ fontSize: '0.8rem', color: '#7a7a9a' }}>by {book.author} · Sem {book.semester} · {book.dept}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {(book.listingType === 'sell' || book.listingType === 'both') && (
                      <span style={{ background: '#00e5c822', color: '#00e5c8', border: '1px solid #00e5c844', borderRadius: '6px', padding: '4px 12px', fontSize: '0.82rem', fontWeight: 700 }}>
                        ₹{book.price} (Sale)
                      </span>
                    )}
                    {(book.listingType === 'rent' || book.listingType === 'both') && (
                      <span style={{ background: '#a78bfa22', color: '#a78bfa', border: '1px solid #a78bfa44', borderRadius: '6px', padding: '4px 12px', fontSize: '0.82rem', fontWeight: 700 }}>
                        ₹{book.pricePerMonth}/mo (Rent)
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <p style={{ textAlign: 'center', marginTop: '50px', fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: '#3a3a5a' }}>
          24BCE0020_L1_MP_AKSHARA · Sell Module
        </p>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AKSHARARAJ_24BCE0020_Sell;
