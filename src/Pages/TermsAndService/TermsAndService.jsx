import React from "react";
import "./TermsAndService.scss";

import { useEffect } from "react";

// Particles js Configuration file
import particles from "../../particlesjs-config";

function TermsAndService(props) {
	useEffect(() => {
		tsParticles.load("particles", particles);
	});
	return (
		<>
			<div className="tos">
				<div className="tos__header padding" id="particles">
					<h1 className="tos__header__heading">Terms of Service</h1>
				</div>
				<div className="tos__body padding">
					<p className="document">
												<br /> <br /> <span className="bold-head">Service Summary</span>
						<br /> <br /> Full-stack engineer delivering end-to-end web solutions—from modern frontend interfaces and scalable backend systems to cloud infrastructure, DevOps automation, and performance optimization. Skilled in designing high-reliability architectures, improving system efficiency, building secure APIs, and modernizing legacy platforms. Offers strategic technical consulting, cost-effective cloud solutions, and clean, maintainable code that supports long-term growth.
						This is the terms of the service.<br />
						<br />
						<span className="bold-head">💼 Provide</span><br /> <br />
						1. Full-Stack Application Development
						<br /> <br />
						🏆 End-to-end web app development (frontend + backend)
						<br /> <br />
						🏆 React, Next.js, Node.js, TypeScript, Python, Django, Express
						<br /> <br />
						🏆 Scalable architecture with clean, maintainable code
						<br /> <br />
						2. Frontend Engineering & UI Modernization
						<br /> <br />🏆 High-performance interfaces using React, Vue, Angular
						<br /> <br />🏆 Accessibility upgrades (WCAG 2.1 AA)
						<br /> <br />🏆 UX/UI optimization and responsive design
						<br /> <br />
						3. Backend Systems & API Development
						<br /> <br />🏆 REST & GraphQL API design
						<br /> <br />🏆 Microservices & event-driven architecture
						<br /> <br />🏆 Secure, high-throughput backend services (Java/Spring Boot, Node.js)
						<br /> <br />
						4. Cloud & DevOps Engineering
						<br /> <br />🎖️ AWS infrastructure setup and optimization
						<br /> <br />🎖️ Docker/Kubernetes deployments
						<br /> <br />🎖️ CI/CD pipeline automation (Jenkins, GitHub Actions)
						<br /> <br />
						5. Performance Optimization
						<br /> <br />🎖️ Profiling and refactoring slow codebases
						<br /> <br />🎖️ Reducing latency, memory usage, and cloud costs
						<br /> <br />🎖️ Improving system reliability and uptime
						<br /> <br />
						6. Database & Data Layer Engineering
						<br /> <br />🏅 PostgreSQL, MongoDB, Redis
						<br /> <br />🏅 Query optimization and schema design
						<br /> <br />🏅 Data caching strategies for high-traffic systems
						<br /> <br />
						7. System Architecture & Technical Leadership
						<br /> <br />🏅 Designing scalable, fault-tolerant systems
						<br /> <br />🏅 Code reviews, best practices, and mentorship
						<br /> <br />🏅 Leading cross-functional technical initiatives
						<br /> <br />
						8. AI, Automation & Tooling
						<br /> <br />🥇 Chatbot prototyping (Python/NLP)
						<br /> <br />🥇 Automated testing frameworks (Jest, Selenium)
						<br /> <br />🥇 Workflows that reduce manual effort and prevent bugs
						<br /> <br />
						9. Consulting & Technical Strategy
						<br /> <br />🥇 Modernizing legacy systems
						<br /> <br />🥇 Architecture reviews and scalability planning
						<br /> <br />🥇 Cloud cost-reduction strategies (up to 30%+ savings)
					</p>
				</div>
			</div>
		</>
	);
}
import "./TermsAndService.scss";

export default TermsAndService;
