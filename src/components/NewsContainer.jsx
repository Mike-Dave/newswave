import Loader from "./Loader";
import News from "./News";

function NewsContainer({ isLoading, newsData }) {
  return (
    <div className="flex justify-center itemds-center g w-[90%s ] p-4  bg-[#F1EFEF] ">
      {isLoading && <Loader />}
      <div className=" grid gap-9 grid-cols-1 md:grid-cols-2 pt-[30px]">
        {newsData?.map((movies) => (
          <News movies={movies} key={movies.id} />
        ))}
      </div>
    </div>
  );
}

export default NewsContainer;
