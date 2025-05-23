'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Software Engineering Projects & Expertise
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'E-Commerce Platform',
							description: 'Developed a fully-featured e-commerce platform with a high traffic capacity and integrated payment solutions.',
							details: [
								'Implemented React.js for the frontend with Ruby on Rails for backend APIs',
								'Integrated Stripe for payment processing and Firebase for real-time chat',
								'Optimized performance using server-side rendering (SSR) to reduce load time by 40%',
								'Led an Agile team, delivering features on time and within scope',
							],
							tech: ['React.js', 'Ruby on Rails', 'Stripe', 'Firebase', 'PostgreSQL', 'Docker'],
						},
						{
							title: 'Real-Time Messaging Application',
							description: 'Built a real-time chat application with scalable architecture for thousands of concurrent users.',
							details: [
								'Developed using Node.js, Socket.io, and MongoDB',
								'Designed and implemented secure message encryption using AES',
								'Deployed application on AWS using Docker, ensuring high availability',
								'Implemented features like private messaging and user presence tracking',
							],
							tech: ['Node.js', 'Socket.io', 'MongoDB', 'AWS', 'Docker', 'JWT'],
						},
						{
							title: 'Internal HR Management System',
							description: 'Designed and implemented a robust employee management system for internal use.',
							details: [
								'Developed using Java, Spring Boot for the backend, and PostgreSQL for database management',
								'Created microservices for payroll processing and attendance tracking',
								'Integrated automated monitoring and backup systems to reduce downtime by 40%',
								'Collaborated with frontend developers to integrate APIs and optimize user experience',
							],
							tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes', 'Jenkins'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
