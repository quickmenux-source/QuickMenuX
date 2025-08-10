// components/FAQ.tsx
'use client'
import { useState } from 'react';

const faqs = [
  { q: 'How does it work?', a: 'You scan, view the menu, place your order—and that’s it!' },
  { q: 'Can we customize items?', a: 'Yes! Guests can choose options and add notes.' },
  { q: 'How will customers know when food’s ready?', a: 'We show countdown timers, fun animations & updates.' },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="py-12 bg-soft-cream">
      <h2 className="text-3xl font-bold text-center text-deep-teal">FAQ</h2>
      <div className="mt-8 space-y-4 px-4 max-w-2xl mx-auto">
        {faqs.map((item, i) => (
          <div key={item.q} className="border rounded-lg p-4 cursor-pointer" onClick={() => setOpenIdx(i === openIdx ? null : i)}>
            <h3 className="text-xl font-medium flex justify-between">
              {item.q}
              <span>{i === openIdx ? '−' : '+'}</span>
            </h3>
            {i === openIdx && <p className="mt-2 text-gray-700">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
