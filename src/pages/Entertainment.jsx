import { useEffect, useState } from "react";
import NewsContainer from "../components/NewsContainer";

function Entertainment() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function fetchNews() {
      try {
        const res = await fetch(
          "https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=40",
        );

        if (!res.ok) throw new Error("Something went wrong with loading news");
        const data = await res.json();

        setNewsData(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews();

  }, []);

  return <NewsContainer isLoading={isLoading} newsData={newsData} />;
}

export default Entertainment;
