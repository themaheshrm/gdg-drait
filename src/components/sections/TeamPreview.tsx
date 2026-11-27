import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { team } from '@/data/team';
import { Reveal } from '@/components/common/Reveal';
import { MemberCard } from '@/components/cards/MemberCard';
import { Ring } from '@/components/common/Shapes';

export function TeamPreview() {
  const leads = team.filter((m) => m.group === 'organizer' || m.group === 'domain-lead').slice(0, 7);
  return (
    <section aria-labelledby="team-preview-title" className="bg-white py-20 sm:py-28">
      <div className="container-site">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-4">The people</p>
          <h2 id="team-preview-title" className="text-display-md">
            Organizers &amp; domain leads
          </h2>
          <p className="mt-5 text-lg text-ink-soft">The students who plan the sessions, mentor members and keep the community moving.</p>
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {leads.map((m, i) => (
            <Reveal as="li" key={m.id} delay={(i % 4) * 0.06}>
              <MemberCard member={m} index={i} compact />
            </Reveal>
          ))}
          <Reveal as="li" delay={0.2}>
            <Link
              to="/team"
              className="group relative flex h-full min-h-[14rem] flex-col justify-between overflow-hidden rounded-4xl bg-ink p-6 text-white"
            >
              <Ring className="absolute -bottom-10 -right-10 h-40 w-40 transition-transform duration-700 group-hover:scale-110" color="#4285F4" />
              <span className="relative font-mono text-xs uppercase tracking-wider text-white/60">Full team</span>
              <span className="relative text-2xl font-medium leading-tight tracking-tight">
                Meet everyone
                <ArrowRight className="mt-3 h-6 w-6 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
