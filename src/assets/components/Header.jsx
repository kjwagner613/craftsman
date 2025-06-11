import React from 'react';

const header = (props) => {
    return (
        <div className='container'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>I'm a methodical problem-solver, passionate about tech, software development, and optimizing workflows. Over the last 30 years, I’ve built a reputation for resourcefulness, clarity in troubleshooting, and a strong focus on scalable solutions. Whether refining backend architecture, troubleshooting cross-platform compatibility, or designing user-friendly interfaces, I thrive on finding efficient, reliable answers.</p>
            <p>Beyond technical expertise, I value collaboration and knowledge-sharing. I enjoy helping others streamline their environments, ensuring that tech works for people—not against them. My work spans full-stack development, network configurations, cloud integration, and automation, and I take pride in creating audit-proof, business-aligned solutions that empower both teams and individuals.</p>
            <p>Outside of code and configurations, I approach challenges with persistence and logic, always striving for structured, user-focused outcomes. If you're working on something ambitious, complex, or just frustrating, I’m the kind of person who finds a way to make it work—and make it make sense.</p>
        </div>
    );
};

export default header;
