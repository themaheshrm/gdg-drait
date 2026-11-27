import { ArrowLeft, CalendarDays } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Button } from '@/components/common/Button';
import { Bracket, Circle, QuarterCircle } from '@/components/common/Shapes';

export default function NotFoundPage({ message }: { message?: string }) {
  useDocumentTitle('Page not found');
  return (
    <section className="container-site flex min-h-[80vh] flex-col items-center justify-center pb-16 pt-32 text-center">
      <div className="relative flex items-center" aria-hidden>
        <Bracket direction="left" className="h-24 w-24 sm:h-36 sm:w-36" color="#4285F4" />
        <span className="font-mono text-7xl font-medium tracking-tighter sm:text-9xl">404</span>
        <Bracket direction="right" className="h-24 w-24 sm:h-36 sm:w-36" color="#34A853" />
        <QuarterCircle className="absolute -top-10 left-8 h-12 w-12" color="#F9AB00" />
        <Circle className="absolute -bottom-4 right-16 h-6 w-6" color="#EA4335" />
      </div>
      <h1 className="mt-10 text-display-sm">This page didn’t compile.</h1>
      <p className="mt-4 max-w-md text-lg text-ink-soft">{message ?? 'The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.'}</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button to="/" icon={<ArrowLeft className="h-4 w-4" />} iconPosition="start">
          Back to home
        </Button>
        <Button to="/events" variant="secondary" icon={<CalendarDays className="h-4 w-4" />} iconPosition="start">
          See events
        </Button>
      </div>
    </section>
  );
}
