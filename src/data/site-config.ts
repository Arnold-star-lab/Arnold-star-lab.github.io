export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://arnold-star-lab.com',
    title: 'Arnold Limo',
    subtitle: 'Innovación y tecnología en la era digital',
    description: 'Blog y portafolio de un estudiante apasionado por la tecnología, las bases de datos y el desarrollo web.',
    image: {
        src: '/arnold-star-lab-preview.jpg',
        alt: 'Arnold Star Lab - Blog y Portafolio'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/Proyectos'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'Sobre mí',
            href: '/Sobre mí'
        },
        {
            text: 'Contacto',
            href: '/contacto'
        },
        {
            text: 'Terms',
            href: '/terms'
        },

    ],
   socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/arnold-star-lab'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/arnold-star-lab'
        },
        {
            text: 'Twitter/X',
            href: 'https://twitter.com/arnold-star-lab'
        }
    ],
    hero: {
        title: 'Bienvenido a mi portafolio',
        text: "Soy un estudiante apasionado por la tecnología, con conocimientos en bases de datos, desarrollo web y análisis de datos. Actualmente, trabajo en la implementación de una planta de reciclaje de residuos electrónicos en Cusco. En este sitio comparto mis proyectos, ideas y aprendizajes. ¡Explora mi trabajo en <a href='https://github.com/arnold-star-lab'>GitHub</a>",
        image: {
            src: '/hero.jpeg',
            alt: 'Imagen de perfil del creador de Arnold Star Lab'
        },
        actions: [
            {
                text: 'Contactame',
                href: '/contacto'
            }
    
    },
    subscribe: {
        title: 'Suscríbete al boletín de Arnold Star Lab',
        text: 'Recibe una actualización semanal con las últimas publicaciones y proyectos.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
