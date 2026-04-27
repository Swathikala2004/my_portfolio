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
    live: "https://hcp-crm-ai.netlify.app", // ✅ ADDED
    image: crmImg,
    details: `
🚀 Built an AI-First CRM System for Healthcare Interactions

• Conversational chat interface (ChatGPT-style)
• Converts natural language → structured CRM data
• Auto-filled interaction forms
• AI-suggested follow-up actions
• Hybrid workflow (manual + AI)

💻 Tech Stack:
React, FastAPI, LangGraph, Groq LLM, SQL

🧠 Impact:
Reduces manual data entry and improves productivity.
    `,
  },

  {
    title: "Device Booking System",
    description:
      "Centralized system for managing device reservations without conflicts.",
    tech: ["React", "Python", "PostgreSQL"],
    github:
      "https://github.com/Swathikala2004/device-booking-system",
    live: "https://device-booking-system.netlify.app", // ✅ ADDED
    image: bookingImg,
    details: `
🚀 Internal Device Booking System

🔹 Problem:
Shared devices caused scheduling conflicts across teams.

🔹 Solution:
Built centralized booking platform with timezone handling.

⚙️ Features:
• Conflict-free booking
• Timezone (UTC) management
• User booking limits
• Admin controls

💻 Tech Stack:
Python, PostgreSQL, React

🧠 Impact:
Improved team efficiency and avoided booking clashes.
    `,
  },

  {
    title: "Pipeline Builder (VectorShift)",
    description:
      "Dynamic pipeline builder with node-based UI and DAG validation.",
    tech: ["React", "FastAPI", "Graph Algorithms"],
    github: "https://github.com/Swathikala2004/VectorShift",
    live: "https://vectorshift1.netlify.app", // ✅ ADDED
    image: vectorImg,
    details: `
🚀 Pipeline Builder System

• Drag-and-drop node-based UI
• DAG validation system
• Dynamic pipeline execution
• Modular architecture

💻 Tech Stack:
React, FastAPI

🧠 Impact:
Helps visualize and manage complex workflows efficiently.
    `,
  },

  {
    title: "E-Commerce App",
    description:
      "Responsive shopping app with cart and product management.",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/Swathikala2004/ecommerce-react",
    live: "https://e-commercapplication.netlify.app/", // already there
    image: ecommerceImg,
    details: `
🛒 E-Commerce Web Application

• Product listing & details
• Add to cart functionality
• State management using React
• Responsive UI design

💻 Tech Stack:
React, JavaScript, HTML, CSS

🧠 Impact:
Improved understanding of UI design and state management.
    `,
  },
];

export default projects;