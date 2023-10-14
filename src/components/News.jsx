function News({ movies }) {
  return (
    <div className="rounded-lg bg-white w-[9s0%] md:w-[500px]">
      <img
        className="w-full rounded-t-lg "
        src={movies.image_url}
        alt={movies.news_site}
      />

      <div className="p-6">
        {" "}
        <div>
          <h1 className="font-bold my-3">{movies.title}</h1>
        </div>
        <div className=" text-justify">
          <p className="my-3 ">{movies.summary}</p>
        </div>
        <a
          className="bg-[#213555] text-white p-2 px-5 my-3 inline-block"
          href={movies.url}
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default News;
