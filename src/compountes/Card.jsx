const Card = ({
    image,
    Button,
    CardDescription,
    CardTitle,
    titleHref,
    btnHref,
  }) => {
    return (
      <div className="mb-10 overflow-hidden w-96 h-52 rounded-2xl mx-5 bg-neutral-900 shadow-lg duration-300 hover:shadow-xl border border-neutral-700" data-aos="flip-left">
      {/* <img src={image} alt="img" className="w-full object-contain sm:h-52 md:h-64 lg:h-72" /> */}
    
      <div className="p-6 text-center">
      <h3>
      <a
        href={titleHref || "/#"}
        className="mb-3 block text-2xl font-bold text-white hover:text-purple-400"
      >
        {CardTitle}
      </a>
      </h3>
    
      <p className="mb-5 text-sm text-gray-400 leading-relaxed">
      {CardDescription}
      </p>
    
      {Button && (
      <a
        href={btnHref || "#"}
        className="inline-block rounded-full border border-gray-600 px-6 py-2 text-sm font-medium text-white transition hover:border-purple-500 hover:bg-purple-500 hover:text-white"
      >
        {Button}
      </a>
      )}
      </div>
      </div>
    );
  };
  
  export default Card;
  