import React from "react";
import "./experince.css"

function Experience() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    const experiences = [
        {
            title: "Software Engineer",
            company: "Codementees – Bengaluru, IN",
            period: "Nov 2024 – Present",
            description: `
        • Built a Full-Stack Mentorship Platform using the MERN stack (MongoDB, Express.js, React.js, Node.js), enabling 500+ users to connect with tech mentors for coding mentorship, career advice, and educational content.
        • Implemented Real-Time Messaging with Socket.io, facilitating seamless communication between 500+ mentors and mentees, boosting user engagement by 20%.
        • Optimized database performance by 30% through efficient schema design and indexing, ensuring scalability for growing user traffic.
      `,
        },
        {
            title: "Backend Developer",
            company: "Quitepaper – Bikaner, IN",
            period: "Feb 2024 – Nov 2024",
            description: `
        • Designed and developed a scalable library management system that features seat booking, CRM modules, and real-time notifications, including an automatic seat allocation algorithm that reduces booking conflicts by 30%.
        • Integrated a Secure Payment Gateway for 500+ daily users, deployed the platform in Render with 99.9% uptime, and delivered 10+ new features to improve usability and engagement.
        • Optimized system performance by implementing efficient algorithms and ensuring seamless integration across platforms, enhancing user satisfaction by 25%.
      `,
        },
        {
            title: "Full Stack Developer",
            company: "Pro Learning Tree – Chandigarh, IN",
            period: "Aug 2023 – Nov 2024",
            description: `
        • Developed a full-stack MERN web app for visa-related programs with RBAC, allowing super admins to manage institutes and user roles.
        • Implemented features for institutes to upload educational content (audio, PDFs, MCQs, cue cards), manage student queries, track fees, attendance, and upload results. Also, college listing module with filters (course, country, city) to help users explore and apply to institutes.
        • Utilized RESTful APIs, Agile methodologies, and Jira for scalable backend development, task management, and efficient project delivery.
      `,
        },
    ];

    return (
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-4 col-md-12 border-start border-secondary">
                    <div class="list-group">
                        {experiences.map((experience, index) => (
                            <a
                                // href="#"
                                key={index}
                                role="button"
                                onClick={() => setSelectedItemIndex(index)}
                                class={`list-group-item list-group-item-action border-0 ${selectedItemIndex === index
                                    ? "active bg-dark text-light border-start border-warning"
                                    : "bg-transparent text-white"
                                    }`}
                                style={{
                                    borderLeftWidth: selectedItemIndex === index ? "4px" : "0",
                                }}
                            >
                                {experience.period}
                            </a>
                        ))}
                    </div>
                </div>

                <div class="col-lg-8 col-md-12 bg-dark text-white p-4 rounded custom-style" >
                    <h1 class="text-warning mb-2">
                        {experiences[selectedItemIndex].title}
                    </h1>
                    <h2 class="text-info mb-3">
                        {experiences[selectedItemIndex].company}
                    </h2>
                    <p class="text-white">
                        {experiences[selectedItemIndex].description}
                    </p>
                </div>
            </div>
        </div>



    );
}

export default Experience;
