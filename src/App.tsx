import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import HomePage from '@/pages/Home/HomePage';

// Route-level code splitting: inner pages load on demand.
const AboutPage = lazy(() => import('@/pages/About/AboutPage'));
const DomainsPage = lazy(() => import('@/pages/Domains/DomainsPage'));
const EventsPage = lazy(() => import('@/pages/Events/EventsPage'));
const EventDetailPage = lazy(() => import('@/pages/Events/EventDetailPage'));
const ProjectsPage = lazy(() => import('@/pages/Projects/ProjectsPage'));
const TeamPage = lazy(() => import('@/pages/Team/TeamPage'));
const GalleryPage = lazy(() => import('@/pages/Gallery/GalleryPage'));
const ResourcesPage = lazy(() => import('@/pages/Resources/ResourcesPage'));
const JoinPage = lazy(() => import('@/pages/Join/JoinPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFoundPage'));

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="domains" element={<DomainsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="events/:slug" element={<EventDetailPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}
