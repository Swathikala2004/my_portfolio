import crmImg from "../assets/crm.png";
import vectorImg from "../assets/vectorshift.png";
import ecommerceImg from "../assets/ecommerce.png";
import bookingImg from "../assets/booking.png";

const projects = [
  {
    title: "AI-First CRM System",
    description:
      "AI-powered CRM that converts natural language into structured HCP interaction data.",
    tech: ["React", "FastAPI", "LangGraph", "LLM"],
    github: "https://github.com/Swathikala2004/hcp-crm-ai",
    live: "https://hcp-crm-ai.netlify.app",
    image: crmImg,
    details: `
🚀 Built an AI-First CRM System

• ChatGPT-style interface  
• Converts text → structured data  
• Auto-filled forms  
• AI follow-ups  

💻 Tech: React, FastAPI, LangGraph  
    `,
  },

  {
    title: "Device Booking System",
    description:
      "Centralized system for managing device reservations without conflicts.",
    tech: ["React", "Python", "PostgreSQL"],
    github: "https://github.com/Swathikala2004/device-booking-system",
    live: "https://device-booking-system.netlify.app",
    image: bookingImg,
    details: `
🚀 Device Booking System

• Conflict-free booking  
• Timezone handling  
• Admin controls  

💻 Tech: Python, PostgreSQL, React  
    `,
  },

  {
    title: "Pipeline Builder (VectorShift)",
    description:
      "Dynamic pipeline builder with node-based UI and DAG validation.",
    tech: ["React", "FastAPI"],
    github: "https://github.com/Swathikala2004/VectorShift",
    live: "https://vectorshift1.netlify.app",
    image: vectorImg,
    details: `
🚀 Pipeline Builder

• Drag & drop UI  
• DAG validation  
• Dynamic execution  

💻 Tech: React, FastAPI  
    `,
  },

  {
    title: "E-Commerce App",
    description:
      "Responsive shopping app with cart and product management.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Swathikala2004/ecommerce-react",
    live: "https://e-commercapplication.netlify.app/",
    image: ecommerceImg,
    details: `
🛒 E-Commerce App

• Product listing  
• Cart system  
• Responsive UI  

💻 Tech: React, JS, CSS  
    `,
  },
];

export default projects;