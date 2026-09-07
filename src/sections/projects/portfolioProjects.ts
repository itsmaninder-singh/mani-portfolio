import { type PortfolioProject } from './portfolioConstellation';
import { preloadImage } from '../../utils/assetLoaders';
import { portfolioSkills } from './portfolioSkills';
import {
    PROJECT_DETAILS_IMAGE_SIZES,
    PROJECT_PREVIEW_IMAGE_SIZES,
    projectImagesById,
} from './projectImageAssets';

const withProjectScreenshots = (projects: PortfolioProject[]): PortfolioProject[] =>
    projects.map((project) => ({
        ...project,
        screenshot: projectImagesById[project.id]?.preview,
        detailsScreenshot: projectImagesById[project.id]?.details,
        skills: project.skills.map(
            (skill) =>
                portfolioSkills[portfolioSkills.findIndex((s) => s.id === skill)]?.label ?? skill,
        ),
    }));

const getAdjacentProjects = (
    project: PortfolioProject,
    projects: PortfolioProject[],
): PortfolioProject[] => {
    const index = projects.findIndex((candidate) => candidate.id === project.id);
    if (index < 0 || projects.length < 2) {
        return [];
    }

    return [
        projects[(index - 1 + projects.length) % projects.length],
        projects[(index + 1) % projects.length],
    ];
};

export const preloadAdjacentProjectScreenshots = (project: PortfolioProject): void => {
    const constellationProjects = portfolioProjects.filter(
        (candidate) => candidate.constellation.id === project.constellation.id,
    );
    const adjacentProjects = new Set([
        ...getAdjacentProjects(project, portfolioProjects),
        ...getAdjacentProjects(project, constellationProjects),
    ]);

    adjacentProjects.forEach((candidate) => {
        if (candidate.screenshot) {
            preloadImage(candidate.screenshot, PROJECT_PREVIEW_IMAGE_SIZES);
        }
    });
};

export const preloadAdjacentProjectDetails = async (project: PortfolioProject): Promise<void> => {
    const adjacentScreenshots = getAdjacentProjects(project, portfolioProjects).flatMap(
        (candidate) => (candidate.detailsScreenshot ? [candidate.detailsScreenshot] : []),
    );

    await Promise.allSettled(
        adjacentScreenshots.map((source) => preloadImage(source, PROJECT_DETAILS_IMAGE_SIZES)),
    );
};

const frontEndProjects: PortfolioProject[] = [
    {
        id: 'vector',
        title: 'Vector — AI Career Guidance Platform',
        label: 'Vector',

        description:
            'A full-stack AI career-guidance platform for college students, pairing cinematic front-end interactions built on React Three Fiber and Framer Motion with Gemini-powered recommendations on the backend.',

        period: 'Jun 2026 – Jul 2026',
        role: 'Full-Stack Developer',

        skills: [
            'front-end',
            'react',
            'tailwind',
            'framer-motion',
            'react-three-fiber',
            'nodejs',
            'expressjs',
            'mongodb',
            'gemini-api',
            'jwt-auth',
        ],

        domain: 'EdTech / AI Career Guidance',
        owner: 'Independent Personal Project',
        repoUrl: 'https://github.com/itsmaninder-singh/Ai-career-guidance-sys.git',

        constellation: {
            id: 'front-end',
            position: [-1.02, 0.82, -0.18],
            links: [],
        },
    },
];

const fullStackProjects: PortfolioProject[] = [
    {
        id: 'devconnect',
        title: 'DevConnect',
        label: 'DevConnect',

        description:
            'Architected a real-time student collaboration platform from the ground up. Built a live collaborative coding editor (Google-Docs-style) and real-time messaging/notifications over WebSockets, backed by a Redis caching layer and AWS S3 for file and media storage at scale.',

        period: 'Apr 2026 – Aug 2026',
        role: 'Full-Stack Developer',

        skills: [
            'full-stack',
            'front-end',
            'back-end',
            'react',
            'nodejs',
            'expressjs',
            'mongodb',
            'redis',
            'websockets',
            'jwt-auth',
            'rate-limiting',
            'role-based-access-control',
            'aws-s3',
            'real-time-systems',
        ],

        domain: 'EdTech / Real-Time Collaboration',
        owner: 'Independent Personal Project',
        repoUrl: 'https://github.com/itsmaninder-singh/Dev-Con.git',

        constellation: {
            id: 'full-stack',
            position: [0.95, 1.4, -0.06],
            links: ['edith', 'argus-kernel'],
        },
    },
    {
        id: 'edith',
        title: 'E.D.I.T.H — Offline UPI Payment System',
        label: 'E.D.I.T.H',

        description:
            'Emergency/Encrypted Decentralized Intelligent Transaction Hub — a UPI system that lets two devices complete a secure transaction with zero internet connectivity, using QR-based initiation and encrypted, signed transaction tokens to block tampering or replay. An automated sync-and-reconciliation engine queues pending transactions offline and settles them the moment connectivity returns.',

        period: 'Sep 2025 – Mar 2026',
        role: 'Full-Stack Developer',

        skills: [
            'full-stack',
            'java',
            'springboot',
            'react',
            'postgresql',
            'redis',
            'offline-first-architecture',
        ],

        domain: 'Fintech / Offline Payments',
        owner: 'Independent Personal Project',
        repoUrl: 'https://github.com/itsmaninder-singh/E.D.I.T.H..git',

        constellation: {
            id: 'full-stack',
            position: [0.485, 0.95, 0.14],
            links: ['devconnect', 'argus-kernel'],
        },
    },
    {
        id: 'argus-kernel',
        title: 'Argus Kernel — AI API Firewall for LLM Security',
        label: 'Argus Kernel',

        description:
            'An AI-native API firewall that protects LLM applications from prompt injection, sensitive data leakage (PII redaction), and malicious AI requests. Delivers real-time request inspection, policy enforcement, rate limiting, abuse protection, and security analytics across multiple AI providers including OpenAI, Gemini, Anthropic, Groq, and Ollama.',

        period: 'Jan 2026 – Present',
        role: 'Full-Stack Developer',

        skills: [
            'full-stack',
            'react',
            'nodejs',
            'expressjs',
            'mongodb',
            'redis',
            'docker',
            'jwt-auth',
            'rest-api',
            'llm-security',
            'rate-limiting',
            'system-design',
        ],

        domain: 'AI Security / LLM Firewall',
        owner: 'Independent Personal Project',
        repoUrl: 'https://github.com/itsmaninder-singh/Argus-Kernel.git',

        constellation: {
            id: 'full-stack',
            position: [0.72, 0.42, 0.08],
            links: ['edith', 'devconnect'],
        },
    },
];

const backEndProjects: PortfolioProject[] = [
    {
        id: 'repomind',
        title: 'RepoMind',
        label: 'RepoMind',
        description:
            'An AI-powered assistant that applies Retrieval-Augmented Generation (RAG) to let developers query any GitHub repository in plain English. A semantic search pipeline chunks and embeds repository source code into PostgreSQL pgvector, paired with the OpenAI API and prompt engineering to return accurate, context-grounded answers.',
        period: 'Jul 2026 – Sep 2026',
        role: 'Backend Developer',
        skills: [
            'back-end',
            'springboot',
            'postgresql',
            'pgvector',
            'openai-api',
            'rag',
            'semantic-search',
        ],
        domain: 'Developer Tools / AI',
        owner: 'Independent Personal Project',
        repoUrl: 'https://github.com/itsmaninder-singh/RepoMind.git',

        constellation: {
            id: 'back-end',
            position: [0.64, 1.14, -0.3],
            links: ['cloud-notes'],
        },
    },
    {
        id: 'cloud-notes',
        title: 'Serverless Cloud Notes App',
        label: 'Cloud Notes',

        description:
            'A serverless notes application built on AWS Lambda, DynamoDB, API Gateway, S3, and SNS, completed as a university systems assessment with a full project report and viva.',

        period: 'May 2026',
        role: 'Developer',

        skills: ['back-end', 'aws-lambda', 'dynamodb', 'api-gateway', 'aws-s3', 'serverless'],

        domain: 'Cloud Computing / Serverless',
        owner: 'Lovely Professional University — Course Assessment',

        constellation: {
            id: 'back-end',
            position: [-0.48, -0.92, -0.02],
            links: ['repomind'],
        },
    },
];

const constellationScrollOrder = {
    'front-end': 0,
    'full-stack': 1,
    'back-end': 2,
} satisfies Record<PortfolioProject['constellation']['id'], number>;

const compareProjectScrollOrder = (a: PortfolioProject, b: PortfolioProject): number =>
    constellationScrollOrder[a.constellation.id] - constellationScrollOrder[b.constellation.id] ||
    a.constellation.position[0] - b.constellation.position[0] ||
    b.constellation.position[1] - a.constellation.position[1];

const portfolioProjectsWithoutScreenshots: PortfolioProject[] = [
    ...frontEndProjects,
    ...fullStackProjects,
    ...backEndProjects,
].sort(compareProjectScrollOrder);

export const portfolioProjects: PortfolioProject[] = withProjectScreenshots(
    portfolioProjectsWithoutScreenshots,
);
