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
    api,
    chatbot,
    telegrambot,
    telemedai,
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
        "I thought it was impossible to make a website as beautiful as our product, but Henry proved me wrong.",
      name: "Jean Imbuka",
      designation: "CTO",
      company: "Texaco Five Agencies",
      image: "https://randomuser.me/api/portraits/men/16.jpg",
    },
    {
      testimonial:
        "I've never met a data scientist who truly builds cool dashboards and story telling with data like Henry.",
      name: "Clement Matiku",
      designation: "Manager",
      company: "HMD",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    {
      testimonial:
        "Henry built amazing AI applications,that optimized our processes!",
      name: "Kevin Wachira",
      designation: "Ops Manager",
      company: "Smollan",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Chat-with-docs",
      description:
        "the app allows users to upload any type of PDF document and ask questions about its content. The application uses Llama-3.2 for LLM and HuggingFace embeddings for document indexing and querying. You can chat with the document and get real-time responses..",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pinecone db",
          color: "green-text-gradient",
        },
        {
          name: "streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: chatbot,
      source_code_link: "https://github.com/buriihenry/Chat-with-PDF.git",
    },
    {
      name: "API for Expense Tracker",
      description:
        " This is a RESTful API for an expense tracker application. The API is built using Django Rest Framework. It allows users to create, read, update, and delete expenses. The API is secured using JWT authentication..",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "jwt",
          color: "pink-text-gradient",
        },
      ],
      image: api,
      source_code_link: "https://github.com/buriihenry/moneymapapi",
    },

    {
      name: "AI-Powered-chatbot",
      description:
        " Telegram bot designed to assist with various tasks. It is built using Python and leverages the python-telegram-bot library.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "green-text-gradient",
        },
        {
          name: "axios",
          color: "pink-text-gradient",
        },
      ],
      image: telegrambot,
      source_code_link: "https://github.com/buriihenry/Telegram-Bot",
    },


    {
      name: "TelemedAI",
      description:
        "TeleMed-Chatbot-Generative-AI is a Retrieval-Augmented Generation (RAG) based application designed to enhance telemedicine consultations. By leveraging generative AI techniques, the chatbot can understand and respond to queries,and provide medical information from the medical book journal(pdf).",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: telemedai,
      source_code_link: "https://github.com/buriihenry/TeleMed-Chatbot-Generative-AI",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };