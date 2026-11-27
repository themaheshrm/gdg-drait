import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { cn } from '@/utils/cn';

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  return (
    <section aria-labelledby="projects-preview-title" className="py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Built by the community"
          title={<span id="projects-preview-title">Featured projects</span>}
          description="Open-source work from our domain teams — explore the code, try the demos, or join a project."
          action={
            <Button to="/projects" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
              All projects
            </Button>
          }
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:pb-12">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className={cn(i === 1 && 'lg:translate-y-12', i === 2 && 'md:col-span-2 lg:col-span-1')}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
