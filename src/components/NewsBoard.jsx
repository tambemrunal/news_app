import styles from "./NewsBoard.module.css";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
// let url ="https://newsdata.io/api/1/latest?apikey=pub_65004c6ccda00259d1146a848ef6a9a6af607&category=politics&country=in";

const NewsBoard = ({
  selectedCountry,
  selectedLanguage,
  category,
  selectedQuery,
}) => {
  let url = `https://newsdata.io/api/1/latest?apikey=pub_65004932de0c816cced216ecc67f065bd7df7&category=${category}&country=in&language=${selectedLanguage}${selectedQuery!== '' ? `&qInMeta=${selectedQuery}` : ''}`;
  console.log("my language" + selectedLanguage);
  console.log("my link " + url);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      // .then((data)=>console.log(data.results))
      .then((data) => setArticles(data.results));
  }, [selectedCountry, selectedLanguage, category,selectedQuery]);

  console.log(articles);

  return (
    <>
      {/* <h2 style={{ textAlign: "center" }}>LATEST NEWS</h2> */}
      <div className={styles.NewsContainer}>
        {articles.map((News) => {
          return <NewsCard News={News} />;
        })}
      </div>
    </>
  );
};

export default NewsBoard;
