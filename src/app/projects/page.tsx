import Image from "next/image";
import youtube from "@/app/assets/images/youtube.png"
import shoppyglobe from '@/app/assets/images/shoppyglobe.png'
const Projects = () => <div>
  <h1 className="text-2xl md:text-4xl p-5 text-center"> Projects  </h1>
  <div className="flex justify-center items-center ">
    <div className="flex flex-col ">
      <h2 className="text-center text-xl md:text-3xl">1.Youtube Clone</h2>
      <div className=" w-[90vw] md:w-[70vw] mb-2 md:mb-6 border-2 border-black p-2 md:p-3">
        <div className="flex justify-center items-center ">
          <Image src={youtube} alt="youtube" className="h-52 md:h-80 object-contain"></Image>
        </div>
        <div className="p-2">
        <p>This is a video streaming platform using the MERN stack (MongoDB, Express.js, React, Node.js) with a focus on real-world functionality and scalable architecture.</p>
        <strong>Key Features</strong>
        <ul className="list-disc pl-3">
          <li>Video Listing & Layout similar to YouTube&apos;s homepage</li>
          <li>Fixed Sidebar Navigation (non-scrolling) for better UX</li>
          <li>Dynamic Video Data fetched from an API</li>
          <li> Video Details Page with title, description, category, and views
          </li>
          <li>  Comment System,Users can add, edit, and delete comments</li>
          <li> Comments are stored in MongoDB with proper validation</li>
          <li> Like & Dislike Functionality with user-based tracking</li>
          <li>Responsive Design using Tailwind CSS</li>
          <li>State Management using React hooks (with consideration for Redux)</li>
          <li> Routing handled using React Router v7</li>
        </ul>

        <strong> Backend Highlights </strong>

        <ul className="list-disc pl-3">
          <li> RESTful APIs built with Node.js & Express</li>
          <li>MongoDB & Mongoose for video, comment, and user data modeling</li>
          <li> Video schema includes:</li>
          <li>Title, thumbnail URL, video URL</li>
          <li>Channel information</li>
          <li>Views, likes, dislikes, and comments</li>
          <li>Secure CRUD operations with proper validation</li>
        </ul>

        <strong>Tech Stack</strong>
        <ul>
          <li><b>Frontend:</b> React, Tailwind CSS, React Router</li>
          <li><b>Backend:</b> Node.js, Express.js</li>
          <li><b>Database:</b> MongoDB (Mongoose)</li>
          <li> <b>Tools & Concepts:</b> REST APIs, MVC architecture, reusable components</li>
        </ul>
        </div>


        <div className="flex md:mt-3 mt-1">
          <a target="_blank" href="https://youtubeclone-byak.netlify.app/" className="cursor-pointer border-2 border-black mr-2 md:mr-5 p-1 md:p-2 hover:bg-blue-300"> Live Link </a>
          <a target="_blank" href="https://github.com/abdul-kadir-uk/YoutubeClone" className="cursor-pointer border-2 border-black p-1 md:p-2 hover:bg-blue-300"> Github </a>
        </div>
      </div>
      <h2 className="text-center text-xl md:text-3xl">2.ShoppyGlobe (An E-commerce Platform)</h2>
      <div className=" w-[90vw] md:w-[70vw] mb-2 md:mb-6 border-2 border-black p-2 md:p-3">
        <div className="flex justify-center items-center ">
          <Image src={shoppyglobe} alt="shoppyglobe" className="h-52 md:h-80 object-contain"></Image>
        </div>

        <div className="p-2">
        <p>  ShoppyGlobe is a full-stack e-commerce web application developed using the MERN stack (MongoDB, Express.js, React, Node.js), designed to deliver a smooth and user-friendly online shopping experience.</p>
        <strong>Key Features</strong>
        <ul className="list-disc pl-3">
          <li>Product Listing & Categories with clean UI</li>
          <li>Product Details Page including images, price, and description</li>
          <li>Add to Cart & Remove from Cart functionality</li>
          <li>Cart Management with quantity updates and total price calculation</li>
          <li>User Authentication (login & registration)</li>
          <li>Order Placement Workflow</li>
          <li>Responsive Design for mobile, tablet, and desktop</li>
          <li>Reusable Components for scalability and maintainability</li>
        </ul>

        <strong>Frontend Highlights</strong>
        <ul className="list-disc pl-3">
          <li>Built using React with component-based architecture</li>
          <li>State management using React hooks</li>
          <li>Smooth navigation using React Router</li>
          <li>Styled using Tailwind CSS for modern and responsive UI</li>
        </ul>

        <strong>Backend Highlights</strong>
        <ul className="list-disc pl-3">
          <li>RESTful APIs built with Node.js & Express</li>
          <li>MongoDB with Mongoose for managing products, users, and orders</li>
          <li>Secure handling of user data</li>
          <li>Structured backend following MVC principles</li>
        </ul>

        <strong>Tech Stack</strong>
        <ul>
          <li><b>Frontend:</b> React, Tailwind CSS</li>
          <li><b>Backend:</b> Node.js, Express.js</li>
          <li><b>Database:</b> MongoDB</li>
          <li><b>Concepts Used:</b> REST APIs, Authentication, CRUD operations</li>
        </ul>
        </div>

        <div className="flex md:mt-3 mt-1">
          <a target="_blank" href="https://shoppyglobebyak.netlify.app/" className="cursor-pointer border-2 border-black mr-2 md:mr-5 p-1 md:p-2 hover:bg-blue-300"> Live Link </a>
          <a target="_blank" href="https://github.com/abdul-kadir-uk/Shoppy_Globe" className="cursor-pointer border-2 border-black p-1 md:p-2 hover:bg-blue-300"> Github </a>
        </div>
      </div>

    </div>
  </div>
</div>

export default Projects;