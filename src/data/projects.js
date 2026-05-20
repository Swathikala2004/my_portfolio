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

    github:
      "https://github.com/Swathikala2004/hcp-crm-ai",

    live:
      "https://hcp-crm-ai.netlify.app",

    image: crmImg,

    details: `
🚀 AI-First CRM System

Built an AI-powered CRM platform for healthcare interactions.

🔹 Features:
• Conversational chat interface
• AI-generated CRM data
• Auto-filled interaction forms
• AI follow-up suggestions

🛠 Tech Stack:
React.js, FastAPI, LangGraph, Groq LLM, SQL

🌐 Deployment:
Netlify & Render
`,
  },

  {
    title: "Device Booking System",

    description:
      "Centralized system for managing device reservations without conflicts.",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],

    github:
      "https://github.com/Swathikala2004/device-booking-system",

    live:
      "https://device-booking-system-7db1.vercel.app/",

    image: bookingImg,

    details: `
🚀 Internal Device Booking System

Built a centralized platform to manage shared device reservations efficiently.

🔹 Features:
• Conflict-free booking
• Timezone support
• Admin controls
• Booking limits

🛠 Tech Stack:
React.js, Node.js, Express.js, MongoDB

🌐 Deployment:
Render & Vercel
`,
  },

  {
    title: "Pipeline Builder (VectorShift)",

    description:
      "Dynamic pipeline builder with node-based UI and DAG validation.",

    tech: [
      "React",
      "FastAPI",
      "Graph Algorithms"
    ],

    github:
      "https://github.com/Swathikala2004/VectorShift",

    live:
      "https://vectorshift1.netlify.app",

    image: vectorImg,

    details: `
🚀 Pipeline Builder System

Built a dynamic workflow pipeline builder with DAG validation.

🔹 Features:
• Drag-and-drop node UI
• DAG validation
• Dynamic workflow execution
• Modular architecture

🛠 Tech Stack:
React.js, FastAPI

🌐 Deployment:
Netlify & Render
`,
  },

  {
    title: "E-Commerce App",

    description:
      "Responsive shopping app with cart and product management.",

    tech: [
      "React",
      "JavaScript",
      "HTML",
      "CSS"
    ],

    github:
      "https://github.com/Swathikala2004/ecommerce-react",

    live:
      "https://e-commercapplication.netlify.app/",

    image: ecommerceImg,

    details: `
🛒 E-Commerce Web Application

Built a responsive shopping application with cart functionality.

🔹 Features:
• Product listing
• Add to cart
• Responsive UI
• State management

🛠 Tech Stack:
React.js, JavaScript, HTML, CSS

🌐 Deployment:
Netlify
`,
  },

];

export default projects;