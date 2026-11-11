import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Field, FieldGroup, FieldLabel, FieldSet, FieldLegend } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const TRACKS = [
  { id: 'swe', label: 'Backend' },
  { id: 'fullstack', label: 'Full-stack' },
  { id: 'data', label: 'Data' },
  { id: 'devops', label: 'Cloud / DevOps' },
];

const LANGUAGES = [
  { id: 'cpp', label: 'C++20' },
  { id: 'python', label: 'Python 3.12' },
  { id: 'java', label: 'Java 21' },
  { id: 'go', label: 'Go 1.22' },
  { id: 'ts', label: 'TypeScript' },
];

const COHORTS = [
  { id: '100-500', label: '100 – 500' },
  { id: '500-2000', label: '500 – 2,000' },
  { id: '2000-10000', label: '2,000 – 10,000' },
  { id: '10000+', label: '10,000 +' },
];

export default function WarmDemoModal({ open, onOpenChange, mode, onStudentStart }) {
  // Student state
  const [track, setTrack] = useState('swe');
  const [lang, setLang] = useState('cpp');
  const [studentDone, setStudentDone] = useState(false);

  // Recruiter state
  const [form, setForm] = useState({ name: '', email: '', org: '', cohort: '500-2000' });
  const [recruiterDone, setRecruiterDone] = useState(false);

  // Reset confirmation screens when the dialog is reopened
  useEffect(() => {
    if (open) {
      setStudentDone(false);
      setRecruiterDone(false);
    }
  }, [open]);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        {mode === 'student' ? (
          studentDone ? (
            <Confirmation
              title="Your session is ready"
              body={`We have prepared a ${TRACKS.find((t) => t.id === track)?.label} loop in ${LANGUAGES.find((l) => l.id === lang)?.label}.`}
              action="Begin"
              onClose={() => onOpenChange(false)}
            />
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStudentDone(true);
                // Fire immediately so App.jsx can launch the student sub-view
                const trackLabel = TRACKS.find((t) => t.id === track)?.label ?? track;
                const langLabel = LANGUAGES.find((l) => l.id === lang)?.label ?? lang;
                onStudentStart?.(trackLabel, langLabel);
              }}
              className="flex flex-col gap-6"
            >
              <DialogHeader className="gap-2 pr-8 text-left">
                <DialogTitle className="text-2xl">Start a free practice loop</DialogTitle>
                <DialogDescription className="text-base">
                  Choose a track and language. No payment required.
                </DialogDescription>
              </DialogHeader>

              <FieldGroup className="gap-6">
                <FieldSet className="gap-3">
                  <FieldLegend variant="label" className="mb-0 text-sm font-semibold">Track</FieldLegend>
                  <ToggleGroup
                    type="single"
                    variant="outline"
                    value={track}
                    onValueChange={(v) => v && setTrack(v)}
                    className="grid grid-cols-2 gap-2"
                  >
                    {TRACKS.map((t) => (
                      <ToggleGroupItem key={t.id} value={t.id} className="h-11 w-full">
                        {t.label}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </FieldSet>

                <Field>
                  <FieldLabel htmlFor="lang">Language</FieldLabel>
                  <Select value={lang} onValueChange={setLang}>
                    <SelectTrigger id="lang">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {LANGUAGES.map((l) => (
                          <SelectItem key={l.id} value={l.id}>{l.label}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>

              <DialogFooter>
                <Button type="submit" size="lg" className="w-full">
                  Continue
                  <ArrowRight aria-hidden="true" />
                </Button>
              </DialogFooter>
            </form>
          )
        ) : recruiterDone ? (
          <Confirmation
            title="Request received"
            body={`Thank you, ${form.name || 'there'}. We will contact you at ${form.email} within one business day.`}
            action="Close"
            onClose={() => onOpenChange(false)}
          />
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setRecruiterDone(true); }}
            className="flex flex-col gap-6"
          >
            <DialogHeader className="gap-2 pr-8 text-left">
              <DialogTitle className="text-2xl">Book a demo</DialogTitle>
              <DialogDescription className="text-base">
                A 30-minute walkthrough tailored to your hiring process.
              </DialogDescription>
            </DialogHeader>

            <FieldGroup className="gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="name">Full name</FieldLabel>
                  <Input id="name" required autoComplete="name" value={form.name} onChange={set('name')} />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Work email</FieldLabel>
                  <Input id="email" type="email" required autoComplete="email" value={form.email} onChange={set('email')} />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="org">Organisation</FieldLabel>
                <Input id="org" required autoComplete="organization" value={form.org} onChange={set('org')} />
              </Field>
              <Field>
                <FieldLabel htmlFor="cohort">Candidates per hiring cycle</FieldLabel>
                <Select value={form.cohort} onValueChange={(v) => setForm({ ...form, cohort: v })}>
                  <SelectTrigger id="cohort">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {COHORTS.map((c) => (
                        <SelectItem key={c.id} value={c.id}>{c.label}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </FieldGroup>

            <DialogFooter>
              <Button type="submit" size="lg" className="w-full">
                Request demo
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Confirmation({ title, body, action, onClose }) {
  return (
    <div className="flex flex-col items-center gap-5 py-6 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-secondary">
        <CheckCircle2 className="size-7" aria-hidden="true" />
      </span>
      <DialogHeader className="items-center gap-2 text-center">
        <DialogTitle className="text-2xl">{title}</DialogTitle>
        <DialogDescription className="max-w-[36ch] text-base">{body}</DialogDescription>
      </DialogHeader>
      <Button onClick={onClose} className="min-w-32">{action}</Button>
    </div>
  );
}
