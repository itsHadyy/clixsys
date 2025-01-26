import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Contact from '../components/Contact';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null); // Store the clicked project
    const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide in the slideshow
    const modalRef = useRef(null); // Reference for the modal
    const autoSlideInterval = useRef(null); // Reference for automatic slideshow timer

    const projects = [
        {
            name: "Smart Home Automation",
            description: "Integrated systems redefining the modern home.",
            images: ["./media/img05.jpeg", "./media/img02.jpeg", "./media/img03.jpeg"],
        },
        {
            name: "Energy Efficiency Solutions",
            description: "Optimizing energy for a sustainable future.",
            images: ["./media/img06.jpeg", "./media/img04.jpeg", "./media/img01.jpeg"],
        },
        {
            name: "Intelligent Office Spaces",
            description: "Creating workplaces of tomorrow.",
            images: ["./media/img03.jpeg", "./media/img07.jpeg", "./media/img05.jpeg"],
        },
        {
            name: "Urban IoT Integration",
            description: "Transforming cities into smart ecosystems. Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.",
            images: ["./media/img01.jpeg", "./media/img05.jpeg", "./media/img02.jpeg"],
        },

        {
            name: "Smart Home Automation",
            description: "Integrated systems redefining the modern home.",
            images: ["./media/img05.jpeg", "./media/img02.jpeg", "./media/img03.jpeg"],
        },
        {
            name: "Urban IoT Integration",
            description: "Transforming cities into smart ecosystems. Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.Transforming cities into smart ecosystems.",
            images: ["./media/img01.jpeg", "./media/img05.jpeg", "./media/img02.jpeg"],
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentSlide(0); // Reset to the first slide
        gsap.fromTo(
            modalRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
        );
    };

    const closeModal = () => {
        gsap.to(modalRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power3.in",
            onComplete: () => setSelectedProject(null),
        });
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % selectedProject.images.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    };

    return (
        <div className="container proj">
            <div className="projects-page">
                <h1 className="projects-title">Our Futuristic Projects</h1>
                <p className="projects-tagline">
                    Shaping Tomorrow’s Innovations. Pushing Boundaries, One Project at a Time.
                </p>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            id={`project-${index}`}
                            className="project-card"
                            onMouseEnter={() =>
                                gsap.to(`#project-${index}`, { scale: 1.05, boxShadow: "0px 10px 30px rgba(92, 92, 92, 0.5)", duration: 0.3 })
                            }
                            onMouseLeave={() =>
                                gsap.to(`#project-${index}`, { scale: 1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", duration: 0.3 })
                            }
                            onClick={() => openModal(project)}
                        >
                            <img src={project.images[0]} alt={project.name} className="project-image" />
                            <div className="project-info">
                                <h2 className="project-name">{project.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modalContainer">
                        <div className="modalContainer02">
                            <div
                                ref={modalRef}
                                className="modal projectsModal"
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                            >
                                <button className="close-btn" onClick={closeModal}>
                                    ×
                                </button>
                                <div className="slideshow">
                                    <button className="prev-btn" onClick={handlePrevSlide}>
                                        ‹
                                    </button>
                                    <img
                                        src={selectedProject.images[currentSlide]}
                                        alt={`Slide ${currentSlide + 1}`}
                                        className="slide-image"
                                    />
                                    <button className="next-btn" onClick={handleNextSlide}>
                                        ›
                                    </button>
                                </div>
                                <h2 className="modal-title">{selectedProject.name}</h2>
                                <p className="modal-description">{selectedProject.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Contact />
        </div>
    );
};

export default Projects;