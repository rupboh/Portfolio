// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   tags: string[];
//   link?: string;
//   image?: string;
// }

// export default function ProjectCard({
//   title,
//   description,
//   tags,
//   link,
// }: ProjectCardProps) {
//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-light-200 h-full flex flex-col"
//       whileHover={{ y: -5 }}
//       transition={{ duration: 0.3 }}
//     >
//       <h3 className="text-xl font-bold text-light-900 mb-3">{title}</h3>
//       <p className="text-light-600 mb-4 flex-grow">{description}</p>

//       <div className="flex flex-wrap gap-2 mb-4">
//         {tags.map((tag) => (
//           <span
//             key={tag}
//             className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       {link && (
//         <Link
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-primary hover:text-secondary font-semibold transition-colors inline-flex items-center gap-2"
//         >
//           View Project →
//         </Link>
//       )}
//     </motion.div>
//   );
// }
