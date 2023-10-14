import { useEffect, useState } from "react";
import NewsContainer from "../components/NewsContainer";

function Homepage() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    const controller = new AbortController();
    async function fetchNews() {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=20",
          { signal: controller.signal }
        );
        const data = await res.json();

        if (!res.ok) throw new Error("Something went wrong with loading news");

        setNewsData(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews();
    return function () {
      controller.abort();
    };
  }, []);

  return <NewsContainer isLoading={isLoading} newsData={newsData} />;
}

export default Homepage;
