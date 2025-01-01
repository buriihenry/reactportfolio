import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    python,
    html,
    css,
    reactjs,
    smollan,
    tailwind,
    nodejs,
    mongodb,
    git,
    flask,
    docker,
    hmd,
    texaco,
    carrent,
    jobit,
    tripguide,
    django,
    kerlcarl,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Scientist",
      icon: web,
    },
    {
      title: "AI Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "flask",
      icon: flask,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Data Scientist",
      company_name: "Smollan",
      icon: smollan,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Sept 2024",
      points: [
        "Designed and implemented a RAG system leveraging LLMs significantly improving the accuracy and relevance of AI-generated responses in customer support applications",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Built machine learning models",
        "Utilized historical data for model training, ensuring accurate predictions. Built the front end using Django web framework..",
      ],
    },
    {
      title: "Data Scientist",
      company_name: "HMD",
      icon: hmd,
      iconBg: "#E6DEDD",
      date: "April 2018 - Jan 2023",
      points: [
        "Developed and deployed a Machine Learning projects.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Reduced customer churn by 15% through predictive modeling and proactive intervention strategies, resulting in improved customer retention and satisfaction.",
        "Improved operational efficiency by 10% through process optimization and automation, leveraging data insights to identify and eliminate bottlenecks..",
      ],
    },
    {
      title: "Data Scientist",
      company_name: "KelCarl",
      icon: kerlcarl,
      iconBg: "#000000",
      date: "Jan 2018 - April 2018",
      points: [
        "Conducted exploratory data analysis using pandas to gain insights into the data.",
        "Utilized historical data for model training, ensuring accurate predictions. Built the front end using Streamlit web framework.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Used plotly dash for visualization. Leveraged Python, Excel, and SQL for dashboard creation..",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Texaco Five Agencies",
      icon: texaco,
      iconBg: "#F8F8F8",
      date: "Aug 2017 - Dec 2017",
      points: [
        "Developed and maintained web applications using HTML,CSS, JS and other related technologies.",
        "Developed and directed software system validation and testing methods.",
        "Implemented responsive design and ensured cross-browser compatibility.",
        "Oversaw the development of documentation of the code.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };