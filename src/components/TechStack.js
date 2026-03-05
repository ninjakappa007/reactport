import React from 'react';


const TechStack = () => {
  return (
    <div className='lg:w-[1200px] w-[95%] mx-auto rounded-lg mt-10 p-4 sm:p-6 lg:p-10 bg-[#030712]' id='techstack'>
      <p className='text-center text-[#ea580c] text-2xl sm:text-3xl font-semibold mb-5'>Technical Skills</p>
      <div className='flex justify-center items-center'>
        <div className='text-slate-200 w-full max-w-4xl font-light text-sm sm:text-base lg:text-xl text-center lg:text-left'>
          <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-6'>Application Developer & Backend Specialist</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-left'>
          <div className='space-y-3'>
          <p className='mb-3'>
            <strong>Languages:</strong> Python, SQL, JavaScript, HTML, CSS
          </p>
          <p className='mb-3'>
            <strong>Frameworks:</strong> Django, Django REST Framework, Django ORM, Gunicorn, React.js
          </p>
          <p className='mb-3'>
            <strong>Database:</strong> PostgreSQL, DynamoDB, Redis (Caching)
          </p>
          </div>
          <div className='space-y-3'>
          <p className='mb-3'>
            <strong>AWS:</strong> ECS, ECR, RDS, EventBridge, Lambda, SQS, ALB, Secrets Manager, WAF, SES, CloudWatch, Fargate, Bedrock
          </p>
          <p className='mb-3'>
            <strong>DevOps & Tools:</strong> Docker, CI/CD, Git, Linux/Unix, JIRA, Confluence, Agile
          </p>
          </div>
          </div>
          <p className='mt-6 text-center lg:text-left'>
            Backend-focused developer with 3.8 years of experience in Python, Django, and AWS at Amazon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
