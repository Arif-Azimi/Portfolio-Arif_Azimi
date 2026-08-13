import { motion } from "motion/react";
import { TestimonialsColumn } from "./ui/TestimonialsColumn";

// ── Edit these reviews to your own later! ──────────────────
const testimonials = [
  {
    text: "Arif built our entire company website from scratch. Clean code, fast delivery, and he understood exactly what we needed without us having to explain twice.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Ahmad Faris",
    role: "Founder, TechKL",
  },
  {
    text: "Working with Arif was a great experience. He's responsive, professional, and the final product exceeded our expectations. Will definitely hire again.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Nurul Ain",
    role: "Marketing Manager, Shopify Store",
  },
  {
    text: "Arif helped us integrate an AI chatbot into our existing system. His knowledge of both frontend and backend saved us weeks of development time.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Daniel Wong",
    role: "CTO, StartupPenang",
  },
  {
    text: "The dashboard Arif built for us is exactly what we envisioned. Real-time data, beautiful UI, and it works flawlessly on mobile too.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Siti Hawa",
    role: "Operations Lead, LogiTrack",
  },
  {
    text: "I needed a full e-commerce site in two weeks. Arif delivered in 10 days with everything working perfectly. Payments, inventory, admin panel — all done.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Hafizuddin Razali",
    role: "Online Business Owner",
  },
  {
    text: "Arif is one of those rare developers who actually cares about design AND functionality. Our users constantly compliment how smooth the app feels.",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    name: "Priya Nair",
    role: "Product Manager, FinTech KL",
  },
  {
    text: "He took our messy legacy codebase and modernized it completely. Performance went up by 60% and the team can actually maintain it now.",
    image: "https://randomuser.me/api/portraits/men/73.jpg",
    name: "Rashid Ismail",
    role: "Lead Developer, GovTech Project",
  },
  {
    text: "Arif communicated clearly throughout the whole project. No surprises, no delays. Just solid work delivered on time.",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
    name: "Lim Wei Ting",
    role: "CEO, Digital Agency KL",
  },
  {
    text: "We hired Arif for a 3-month contract and ended up extending twice. His skills in React and Node.js are top-notch and he works great with our team.",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Kevin Tan",
    role: "Engineering Manager, SaaS Company",
  },
];

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '6rem 3rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 540, margin: '0 auto', textAlign: 'center' }}
        >
          <span style={{
            fontSize: '0.75rem', letterSpacing: 4, color: 'var(--accent)',
            textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem',
          }}>
            Testimonials
          </span>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 800, marginBottom: '1rem',
          }}>
            What clients say about me
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7 }}>
            Real feedback from people I've had the pleasure of working with.
          </p>
        </motion.div>

        {/* Scrolling columns */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginTop: '3rem',
          maxHeight: 740,
          overflow: 'hidden',
          maskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
        }}>
          {/* Column 1 — always visible */}
          <TestimonialsColumn testimonials={firstColumn} duration={15} />

          {/* Column 2 — visible on md+ */}
          <div className="hidden-mobile">
            <TestimonialsColumn testimonials={secondColumn} duration={19} />
          </div>

          {/* Column 3 — visible on lg+ */}
          <div className="hidden-tablet">
            <TestimonialsColumn testimonials={thirdColumn} duration={17} />
          </div>
        </div>
      </div>

      <style>{`
        .hidden-mobile  { display: none; }
        .hidden-tablet  { display: none; }
        @media (min-width: 768px)  { .hidden-mobile { display: block; } }
        @media (min-width: 1024px) { .hidden-tablet { display: block; } }
      `}</style>
    </section>
  );
}
