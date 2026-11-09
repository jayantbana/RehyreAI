import React from 'react';
import Logo from '@/components/Logo.jsx';
import { Separator } from '@/components/ui/separator';

export default function WarmFooter({ setActiveTab, onOpenStudentModal, onOpenRecruiterModal }) {
  const columns = [
    {
      title: 'Product',
      links: [
        { label: 'For candidates', onClick: () => setActiveTab('prepare') },
        { label: 'For employers', onClick: () => setActiveTab('enterprise') },
        { label: 'Sample scorecard', onClick: () => setActiveTab('scorecard') },
      ],
    },
    {
      title: 'Get started',
      links: [
        { label: 'Start practising', onClick: onOpenStudentModal },
        { label: 'Book a demo', onClick: onOpenRecruiterModal },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Security', href: '#' },
        { label: 'Terms', href: '#' },
      ],
    },
  ];

  const linkClass =
    'cursor-pointer text-[0.9375rem] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline';

  return (
    <footer className="border-t bg-card/60">
      <div className="container flex flex-col gap-10 py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="col-span-2 flex flex-col items-start gap-4 md:col-span-1">
            <Logo onClick={() => setActiveTab('home')} />
            <p className="max-w-[34ch] text-[0.9375rem] text-muted-foreground">
              Verified technical hiring, from preparation to offer.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
              <h2 className="font-sans text-sm font-semibold tracking-normal text-foreground">{col.title}</h2>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href ? (
                      <a href={l.href} className={linkClass}>{l.label}</a>
                    ) : (
                      <button type="button" onClick={l.onClick} className={linkClass}>{l.label}</button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator />

        <p className="text-sm text-muted-foreground">© 2026 Rehyre AI Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
