'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* System Performance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">System Performance</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">E-Commerce Platform Performance</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Optimized page load times by 40% using server-side rendering (SSR)</li>
									<li>• Enhanced database query response time by 30% through indexing and optimization</li>
									<li>• Ensured 99.99% availability with real-time chat integration</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Real-Time Messaging App</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Built to support 50,000+ active users concurrently with minimal latency</li>
									<li>• Achieved real-time message delivery under 100ms</li>
									<li>• Increased user retention by 30% with private messaging and encryption features</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Infrastructure & DevOps */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Infrastructure & DevOps</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Cloud & Containerization</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Reduced AWS infrastructure costs by 35% through optimized usage of EC2, Lambda, and S3</li>
									<li>• Containerized applications with Docker, ensuring easy scalability</li>
									<li>• Deployed microservices on AWS with Docker and Kubernetes, achieving seamless scaling</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">CI/CD Pipeline Optimization</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Automated CI/CD pipeline with Jenkins and Docker, reducing deployment times by 50%</li>
									<li>• Integrated automated testing with 90% code coverage, ensuring quality delivery</li>
									<li>• Reduced production errors by 40% with comprehensive pre-production testing</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Development & Leadership */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Development & Leadership</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Code Quality & Team Leadership</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Led the adoption of TypeScript in backend services, improving maintainability</li>
									<li>• Established coding standards and conducted regular code reviews to maintain high-quality code</li>
									<li>• Reduced technical debt by 40% through refactoring and optimization efforts</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Mentorship & Team Impact</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Mentored 4 junior developers, helping them grow in backend and frontend technologies</li>
									<li>• Led 3 successful migrations, improving system architecture and performance</li>
									<li>• Created over 30 technical documentation guides to streamline onboarding and knowledge transfer</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
