import React from "react";
import Card from "./compountes/Card";

const Projects = () => {    
    const projects = [
    {
        CardTitle:"tnea Admission Predictor",
        image:"https://github.com/Arul3011/portfolio/blob/main/public/tneacouns.jpg?raw=true",
        about:"Developed this web app using React.js, Flask, and Machine Learning. This app allows users to predict colleges based on their cutoff scores in +12 (12th grade).",
        titleHref:"https://github.com/Arul3011/counselingpredictor.git",
        liveLink:"https://counselingpredictor.vercel.app/",
        Button:"View Project",
        btnHref:"https://counselingpredictor.vercel.app/",
        },
       {
        CardTitle:"waste management System",
        about:"Developed this web app using React.js, Next.js, and MongoDB, enabling users to sell wasteproducts and view listings. Features include email inquiries, secure authentication, and notifications.",
        image:"https://raw.githubusercontent.com/Arul3011/portfolio/refs/heads/main/public/wastrally.png",
        titleHref:"https://github.com/Arul3011/wast-management-app.git",
        liveLink:"https://wast-management-app.vercel.app/",
        Button:"View Project",
        btnHref:"https://wast-management-app.vercel.app/",

        },
        {
        CardTitle:"blog application",
        about : "Built a blog platform using React.js, Next.js, and MongoDB. Users can post and view blogs with features like real-time updates, authentication, and efficient data management.",
        image:"https://github.com/Arul3011/portfolio/blob/main/public/blog.png?raw=true",
        titleHref:"https://github.com/Arul3011/blogapp",
        liveLink:"https://blogapp-pi-seven.vercel.app/",
        Button:"View Project",
        btnHref:"https://blogapp-pi-seven.vercel.app/",

        }
        
    ]
    return (
       <div className="w-full min-h-screen bg-black orbitron-font px-4">
  <h1 className="text-center text-white pt-20 pb-20 text-5xl" data-aos="zoom-in">
    Projects
  </h1>

  <div className="flex flex-wrap justify-center gap-10">
    {projects.map((val, index) => (
      <Card
        key={index}
        about={val.about}
        image={val.image}
        Button={val.Button}
        CardDescription={val["CardDescription"]}
        CardTitle={val.CardTitle}
        titleHref={val.titleHref}
        btnHref={val.btnHref}
      />
    ))}
  </div>
</div>


    );
}
export default Projects;