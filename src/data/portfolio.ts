export interface Experience { company: string; role: string; period: string; bullets: string[] }
export interface Education { school: string; degree: string; location: string; period: string }
export interface SkillGroup { label: string; items: string[] }
export interface Project { id: string; title: string; category: string; subtitle: string; description: string; contributions: string[]; tags: string[]; github?: string; liveDemo?: string }
export const profile = {
  "name": "Gibran Myageri",
  "role": "Full Stack Software Engineer",
  "email": "gibranmyageri@gmail.com",
  "github": "https://github.com/gibran96",
  "linkedin": "https://www.linkedin.com/in/gibran-myageri/",
  "location": "Bethesda, MD",
  "summary": "Software Engineer with 6 years of experience building and modernizing enterprise applications, backend services, and cloud-based systems using Java, Spring Boot, React, TypeScript, Python, and Azure. Experienced in microservices, REST APIs, data-processing platforms, CI/CD automation, production reliability, system design, and technical leadership across banking and financial-services environments.",
  "intro": "I build dependable applications, backend services, and data platforms. Six years of engineering experience across banking and financial services, from system design to production.",
  "bio": "I'm a software engineer who enjoys turning complex requirements into useful, reliable software. My work spans React interfaces, Java and Python services, data pipelines, and cloud infrastructure. I earned my MS in Computer Science at Northeastern University, where I also explored applied AI through hands-on projects."
};

export const experience: Experience[] = [
  {
    "company": "EagleBank",
    "period": "June 2025 - Present",
    "role": "Full Stack Software Engineer",
    "bullets": [
      "Joined as the bank's first software engineering hire, architecting and building production full-stack applications and REST APIs using React and Python FastAPI for 200+ daily users with 99.9% up-time.",
      "Built an internal data-processing platform and Dagster pipelines to ingest, validate, transform, and store financial data, with pipeline tracking and audit logs for downstream applications supporting approximately 300 users.",
      "Designed and implemented end-to-end CI/CD pipelines using self-hosted GitHub Actions runners on Azure VMs, reducing deployment lead time by 80% and eliminating 10 hours of manual oversight per week.",
      "Led technical design and architecture decisions, conducted code reviews, and mentored engineers while driving applications from requirements through deployment and production support."
    ]
  },
  {
    "company": "Cognizant Technology Solutions",
    "period": "November 2021 - May 2023",
    "role": "Full Stack Engineer",
    "bullets": [
      "Developed full-stack insurance applications using Angular, TypeScript, and Java Spring Boot APIs, replacing legacy technologies and increasing quote completion by 10%.",
      "Modernized deployment processes by implementing CI/CD pipelines using CloudBees CD and Jenkins, improving engineering productivity by 30%.",
      "Led production deployments and monitored application health using Jenkins, CloudBees CD, Heroku, and Splunk, supporting observability and production incident resolution.",
      "Resolved application and rendering bottlenecks and implemented performance improvements, increasing application performance by 15% and contributing to a 20% increase in website traffic."
    ]
  },
  {
    "company": "Tata Consultancy Services",
    "period": "September 2018 - October 2021",
    "role": "Software Engineer",
    "bullets": [
      "Redesigned ABN AMRO banking applications using Java Spring Boot services and Angular, improving system response time by 30%.",
      "Directed a cloud migration to Microsoft Azure using Spring Boot and microservices, improving scalability while reducing infrastructure costs by 10%.",
      "Engineered a real-time SWIFT GPI cross-border payment tracking application using Java Spring Boot services, improving payment visibility and reducing tracking time by 40%.",
      "Led technical discussions with business and engineering stakeholders, translating requirements into scalable solutions and coordinating delivery across cross-functional teams."
    ]
  }
];

export const education: Education[] = [
  {
    "school": "Northeastern University",
    "degree": "Master of Science in Computer Science",
    "location": "Boston, MA",
    "period": "April 2025"
  },
  {
    "school": "SRM Institute of Science and Technology",
    "degree": "Bachelor of Technology in Electrical and Electronics Engineering",
    "location": "Chennai, India",
    "period": "July 2014 – May 2018"
  }
];

export const skills: SkillGroup[] = [
  {
    "label": "Programming Languages",
    "items": [
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "Go"
    ]
  },
  {
    "label": "Backend & APIs",
    "items": [
      "Spring Boot",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "Microservices"
    ]
  },
  {
    "label": "Frontend",
    "items": [
      "React",
      "Angular",
      "Next.js",
      "Tailwind CSS"
    ]
  },
  {
    "label": "Databases & Data",
    "items": [
      "SQL",
      "Oracle SQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "DynamoDB"
    ]
  },
  {
    "label": "Data Engineering",
    "items": [
      "Dagster",
      "Data Ingestion",
      "Data Transformation",
      "Data Validation"
    ]
  },
  {
    "label": "Cloud & Infrastructure",
    "items": [
      "Azure",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform"
    ]
  },
  {
    "label": "CI/CD & Observability",
    "items": [
      "Jenkins",
      "GitHub Actions",
      "CloudBees CD",
      "Splunk"
    ]
  }
];

export const projects: Project[] = [
  {
    "id": "neu-buddy",
    "title": "NEU Buddy",
    "category": "Applied AI",
    "subtitle": "A clearer path to course selection.",
    "description": "An LLM-based chatbot helping students explore course information, prerequisites, and reviews.",
    "contributions": [
      "Trained the model with reinforcement learning from human feedback using Hugging Face TRL.",
      "Used BM25 search to match queries and associate responses with the right questions.",
      "Performed supervised fine-tuning on a curated dataset to improve query understanding and response quality."
    ],
    "tags": [
      "LLMs",
      "Hugging Face TRL",
      "RLHF",
      "BM25"
    ],
    "github": "https://github.com/gibran96/course-registration-chatbot"
  },
  {
    "id": "ai-translator",
    "title": "AI Language Translator",
    "category": "Machine learning",
    "subtitle": "Translation, from text to documents.",
    "description": "A T5-powered translation application with a React interface for text and PDF translation.",
    "contributions": [
      "Built the translation workflow using the T5 model from Hugging Face.",
      "Trained and optimized the model with Adam on Google Colab.",
      "Connected the React interface to a Jupyter Notebook backend."
    ],
    "tags": [
      "T5",
      "Hugging Face",
      "React",
      "Python",
      "Google Colab"
    ],
    "github": "https://github.com/gibran96/ai-doc-translator"
  },
  {
    "id": "e-kart",
    "title": "E-kart",
    "category": "Full-stack development",
    "subtitle": "An end-to-end shopping experience.",
    "description": "An e-commerce application covering product discovery, shopping, checkout, and order management.",
    "contributions": [
      "Implemented wishlists, carts, reviews, and responsive interfaces with React Material.",
      "Built login, checkout, receipt downloads, and order cancellation.",
      "Used React, Node.js, and MongoDB, with hosting on Render and Netlify."
    ],
    "tags": [
      "React",
      "Node.js",
      "MongoDB",
      "Material UI"
    ],
    "github": "https://github.com/vinubaburaj/ekart-web-app"
  }
];
