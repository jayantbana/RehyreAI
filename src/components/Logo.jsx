import React from 'react';
import { cn } from '@/lib/utils';

export default function Logo({ className, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Rehyre home"
      className={cn('flex cursor-pointer items-center gap-2.5 rounded-md', className)}
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2 2 7l10 5 10-5-10-5z" />
          <path d="m2 17 10 5 10-5" />
          <path d="m2 12 10 5 10-5" />
        </svg>
      </span>
      <span className="font-serif text-[1.375rem] font-medium leading-none tracking-tight text-foreground">
        Rehyre
      </span>
    </button>
  );
}
