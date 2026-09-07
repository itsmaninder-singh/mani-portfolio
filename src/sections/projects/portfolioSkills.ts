import type { PortfolioSkill } from './portfolioConstellation';

const coreDisciplineSkills: PortfolioSkill[] = [
    { id: 'interface', label: 'Interface' },
    { id: 'systems', label: 'Systems' },
    { id: 'motion-3d', label: 'Motion 3D' },
];

const fullstackSkills: PortfolioSkill[] = [{ id: 'full-stack', label: 'Full-Stack Development' }];

const frontendSkills: PortfolioSkill[] = [
    { id: 'front-end', label: 'Front-End Development' },
    { id: 'react', label: 'React' },
    { id: 'nextjs', label: 'Next.js' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'html', label: 'HTML' },
    { id: 'css', label: 'CSS' },
    { id: 'tailwind', label: 'Tailwind CSS' },
    { id: 'framer-motion', label: 'Framer Motion' },
    { id: 'responsive-design', label: 'Responsive Design' },
    { id: 'glassmorphism-ui', label: 'Glassmorphism UI' },
];

const backendAndDataSkills: PortfolioSkill[] = [
    { id: 'back-end', label: 'Back-End Development' },
    { id: 'nodejs', label: 'Node.js' },
    { id: 'expressjs', label: 'Express.js' },
    { id: 'springboot', label: 'Spring Boot' },
    { id: 'spring-security', label: 'Spring Security' },
    { id: 'java', label: 'Java' },
    { id: 'cpp', label: 'C++' },
    { id: 'rest-api', label: 'REST APIs' },
    { id: 'jwt-auth', label: 'JWT Auth' },
    { id: 'websockets', label: 'WebSockets' },
    { id: 'socket-io', label: 'Socket.io' },
    { id: 'mongodb', label: 'MongoDB' },
    { id: 'mysql', label: 'MySQL' },
    { id: 'postgresql', label: 'PostgreSQL' },
    { id: 'pgvector', label: 'pgvector' },
    { id: 'redis', label: 'Redis' },
    { id: 'qdrant', label: 'Qdrant' },
];

const cloudAndDeliverySkills: PortfolioSkill[] = [
    { id: 'aws', label: 'AWS' },
    { id: 'aws-lambda', label: 'AWS Lambda' },
    { id: 'aws-s3', label: 'AWS S3' },
    { id: 'dynamodb', label: 'DynamoDB' },
    { id: 'api-gateway', label: 'API Gateway' },
    { id: 'docker', label: 'Docker' },
    { id: 'github-actions', label: 'GitHub Actions' },
    { id: 'ci-cd', label: 'CI/CD' },
    { id: 'serverless', label: 'Serverless Architecture' },
];

const aiSkills: PortfolioSkill[] = [
    { id: 'llm', label: 'LLM' },
    { id: 'llm-security', label: 'LLM Security' },
    { id: 'rag', label: 'Retrieval-Augmented Generation' },
    { id: 'openai-api', label: 'OpenAI API' },
    { id: 'gemini-api', label: 'Gemini API' },
    { id: 'ai-integration', label: 'AI Integration' },
    { id: 'semantic-search', label: 'Semantic Search' },
];

const architectureAndPracticeSkills: PortfolioSkill[] = [
    { id: 'multi-tenant-architecture', label: 'Multi-Tenant Architecture' },
    { id: 'system-design', label: 'System Design' },
    { id: 'weighted-matching-algorithms', label: 'Matching Algorithms' },
    { id: 'offline-first-architecture', label: 'Offline-First Architecture' },
    { id: 'real-time-systems', label: 'Real-Time Systems' },
    { id: 'rate-limiting', label: 'Rate Limiting' },
    { id: 'role-based-access-control', label: 'Role-Based Access Control' },
];

const motionAndPortfolioEngineeringSkills: PortfolioSkill[] = [
    { id: 'gsap', label: 'GSAP' },
    { id: 'gsap-scrolltrigger', label: 'GSAP ScrollTrigger' },
    { id: 'gsap-scrollsmoother', label: 'GSAP ScrollSmoother' },
    { id: 'three-js', label: 'Three.js' },
    { id: 'webgl', label: 'WebGL' },
    { id: 'glsl', label: 'GLSL' },
    { id: '3d-interaction', label: '3D Interaction' },
    { id: 'particle-systems', label: 'Particle Systems' },
    { id: 'react-three-fiber', label: 'React Three Fiber' },
];

export const portfolioSkills: PortfolioSkill[] = [
    ...coreDisciplineSkills,
    ...fullstackSkills,
    ...frontendSkills,
    ...backendAndDataSkills,
    ...cloudAndDeliverySkills,
    ...aiSkills,
    ...architectureAndPracticeSkills,
    ...motionAndPortfolioEngineeringSkills,
];
