/* eslint-disable react/prop-types */
import Loader from "./Loader";
import News from "./News";

function NewsContainer({ isLoading, newsData }) {

  console.log(isLoading)

  return (
    <div className="w-[90%] max-w-[1024px] mx-auto p-4 bg-[#F1EFEF] ">
      {
        isLoading && (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        )
      }
      <div className="grid gap-9 md:grid-cols-2 pt-[30px]">
        {newsData.map((movies) => (
          <News movies={movies} key={movies.id} />
        ))}
      </div>
    </div>
  );
}

export default NewsContainer;
