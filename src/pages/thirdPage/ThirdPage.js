import React from "react";
import "./ThirdPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

function ThirdPage() {
  const revealer = (e) => {
    const ele = document.getElementById(e);

    ele.classList.toggle("myinvisible");
    ele.classList.toggle("myvisible");
  };

  const hider = (e) => {
    const ele = document.getElementById(e);

    ele.classList.toggle("myvisible");
    ele.classList.toggle("myinvisible");
  };

  const projects = [
    {
      title: "Fluttersuite",
      description: `Fluttersuite is an AI-powered business management tool where users can build a website, manage a CRM, and track invoices, campaigns, and customer data. It allows users to automate and streamline their operations for enhanced productivity.`,
      techStack: ["React", "Next.js", "OpenAI", "Tailwind CSS", "Node.js"],
      liveDemo: "https://www.fluttersuite.com",
      image: "/images/fluttersuite.png"
    },
    {
      title: "Ecommerce Store",
      description: `A dynamic e-commerce store developed using Next.js on both the frontend and backend, hosted on Vercel. It offers server-side rendering, static site generation, and real-time updates on product availability and user orders. Customers can browse products, make purchases, and track their orders effortlessly.`,
      techStack: ["React", "NextJs", "TypeScript", "Tailwind CSS"],
      codeLink: "https://github.com/TImmykiller5/StoreClient.git",
      liveDemo: "https://store-client-livid.vercel.app/",
      image: "/images/ecommerceStore.png",
    },
    {
      title: "Ecommerce Store Admin",
      description: `A comprehensive admin site developed using Next.js, hosted on Vercel, providing a robust platform for managing an e-commerce store. It uses API routes and PrismaDB ORM connected to a PostgreSQL database hosted on Supabase. Administrators can oversee products, manage orders, and track customer data in real-time.`,
      techStack: ["React", "NextJs", "TypeScript", "PrismaDB"],
      codeLink: "https://github.com/TImmykiller5/StoreAdmin.git",
      liveDemo: "https://store-admin-nine-xi.vercel.app/",
      image: "/images/ecommerceAdmin.png",
    },
    {
      title: "Blog Site",
      description: `A dynamic website combining Django and React to provide a platform where users can explore engaging blog posts. This project offers a seamless user experience to access insightful content.`,
      techStack: ["React", "Django", "CSS", "Tailwind CSS"],
      codeLink: "https://github.com/TImmykiller5/blog.git",
      liveDemo: "https://blog-j0ho.onrender.com/",
      image: "/images/blog.png",
    },
    {
      title: "T-Shop Online Store",
      description: `T-Shop is an online store created using Django and React. It features a user login system and a cart for customers to explore, add products, and check out effortlessly.`,
      techStack: ["React", "Django", "Bootstrap"],
      codeLink: "https://github.com/TImmykiller5/fullstackStore",
      liveDemo: "https://tshop-tuyg.onrender.com/",
      image: "/images/tshop.png",
    },
    {
      title: "Capax Site",
      description: `A clone of the Capax website, providing a responsive and visually appealing design. It showcases the use of modern web development practices and techniques.`,
      techStack: ["React", "CSS", "JavaScript"],
      codeLink: "https://github.com/TImmykiller5/Capax-Copy.git",
      liveDemo: "https://capax-clone.vercel.app/",
      image: "/images/capax.png",
    },
  ];

  return (
    <div id="projects" className="flex mt-20 flex-col lg:gap-16  gap-10">
      <div
        className="text-center text-purple-300 text-3xl
       sm:font-bold "
      >
        Projects
      </div>
      {/* <div className="text-center lg:py-8 lg:px-6 pb-8 flex flex-col lg:flex-row lg:gap-6 lg:justify-around items-center gap-6 bg-neutral-950  rounded-2xl md:mx-20 lg:mx-28 mx-10 xl:mx-60">
        <div
          id="Demo5"
          onMouseEnter={() => revealer("Demo5")}
          onMouseLeave={() => hider("Demo5")}
          className="lg:w-1/2 lg:flex lg:justify-center relative lg:mx-0 lg:my-0 mx-8 my-6 sm:mx-10 sm:my-8  myinvisible"
        >
          <img
            alt="website preview"
            className="rounded-xl lg:w-full shadow-lg shadow-neutral-900 w-full   "
            src="/images/ecommerceStore.png"
          />
          <div
            style={{ top: "0%", left: "0%" }}
            className="h-full w-full  absolute flex items-center justify-center gap-4"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/TImmykiller5/StoreClient.git"
            >
              Code{" "}
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://store-client-livid.vercel.app/"
            >
              Live Demo{" "}
              <span>
                <FontAwesomeIcon icon={faLink} />
              </span>{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center lg:max-w-lg lg:items-center lg:justify-center gap-4 px-4 lg:px-0 lg:w-1/2 sm:px-20">
          <button
            onClick={() => {
              hider("Demo5");
            }}
            className=" text-lg w-fit  text-purple-300 sm:font-bold font-semibold"
          >
            Ecommerce Store
          </button>
          <div className=" text-sm sm:text-lg">
            {" "}
            A dynamic e-commerce store I developed using Next.js on both the
            frontend and backend, hosted on Vercel, offers a seamless shopping
            experience. By leveraging the capabilities of Next.js for
            server-side rendering and static site generation, this platform
            ensures fast loading times and smooth navigation. Connected to a
            custom API built with Next.js, the store efficiently handles data
            fetching, providing real-time updates on product availability and
            user orders. This integration delivers a user-friendly interface,
            allowing customers to browse products, make purchases, and track
            their orders effortlessly.
          </div>
          <div className="flex items-center gap-6 w-full flex-wrap justify-center">
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              React
            </div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              NextJs
            </div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              TypeScript
            </div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              Tailwind CSS
            </div>
          </div>
        </div>
      </div>
      <div className="text-center lg:py-8 lg:px-6 pb-8 flex flex-col lg:flex-row-reverse lg:gap-6 lg:justify-around items-center gap-6 bg-neutral-950  rounded-2xl md:mx-20 lg:mx-28 mx-10 xl:mx-60">
        <div
          id="Demo6"
          onMouseEnter={() => revealer("Demo6")}
          onMouseLeave={() => hider("Demo6")}
          className="lg:w-1/2 lg:flex lg:justify-center relative lg:mx-0 lg:my-0 mx-8 my-6 sm:mx-10 sm:my-8  myinvisible"
        >
          <img
            alt="website preview"
            className="rounded-xl lg:w-full shadow-lg shadow-neutral-900 w-full   "
            src="/images/ecommerceAdmin.png"
          />
          <div
            style={{ top: "0%", left: "0%" }}
            className="h-full w-full  absolute flex items-center justify-center gap-4"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/TImmykiller5/StoreAdmin.git"
            >
              Code{" "}
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://store-admin-nine-xi.vercel.app/"
            >
              Live Demo{" "}
              <span>
                <FontAwesomeIcon icon={faLink} />
              </span>{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center lg:max-w-lg lg:items-center lg:justify-center gap-4 px-4 lg:px-0 lg:w-1/2 sm:px-20">
          <button
            onClick={() => {
              hider("Demo6");
            }}
            className=" text-lg w-fit  text-purple-300 sm:font-bold font-semibold"
          >
            Ecommerce Store Admin
          </button>
          <div className=" text-sm sm:text-lg">
            {" "}
            A comprehensive admin site I developed using Next.js, hosted on
            Vercel, provides a robust platform for managing the e-commerce
            store. Utilizing API routes also created with Next.js, the admin
            interface connects seamlessly to a PostgreSQL database hosted on
            Supabase, leveraging the PrismaDB ORM for efficient data management.
            This setup allows administrators to effortlessly oversee product
            listings, manage orders, and track customer data in real-time. The
            integration of Next.js ensures fast and responsive interactions,
            while the deployment on Vercel guarantees reliability and
            scalability. This powerful combination delivers a streamlined and
            user-friendly experience for store administrators, enhancing
            operational efficiency and control.
          </div>
          <div className="flex items-center gap-6 w-full flex-wrap justify-center">
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              React
            </div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              NextJs
            </div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              TypeScript
            </div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              PrismaDB
            </div>
          </div>
        </div>
      </div>

      <div className="text-center lg:py-8 lg:px-6 pb-8 flex flex-col lg:flex-row lg:gap-6 lg:justify-around items-center gap-6 bg-neutral-950  rounded-2xl md:mx-20 lg:mx-28 mx-10 xl:mx-60">
        <div
          id="Demo1"
          onMouseEnter={() => revealer("Demo1")}
          onMouseLeave={() => hider("Demo1")}
          className="lg:w-1/2 lg:flex lg:justify-center relative lg:mx-0 lg:my-0 mx-8 my-6 sm:mx-10 sm:my-8  myinvisible"
        >
          <img
            alt="website preview"
            className="rounded-xl lg:w-full shadow-lg shadow-neutral-900 w-full   "
            src="/images/blog.png"
          />
          <div
            style={{ top: "0%", left: "0%" }}
            className="h-full w-full  absolute flex items-center justify-center gap-4"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/TImmykiller5/blog.git"
            >
              Code{" "}
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://blog-j0ho.onrender.com/"
            >
              Live Demo{" "}
              <span>
                <FontAwesomeIcon icon={faLink} />
              </span>{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center lg:max-w-lg lg:items-center lg:justify-center gap-4 px-4 lg:px-0 lg:w-1/2 sm:px-20">
          <button
            onClick={() => {
              hider("Demo1");
            }}
            className=" text-lg w-fit  text-purple-300 sm:font-bold font-semibold"
          >
            Blog Site
          </button>
          <div className=" text-sm sm:text-lg">
            {" "}
            A dynamic website I developed using Django and React, provides a
            platform where users can explore an array of engaging blog posts.
            Seamlessly combining these two technologies, this offers a
            user-friendly experience, letting visitors access insightful content
            effortlessly.
          </div>
          <div className="flex items-center gap-6 w-full flex-wrap justify-center">
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              React
            </div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              Django
            </div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              CSS
            </div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              Tailwind CSS
            </div>
          </div>
        </div>
      </div>

      <div className="text-center lg:py-8 lg:px-6 pb-8 flex flex-col lg:flex-row-reverse lg:gap-6 lg:justify-around items-center gap-6 bg-neutral-950  rounded-2xl md:mx-20 lg:mx-28 mx-10 xl:mx-60">
        <div
          className="lg:w-1/2 lg:flex lg:justify-center relative lg:mx-0 lg:my-0 mx-8 my-6 sm:mx-10 sm:my-8  myinvisible"
          id="Demo2"
          onMouseEnter={() => revealer("Demo2")}
          onMouseLeave={() => hider("Demo2")}
        >
          <img
            alt="website preview"
            className="rounded-xl lg:w-full shadow-lg shadow-neutral-900 w-full"
            src="/images/tshop.png"
          />
          <div
            style={{ top: "0%", left: "0%" }}
            className="h-full w-full  absolute flex items-center justify-center gap-4"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/TImmykiller5/fullstackStore"
            >
              Code{" "}
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://tshop-tuyg.onrender.com/"
            >
              Live Demo{" "}
              <span>
                <FontAwesomeIcon icon={faLink} />
              </span>{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center lg:max-w-lg lg:items-center lg:justify-center gap-4 px-4 lg:px-0 lg:w-1/2 sm:px-20">
          <button
            onClick={() => {
              hider("Demo2");
            }}
            className="w-fit text-lg  text-purple-300 sm:font-bold font-semibold"
          >
            T-Shop Online Store
          </button>
          <div className="text-sm sm:text-lg">
            {" "}
            Introducing T-Shop – an online store that I created with the dynamic
            duo of Django and React. With a user login system and a convenient
            cart feature, customers can effortlessly explore, add products to
            their carts, and check out. It's all about that tech-savvy
            convenience wrapped up in one neat package.
          </div>
          <div className="flex items-center gap-6 w-full flex-wrap justify-center">
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              React
            </div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              Django
            </div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              Bootstrap
            </div>
          </div>
        </div>
      </div>

      <div className="text-center lg:py-8 lg:px-6 pb-8 flex flex-col lg:flex-row lg:gap-6 lg:justify-around items-center gap-6 bg-neutral-950  rounded-2xl md:mx-20 lg:mx-28 mx-10 xl:mx-60">
        <div
          className="lg:w-1/2 lg:flex lg:justify-center relative lg:mx-0 lg:my-0 mx-8 my-6 sm:mx-10 sm:my-8  myinvisible"
          id="Demo3"
          onMouseEnter={() => revealer("Demo3")}
          onMouseLeave={() => hider("Demo3")}
        >
          <img
            alt="website preview"
            className="rounded-xl lg:w-full shadow-lg shadow-neutral-900 w-full"
            src="/images/capax.png"
          />
          <div
            style={{ top: "0%", left: "0%" }}
            className="h-full w-full  absolute flex items-center justify-center gap-4"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/TImmykiller5/Capax-Copy.git"
            >
              Code{" "}
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://capax-fidum.onrender.com/"
            >
              Live Demo{" "}
              <span>
                <FontAwesomeIcon icon={faLink} />
              </span>{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center lg:max-w-lg lg:items-center lg:justify-center gap-4 px-4 lg:px-0 lg:w-1/2 sm:px-20">
          <button
            onClick={() => {
              hider("Demo3");
            }}
            className=" text-lg w-fit text-purple-300 sm:font-bold font-semibold"
          >
            Capax Fidum Landing Page
          </button>
          <div className=" text-sm sm:text-lg">
            {" "}
            In a collaboration with both designer and client, I materialized the
            Capax Fidum landing page using React and Tailwind CSS. Seamlessly
            translating the Figma design into a vibrant online presence, this
            project showcases the power of unity and innovation. By merging
            aesthetics and functionality, an immersive user experience that
            exemplifies the essence of Capax Fidum was developed.
          </div>
          <div className="flex items-center gap-6 w-full flex-wrap justify-center">
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              React
            </div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              CSS
            </div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              Tailwind CSS
            </div>
          </div>
        </div>
      </div> */}
      {projects.map((project, index) => {
        const abs = index % 2;
        console.log(abs);
        return (
          <div key={index} className={clsx("text-center lg:py-8 lg:px-6 pb-8 flex flex-col lg:flex-row  lg:gap-6 lg:justify-around items-center gap-6 bg-neutral-950  rounded-2xl md:mx-20 lg:mx-28 mx-10 xl:mx-60", {
            "!flex-row-reverse": abs === 1,
            "lg:flex-row": abs === 0
          })}>
            <div
              className="lg:w-1/2 lg:flex lg:justify-center relative lg:mx-0 lg:my-0 mx-8 my-6 sm:mx-10 sm:my-8  myinvisible"
              id={`Demo${index + 1}`}
              onMouseEnter={() => revealer(`Demo${index + 1}`)}
              onMouseLeave={() => hider(`Demo${index + 1}`)}
            >
              <img
                alt="website preview"
                className="rounded-xl lg:w-full shadow-lg shadow-neutral-900 w-full"
                src={project.image}
              />
              <div
                style={{ top: "0%", left: "0%" }}
                className="h-full w-full  absolute flex items-center justify-center gap-4"
              >
                { project.codeLink && <a href={project.codeLink}>
                  Code{" "}
                  <span>
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                </a>}
                { project.liveDemo && <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.liveDemo}
                >
                  Live Demo{" "}
                  <span>
                    <FontAwesomeIcon icon={faLink} />
                  </span>{" "}
                </a>}
              </div>
            </div>

            <div className="flex flex-col items-center lg:max-w-lg lg:items-center lg:justify-center gap-4 px-4 lg:px-0 lg:w-1/2 sm:px-20">
              <button
                onClick={() => {
                  hider(`Demo${index + 1}`);
                }}
                className="w-fit text-lg  text-purple-300 sm:font-bold font-semibold"
              >
                {project.title}
              </button>
              <div className="text-sm sm:text-lg">
                {" "}
                {project.description}
              </div>
              <div className="flex items-center gap-6 w-full wrap justify-center">
                {project.techStack.map((tag, index) => (
                  <div key={index} className="bg-neutral-700 px-3 whitespace-nowrap py-1 rounded-lg shadow shadow-neutral-700">
                  {tag}
                </div>
                ))}
                {/* <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
                  React
                </div>
                <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
                  Tailwind CSS
                </div> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ThirdPage;
