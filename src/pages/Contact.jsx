import { useState } from 'react';
import PageLayout from '@/components/PageLayout';

const BG_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout bgImage={BG_IMAGE}>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-xl">
          <p className="text-xs tracking-widest uppercase opacity-30 mb-8 text-center">Contact</p>
          <h1
            className="text-5xl font-light mb-16 text-center"
            style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.05em' }}
          >
            Get in Touch
          </h1>

          {submitted ? (
            <div className="text-center">
              <div className="w-8 h-px mx-auto mb-10" style={{ background: '#8C5E5E' }} />
              <p className="text-sm tracking-widest uppercase opacity-50">Message sent — thank you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="contact-field"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="contact-field"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows={4}
                  className="contact-field resize-none"
                  style={{ lineHeight: '1.8' }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-xs tracking-widest uppercase transition-all duration-300 cursor-none"
                style={{
                  border: '1px solid rgba(140,94,94,0.5)',
                  color: '#F2F2F2',
                  background: 'transparent',
                  letterSpacing: '0.25em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(140,94,94,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(140,94,94,0.9)';
                  e.currentTarget.style.letterSpacing = '0.35em';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(140,94,94,0.5)';
                  e.currentTarget.style.letterSpacing = '0.25em';
                }}
              >
                Send Message
              </button>
            </form>
          )}

          {/* Social links under form */}
          <div className="mt-16 flex justify-center gap-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase opacity-30 hover:opacity-80 transition-opacity cursor-none">
              LinkedIn
            </a>
            <a href="https://artstation.com" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase opacity-30 hover:opacity-80 transition-opacity cursor-none">
              ArtStation
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase opacity-30 hover:opacity-80 transition-opacity cursor-none">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}