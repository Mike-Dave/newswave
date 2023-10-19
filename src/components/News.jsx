/* eslint-disable react/prop-types */
function News({ movies }) {
  return (
    <div className="rounded-lg bg-white flex flex-col">
      <img
        className="w-full rounded-t-lg h-[300px] object-cover"
        src={movies.image_url}
        alt={movies.news_site}
      />
      <div className="p-6 flex flex-col flex-1">
        <div>
          <h1 className="font-bold my-3">{movies.title}</h1>
        </div>
        <div className="text-justify mb-3">
          <p className="my-3 ">{movies.summary}</p>
        </div>
        <a
          className="bg-[#213555] text-white p-2 px-5 my-3 inline-block mt-auto max-w-fit"
          href={movies.url}
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default News;
