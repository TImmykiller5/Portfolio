import React from "react";
import "./ThirdPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <div id="projects" className="flex mt-20 flex-col lg:gap-16  gap-10">
      <div
        className="text-center text-purple-300 text-3xl
       sm:font-bold "
      >
        Projects
      </div>
      <div className="text-center lg:py-8 lg:px-6 pb-8 flex flex-col lg:flex-row lg:gap-6 lg:justify-around items-center gap-6 bg-neutral-950  rounded-2xl md:mx-20 lg:mx-28 mx-10 xl:mx-60">
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
      </div>
      <div className="text-center lg:py-8 lg:px-6 pb-8 flex flex-col lg:flex-row-reverse lg:gap-6 lg:justify-around items-center gap-6 bg-neutral-950  rounded-2xl md:mx-20 lg:mx-28 mx-10 xl:mx-60">
        <div
          className="lg:w-1/2 lg:flex lg:justify-center relative lg:mx-0 lg:my-0 mx-8 my-6 sm:mx-10 sm:my-8  myinvisible"
          id="Demo4"
          onMouseEnter={() => revealer("Demo4")}
          onMouseLeave={() => hider("Demo4")}
        >
          <img
            alt="website preview"
            className="rounded-xl lg:w-full shadow-lg shadow-neutral-900 w-full"
            src="/images/portfolio.png"
          />
          <div
            style={{ top: "0%", left: "0%" }}
            className="h-full w-full  absolute flex items-center justify-center gap-4"
          >
            <a href="/">
              Code{" "}
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/TImmykiller5/Portfolio.git"
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
              hider("Demo4");
            }}
            className="w-fit text-lg  text-purple-300 sm:font-bold font-semibold"
          >
            This Portfolio Page
          </button>
          <div className="text-sm sm:text-lg">
            {" "}
            Welcome to my digital showcase, where creativity and technology
            converge. Explore a collection of my transformative projects. This
            platform is a testament to my dedication to merging design and
            innovation, crafting immersive user experiences that resonate. Join
            me in this journey where each pixel tells a story of collaboration,
            craftsmanship, and digital evolution.
          </div>
          <div className="flex items-center gap-6 w-full wrap justify-center">
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              React
            </div>
            {/* <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">Django</div> */}
            <div className="bg-neutral-700 px-3 py-1 rounded-lg shadow shadow-neutral-700">
              Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
