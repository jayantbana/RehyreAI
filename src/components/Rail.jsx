import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Horizontally scrollable, snap-aligned row. Scrolls inside its own box so the
// page never overflows sideways; arrow buttons appear only when there is more to see.
export default function Rail({ children, label, className, controlsClassName }) {
  const ref = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [update, children]);

  const scrollBy = (dir) => {
    const el = ref.current;
    if (!el) return;
    const first = el.firstElementChild;
    const step = first ? first.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const hasOverflow = canPrev || canNext;

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={ref}
        onScroll={update}
        role="region"
        aria-label={label}
        tabIndex={0}
        className={cn('rail focus-visible:outline-offset-4', className)}
      >
        {children}
      </div>

      {hasOverflow && (
        <div className={cn('flex items-center justify-end gap-2', controlsClassName)}>
          <Button variant="outline" size="icon" onClick={() => scrollBy(-1)} disabled={!canPrev} aria-label="Scroll left">
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="icon" onClick={() => scrollBy(1)} disabled={!canNext} aria-label="Scroll right">
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
