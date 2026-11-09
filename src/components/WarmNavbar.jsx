import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Logo from '@/components/Logo.jsx';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { id: 'home', label: 'Overview' },
  { id: 'prepare', label: 'Candidates' },
  { id: 'enterprise', label: 'Employers' },
  { id: 'scorecard', label: 'Scorecard' },
];

export default function WarmNavbar({ activeTab, setActiveTab, onOpenStudentModal, onOpenRecruiterModal }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setActiveTab(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Logo onClick={() => go('home')} />

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative h-10 cursor-pointer rounded-md px-3.5 text-[0.9375rem] font-semibold transition-colors duration-150',
                  active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-x-3.5 -bottom-[13px] h-0.5 rounded-full bg-primary transition-opacity duration-200',
                    active ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="sm" onClick={onOpenRecruiterModal}>
            Book a demo
          </Button>
          <Button size="sm" onClick={onOpenStudentModal}>
            Start practising
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-[85%] flex-col gap-6 bg-background sm:max-w-sm">
            <SheetHeader className="text-left">
              <SheetTitle className="font-serif text-xl font-medium">Menu</SheetTitle>
              <SheetDescription className="sr-only">Site navigation</SheetDescription>
            </SheetHeader>

            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  aria-current={activeTab === item.id ? 'page' : undefined}
                  className={cn(
                    'flex h-12 cursor-pointer items-center rounded-md px-3 text-left text-base font-semibold transition-colors',
                    activeTab === item.id ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Separator />

            <div className="flex flex-col gap-2">
              <Button onClick={() => { setOpen(false); onOpenStudentModal(); }}>Start practising</Button>
              <Button variant="outline" onClick={() => { setOpen(false); onOpenRecruiterModal(); }}>
                Book a demo
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
