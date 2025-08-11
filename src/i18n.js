import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: {
        experience: 'Experience',
        projects: 'Projects',
        about: 'About'
      },
      sections: {
        experience: 'Professional Experience',
        projects: 'Projects',
        about: 'About Me'
      },
      intro: {
        title: "Hello, I'm Maria!",
        subtitle:
          'Informatics Engineer with hands-on experience in <b>web development</b>, specializing in modern <b>JavaScript frameworks</b> and user interface design.'
      },
      experience: {
        accel: {
          title: 'Software Developer and Technical Writer',
          date: 'June 2022 – Present',
          time: '3 years and 2 months',
          description:
            "Architecting and developing a <b>mentor-matching platform</b> to facilitate connections between mentors and mentees.\nDeveloped <b>automation extensions</b> for Google Workspace using Apps Script.\n <b>Enhanced</b> the research journal web page with updates in HTML, and SASS.\n <b>Managing and writing</b> for the company's Medium blog, reviewing articles and ensuring quality writing and adherence to guidelines.",
          company: 'Accel.AI'
        },
        opentech: {
          title: 'Front-end Web Developer',
          date: 'August 2023 – December 2023',
          time: '',
          description:
            'Redesigned and implemented <b>LCC OpenTech’s corporate website</b> using Qwik, transforming it into a modern, user-friendly platform aligned with industry standards. \n <b>Translated Figma designs</b> into sleek, responsive layouts using Tailwind CSS, delivering a visually appealing and adaptable user interface.',
          company: 'LCC OpenTech',
          jobType: 'Internship'
        }
      },
      projects: {
        opentech: {
          name: "OpenTech LCC's Company Website",
          description:
            'Developed a modern, user-friendly corporate website for LLC OpenTech, focusing on responsive design and enhanced user engagement. Translated Figma designs into functional layouts using Qwik and Tailwind CSS, ensuring a seamless experience across devices.'
        },
        ucab: {
          name: 'UCAB Forms',
          description:
            'Enhanced the platform "UCAB Forms" by integrating advanced data mining capabilities and designing an intuitive front-end interface. This allowed users to analyze survey data for patterns and trends, supporting informed decision-making and research excellence at the Universidad Católica Andrés Bello.'
        },
        mentor: {
          name: 'Mentor Match Platform',
          description:
            'Developed to facilitate meaningful connections between mentors and mentees. Utilized React.js and Material UI for an intuitive and responsive user interface and implemented real-time user authentication and data management with Firebase, ensuring efficient storage and retrieval of matching data.'
        },
        travel: {
          name: 'Travel Grant Process Automation',
          description:
            'Developed a standardized and automated process for managing travel grants, streamlining application, approval, and reimbursement workflows. By leveraging Google Sheets, Apps Script, and API integrations, the system reduces manual work, ensures accurate grant calculations, and facilitates real-time notifications. This solution improves user experience and optimizes resource management, significantly reducing processing time and errors.'
        }
      },
      about: {
        content:
          "I'm María Guerra, a bilingual software developer with a Bachelor's in <b>Informatics Engineering</b> from Universidad Católica Andrés Bello with <b>international coursework in web development</b> from Universidad de Guadalajara.<br/><br/> I specialize in front-end technologies but I'm also interested in back-end development, so I'm always learning new technologies. I’m passionate about <b>crafting intuitive user experiences, optimizing processes, and contributing to inclusive tech communities.</b><br/><br/> I have a proven track record in both <b>remote and hybrid work environments</b>, collaborating effectively with international teams while managing multiple projects.<br/><br/> Some of my hobbies include <b>listening to music, reading and staying updated with the latest tech news.</b>"
      },
      projectButton: {
        repo: 'Repository'
      }
    }
  },
  es: {
    translation: {
      nav: {
        experience: 'Experiencia',
        projects: 'Proyectos',
        about: 'Sobre mí'
      },
      sections: {
        experience: 'Experiencia profesional',
        projects: 'Proyectos',
        about: 'Sobre mí'
      },
      intro: {
        title: '¡Hola, soy María!',
        subtitle:
          'Ingeniera en Informática con experiencia práctica en <b>desarrollo web</b>, especializada en <b>frameworks de JavaScript</b> modernos y diseño de interfaces de usuario.'
      },
      experience: {
        accel: {
          title: 'Desarrolladora de software y redactora técnica',
          date: 'Junio 2022 – Presente',
          time: '3 años y 2 meses',
          description:
            'Diseñando y desarrollando una <b>plataforma de emparejamiento de mentores</b> para facilitar conexiones entre mentores y aprendices.\nDesarrollé <b>extensiones de automatización</b> para Google Workspace usando Apps Script.\n <b>Mejoré</b> la página web de una revista de investigación con actualizaciones en HTML y SASS.\n <b>Gestiono y escribo</b> para el blog de Medium de la empresa, revisando artículos y asegurando la calidad y el cumplimiento de las pautas.',
          company: 'Accel.AI'
        },
        opentech: {
          title: 'Desarrolladora web Front-end',
          date: 'Agosto 2023 – Diciembre 2023',
          time: '',
          description:
            'Rediseñé e implementé el <b>sitio web corporativo de LCC OpenTech</b> usando Qwik, transformándolo en una plataforma moderna y fácil de usar alineada con los estándares de la industria. \n <b>Traduje diseños de Figma</b> a interfaces responsivas con Tailwind CSS, logrando una experiencia consistente en dispositivos.',
          company: 'LCC OpenTech',
          jobType: 'Pasantía'
        }
      },
      projects: {
        opentech: {
          name: 'Sitio web corporativo de OpenTech LCC',
          description:
            'Desarrollo de un sitio corporativo moderno y fácil de usar para LLC OpenTech, con foco en diseño responsivo y mayor interacción. Traduje diseños de Figma a interfaces con Qwik y Tailwind CSS para una experiencia fluida en dispositivos.'
        },
        ucab: {
          name: 'UCAB Forms',
          description:
            'Mejoré la plataforma “UCAB Forms” integrando capacidades de minería de datos y diseñando una interfaz intuitiva. Permitió a los usuarios analizar encuestas para encontrar patrones y tendencias, apoyando la toma de decisiones y la investigación en la Universidad Católica Andrés Bello.'
        },
        mentor: {
          name: 'Plataforma Mentor Match',
          description:
            'Desarrollada para facilitar conexiones significativas entre mentores y aprendices. Utilicé React.js y Material UI para una interfaz intuitiva y responsiva, e implementé autenticación y gestión de datos en tiempo real con Firebase.'
        },
        travel: {
          name: 'Automatización del proceso de viáticos',
          description:
            'Proceso estandarizado y automatizado para gestionar viáticos, optimizando solicitudes, aprobaciones y reembolsos. Con Google Sheets, Apps Script e integraciones API, reduce trabajo manual, asegura cálculos correctos y envía notificaciones en tiempo real. Esta solución mejora la experiencia del usuario y optimiza la gestión de recursos, reduciendo significativamente el tiempo de procesamiento y los errores.'
        }
      },
      about: {
        content:
          'Soy María Guerra, desarrolladora de software bilingüe con una licenciatura en <b>Ingeniería Informática</b> de la Universidad Católica Andrés Bello y <b>formación internacional en desarrollo web</b> en la Universidad de Guadalajara.<br/><br/> Me especializo en tecnologías de front‑end, pero también me interesa el back‑end, así que siempre estoy aprendiendo nuevas tecnologías. Me apasiona <b>crear experiencias de usuario intuitivas, optimizar procesos y aportar a comunidades tecnológicas inclusivas.</b><br/><br/> Cuento con experiencia en <b>entornos remotos e híbridos</b>, colaborando con equipos internacionales y gestionando múltiples proyectos.<br/><br/> Algunos de mis pasatiempos incluyen <b>escuchar música, leer y mantenerme al día con las últimas noticias tecnológicas.</b>'
      },
      projectButton: {
        repo: 'Repositorio'
      }
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
