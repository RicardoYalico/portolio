import { AboutMe, AnimatedTitle, Border, ContactForm, Container, FadeIn, GridPattern, MyWork, Section, SectionHeader, Skills, Socials, Stars, WorkExperience } from '@/components';
import { Archive, BookOpen, BriefCase, Envelope } from '@/icons';

export const metadata = {
  title: 'Ricardo Yalico',
  description: 'Portafolio personal.',
};

export const sections = [
  { index: 0, title: 'Sobre mí', id: 'about-me' },
  { index: 1, title: 'Experiencia', id: 'work-experience' },
  { index: 2, title: 'Habilidades', id: 'skills' },
  { index: 3, title: 'Contacto', id: 'contact' },
];

/*   { index: 3, title: 'Proyectos', id: 'my-work' }, */
interface contentSection {
  id: string;
  sectionHeader: {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  };
  mainContent: React.ReactNode;
}

const content: contentSection[] = [
  {
    id: sections[1].id,
    sectionHeader: {
      icon: (
        <>
          <BriefCase height="28" width="28" />
          <span className="bg-work_experience_orange icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Experiencia',
      description: (
        <div>
          <span className="text-work_experience_orange">Ingeniero Junior</span> con <span className="text-work_experience_orange">experiencia profesional</span> en el desarrollo de software
        </div>
      ),
    },
    mainContent: <WorkExperience />,
  },
  {
    id: sections[2].id,
    sectionHeader: {
      icon: (
        <>
          <BookOpen height="28" width="28" />
          <span className="bg-skills_purple icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Habilidades',
      description: (
        <div>
          Desarrollador de software orientado al <span className="text-skills_purple">Backend</span>, con conocimientos en{' '}
          <span className="text-skills_purple">Frontend</span> y{' '}
          <span className="text-skills_purple">tecnologías móviles</span>
        </div>
      ),
    },
    mainContent: <Skills />,
  },
  {
    id: sections[3].id,
    sectionHeader: {
      icon: (
        <>
          <Envelope height="28" width="28" />
          <span className="bg-blue-400 icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Contacto',
      description: (
        <div>
          Ponte en <span className="text-blue-400">contacto</span> y <span className="text-blue-400">construyamos algo juntos</span>
        </div>
      ),
    },
    mainContent: <ContactForm />,
  },
];

/*   {
    id: sections[3].id,
    sectionHeader: {
      icon: (
        <>
          <Archive height="28" width="28" />
          <span className="bg-my_work_yellow icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Proyectos',
      description: (
        <div>
          Algunos de <span className="text-my_work_yellow">mis proyectos</span> en desarrollo <span className="text-my_work_yellow">web y backend</span>
        </div>
      ),
    },
    mainContent: <MyWork />,
  }, */

export default function Index() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <GridPattern />
      <Section id={sections[0].id}>
        <Container>
          <div className="min-h-screen relative">
            <FadeIn className="max-w-5xl pt-40 md:pt-[20vh] 2xl:pt-[30vh]">
              <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl">
                Ricardo Yalico<span className="wave">👋</span>
              </h1>
              <div className="flex mt-3 mb-1">
                En busca de una posición{' '}
                <span className="relative flex h-2 w-2 self-center mx-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>{' '}
                / &#8205; <AnimatedTitle />
              </div>
              <p className="max-w-3xl">
                Ingeniero de software junior, bachiller en Ingeniería de Software, con enfoque en desarrollo backend y experiencia en .NET y Java Spring Boot.
              </p>
            </FadeIn>

            <Socials />
            <div className="scroll-down">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>{' '}
          <Border />
          <AboutMe />
        </Container>
      </Section>

      <div id="stars-container" className="relative">
        <Container>
          <Stars id="stars-container" />
          {content.map((section: contentSection) => (
            <Section key={section.id} id={section.id} className="pt-24 mt-28">
              <Border />
              <SectionHeader {...section.sectionHeader} />
              {section.mainContent}
            </Section>
          ))}
        </Container>
      </div>
    </div>
  );
}
