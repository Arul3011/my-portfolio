import React from "react";
import Card from "./compountes/Card";

const Projects = () => {    
    const projects = [
        // {
    //     "image" : "https://th.bing.com/th/id/OIP.-ArzUouYdERkV8pHLRhtcgHaEL?w=4584&h=2584&rs=1&pid=ImgDetMain",
    //     "Button":"View Project",
    //    " CardDescription" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     "CardTitle":"Project 1",
    //     "titleHref":"https://example.com",
    //     "btnHref":"https://example.com",
    // },
    {
        CardTitle:"tnea Admission Predictor",
        image:"https://github.com/Arul3011/portfolio/blob/main/public/tneacouns.jpg?raw=true",
        titleHref:"https://github.com/Arul3011/counselingpredictor.git",
        liveLink:"https://counselingpredictor.vercel.app/",
        Button:"View Project",
        btnHref:"https://counselingpredictor.vercel.app/",
        },
       {
        CardTitle:"waste management System",
        image:"https://raw.githubusercontent.com/Arul3011/portfolio/refs/heads/main/public/wastrally.png",
        titleHref:"https://github.com/Arul3011/wast-management-app.git",
        liveLink:"https://wast-management-app.vercel.app/",
        Button:"View Project",
        btnHref:"https://wast-management-app.vercel.app/",

        },
        {
        CardTitle:"blog application",
        image:"https://github.com/Arul3011/portfolio/blob/main/public/blog.png?raw=true",
        titleHref:"https://github.com/Arul3011/blogapp",
        liveLink:"https://blogapp-pi-seven.vercel.app/",
        Button:"View Project",
        btnHref:"https://blogapp-pi-seven.vercel.app/",

        }
        
    ]
    return (
        <div className="bg-black">      
            <h1 className="text-center text-white bg-black py-10 text-5xl">Projectes</h1>
          <div className="w-full min-h-screen flex justify-around items-center md:flex-row flex-col bg-black orbitron-font">
            {
                projects.map((val,index)=>(
                    <Card
                    
                    key={index}
                    image={val.image}
                    Button={val.Button}
                    CardDescription={val["CardDescription"]}
                    CardTitle={val.CardTitle}
                    titleHref={val.titleHref}
                    btnHref={val.btnHref}
                    />
                ))
            }
        </div>
        </div>

    );
}
export default Projects;