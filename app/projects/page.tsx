// "use client";

// import { motion } from "framer-motion";
// import { containerVariants, fadeInUp } from "@/lib/animations";
// import ProjectCard from "@/components/ProjectCard";

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description: "A full-stack e-commerce platform with payment integration, user authentication, and product management.",
//     tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
//     link: "#",
//   },
//   {
//     title: "Task Management App",
//     description: "Real-time collaborative task management tool with user authentication and websocket updates.",
//     tags: ["React", "Node.js", "MongoDB", "Socket.io"],
//     link: "#",
//   },
//   {
//     title: "AI Chat Application",
//     description: "Interactive chat application powered by AI with conversation history and user profiles.",
//     tags: ["Next.js", "OpenAI API", "PostgreSQL", "Prisma"],
//     link: "#",
//   },
//   {
//     title: "Portfolio Website",
//     description: "Modern portfolio website with smooth animations and responsive design.",
//     tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
//     link: "#",
//   },
//   {
//     title: "Weather Dashboard",
//     description: "Real-time weather dashboard with location search and weather forecasting.",
//     tags: ["React", "Weather API", "Chart.js", "Axios"],
//     link: "#",
//   },
//   {
//     title: "Blog Platform",
//     description: "Full-featured blog platform with markdown support, comments, and social sharing.",
//     tags: ["Next.js", "Markdown", "Firebase", "Tailwind CSS"],
//     link: "#",
//   },
// ];

// export default function Projects() {
//   return (
//     <motion.section
//       className="min-h-screen py-20 px-6 bg-light-50"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <div className="max-w-6xl mx-auto">
//         <motion.h1
//           className="text-5xl md:text-6xl font-bold text-light-900 mb-12"
//           variants={fadeInUp}
//         >
//           My <span className="text-primary">Projects</span>
//         </motion.h1>

//         <motion.p
//           className="text-xl text-light-600 mb-16 max-w-2xl"
//           variants={fadeInUp}
//         >
//           Here are some of my recent projects showcasing my skills in full-stack development, 
//           modern technologies, and problem-solving.
//         </motion.p>

//         <motion.div
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={containerVariants}
//         >
//           {projects.map((project) => (
//             <motion.div key={project.title} variants={fadeInUp}>
//               <ProjectCard {...project} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }
