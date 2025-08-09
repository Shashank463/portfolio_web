import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    const project = [
        {
            title: "Ecommerce Website",
            description: "An ecommerce website built with React.js",
            link: "https://yushank.vercel.app/",
            github: "https://github.com/Shashank463",
        },
        {
            title: "To-Do App",
            description: "A simple To-Do app built with HTML, CSS & JAVASCRIPT.",
            link: "https://to-do-list-ten-snowy-41.vercel.app/",
            github: "https://github.com/Shashank463",
        },
        {
            title: "Digital Clock",
            description: "A digital clock built with HTML, CSS & JAVASCRIPT.",
            link: "https://clock-liard-nine.vercel.app/",
            github: "https://github.com/Shashank463",
        },
        {
            title: "Pixabay Clone",
            description: "An image search clone built with React.js.",
            link: "https://pixabay-clone2-0-7cb3.vercel.app/",
            github: "https://github.com/Shashank463",
        },
    ];
    return (
        <section
            id="projects"
            className="bg-gray-400 dark:bg-gray-700 transition-colors duration-300 min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold mb-7 md:text-6xl text-blue-900 dark:text-blue-400">
                    Projects
                </h1>
                <div className="grid gap-8 sm:grid-cols-2 lg-grid-cols-3 ">
                    {project.map((project_obj, indx) => (
                        <div
                            key={indx}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h2 className='"text-2xl font-semibold mt-1 mb-3 text-yellow-500 dark:text-blue-200"'>
                                {project_obj.title}
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {project_obj.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <Link
                                    className="inline-block text-blue-600 dark:text-blue-400 font-medium"
                                    to={"https://github.com/Shashank463"}
                                >
                                    View on GitHub →
                                </Link>

                                <Link
                                    className="inline-block text-blue-600 dark:text-blue-400 font-medium"
                                    to={project_obj.link}
                                >
                                    Visit →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
