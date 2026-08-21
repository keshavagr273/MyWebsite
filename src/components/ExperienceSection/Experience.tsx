import React from 'react'
import Experience from './ExperianceComponent'

const ExperienceSection = () => {
    return (
        <div className='flex flex-col py-10 '>
            <Experience
                logo="/logos/enalo.png"
                company="Enalo - Banking, Billing, and Payments"
                role="Backend Intern"
                duration="Sep 2025 - Oct 2025"
                points={[
                    "Implemented a secure GitHub OAuth 2.0 authentication system with encrypted token storage, session validation, and secure API access management, achieving 99.9% login success rate.",
                    "Integrated GitHub REST APIs for repository access, webhooks, and runner registration, reducing manual setup time by 40%.",
                    "Built a scalable serverless backend using AWS Lambda, Express.js, and PostgreSQL, improving response time by 35% under load.",
                    "Collaborated across engineering teams to accelerate sprint delivery and optimize backend performance."
                ]}
                rounded='top'
                skills={["AWS Lambda", "Node.js", "Express.js", "PostgreSQL", "OAuth 2.0", "GitHub APIs", "REST APIs"]}
            />
            <Experience
                logo="/logos/neocortex.jpg"
                company="NeoCortex AI"
                role="Software Engineering Intern"
                duration="May 2026 - July 2026"
                points={[
                    "Developed MemChat (SYNQ), a Chrome extension enabling persistent AI memory across ChatGPT, Claude, and Gemini with dense vector search (pgvector), Cohere embeddings, and interactive D3.js knowledge graphs.",
                    "Architected full-stack platform using React, TypeScript, Node.js, and MongoDB, building scalable APIs for chat archival, contextual retrieval, and semantic knowledge discovery.",
                    "Built Serp-AI, an AI-powered SEO extension delivering competitor insights, content gap analysis, and ranking recommendations using React, Firebase, and LLM workflows."
                ]}
                rounded='bottom'
                skills={['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'pgvector', 'Cohere API', 'Groq LLM', 'D3.js', 'Chrome Extensions']}
            />
        </div>
    )
}

export default ExperienceSection
