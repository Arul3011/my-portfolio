const Card = ({
    about,
    Button,
    CardDescription,
    CardTitle,
    titleHref,
    btnHref,
  }) => {
    return (
      <div className="mb-10 h-auto overflow-hidden w-96 h-80 rounded-2xl mx-5 bg-neutral-900 shadow-lg duration-300 hover:shadow-xl border border-neutral-700" data-aos="flip-left">
    
      <div className="p-6 text-center">
      <h3    className="mb-3 block text-2xl font-bold 	text-cyan-400 hover:text-purple-300 uppercase">
      {/* <p
     
      > */}
        {CardTitle}
      {/* </p> */}
      </h3>
    <p className="text-white">{about}</p>
      <p className="mb-5 text-sm text-gray-400 leading-relaxed">
      {CardDescription}
      </p>
    
     <div className="flex justify-evenly">
      <a
        href={titleHref || "#"}
        className="inline-block rounded-full border border-gray-600 px-6 py-2 text-sm font-medium text-white transition hover:border-purple-500 hover:bg-purple-500 hover:text-white"
      >
        View Code
      </a>
      <a
        href={btnHref || "#"}
        className="inline-block rounded-full border border-gray-600 px-6 py-2 text-sm font-medium text-white transition hover:border-purple-500 hover:bg-purple-500 hover:text-white"
      >
        view Project
      </a>
      </div>
      </div>
      </div>
    );
  };
  
  export default Card;
  