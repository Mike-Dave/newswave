function NewsMan({ movies }) {
  return (
    <div className="rounded-lg p-3 bg-white space-y-">
      <img className="w-[100%]" src={movies.image_url} alt={movies.news_site} />
      <h1 className="font-bold my-3">{movies.title}</h1>
      <p className="my-3">{movies.summary}</p>
      <a
        className="bg-[#213555] text-white p-2 px-5 my-3 inline-block"
        href={movies.url}
      >
        Read More
      </a>
    </div>
  );
}

export default NewsMan;
