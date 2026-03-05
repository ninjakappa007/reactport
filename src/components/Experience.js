import React from 'react'

const Experience = () => {
  return (
    <div className='lg:w-[1200px] w-[95%] mx-auto rounded-lg mt-10 p-4 sm:p-6 lg:p-10 bg-[#f3f4f6]'>
        <h3 className='text-center text-2xl font-semibold text-[#14b8a6] mb-5'>Experience</h3>
        
        <div className='mb-6'>
          <h4 className='text-lg sm:text-xl font-semibold text-gray-800 mb-2'>Application Developer</h4>
          <p className='text-base sm:text-lg text-[#14b8a6] font-medium mb-2'>Amazon Development Center India, Chennai</p>
          <p className='text-sm text-gray-600 mb-3'>Aug 2022 - Present</p>
          
          <ul className='text-sm sm:text-base lg:text-lg space-y-2 list-disc list-inside pl-2'>
            <li>Designed and developed a scalable backend platform using Python and Django, supporting 2,000+ users, 10,000+ devices, and 5,000+ monthly transactions</li>
            <li>Led PostgreSQL database design, schema modeling, and query performance optimization for high-volume workloads</li>
            <li>Designed secure authentication systems using OIDC, RBAC, and policy-based access control for enterprise security compliance</li>
            <li>Deployed backend services on AWS ECS Fargate using Docker, Gunicorn, ALB, and Amazon RDS PostgreSQL</li>
            <li>Implemented event-driven architectures using AWS EventBridge and Celery with AWS ElastiCache (Valkey) for background processing</li>
            <li>Integrated third-party APIs for workflow automation, procurement tracking, and data synchronization</li>
            <li>Collaborated in Agile/Scrum environment with CI/CD pipelines and Docker-based deployments</li>
            <li>Implemented Generative AI solutions using AWS Bedrock with custom RAG pipelines for semantic search and knowledge retrieval</li>
          </ul>
        </div>
        
        <div className='mt-6'>
          <h4 className='text-base sm:text-lg font-semibold text-gray-800 mb-2'>Education</h4>
          <p className='text-sm sm:text-base'>B.Tech in Civil Engineering</p>
          <p className='text-xs sm:text-sm text-gray-600'>Gandhi Institute for Technological Advancement, Bhubaneswar (2016-2020)</p>
        </div>
    </div>
  )
}

export default Experience