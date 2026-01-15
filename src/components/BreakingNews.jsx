import { useEffect, useState } from "react";
import "./css/BreakingNews.css";

const countries = [
  { code: "us", name: "United States" },
  { code: "gb", name: "United Kingdom" },
  { code: "fr", name: "France" },
  { code: "de", name: "Germany" },
  { code: "ng", name: "Nigeria" },
  { code: "jp", name: "Japan" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
];

const categories = [
  { code: "business", name: "Business" },
  { code: "entertainment", name: "Entertainment" },
  { code: "general", name: "General" },
  { code: "health", name: "Health" },
  { code: "science", name: "Science" },
  { code: "sports", name: "Sports" },
  { code: "technology", name: "Technology" },
];

export default function BreakingNewsPage({ onBack }) {
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("general");
  const [articles, setArticles] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    setLoading(true);
    setExpandedIndex(null);

    const url = `https://uxw7bwx7yk.execute-api.us-east-1.amazonaws.com/prod/news-api/news?country=${country}&category=${category}`;

    const res = await fetch(url);
    const data = await res.json();

    setArticles(data.articles || []);
    setLoading(false);
  }

  return (
    <section className="news-page">
      <h2>Breaking News</h2>
      <button className="back-button" onClick={onBack}>
        ← Back to Portfolio
      </button>
      {/* Filters */}
      <div className="news-filters">
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          {countries.map(c => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(c => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>

        <button className="btn" onClick={fetchNews}>
          Load News
        </button>
      </div>

      {/* Results */}
      {loading && <p className="loading">Loading news...</p>}

      <div className="news-list">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            <h3
              className="news-title"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              {article.title}
            </h3>

            {expandedIndex === index && (
              <div className="news-details">
                {article.urlToImage && (
                  <img src={article.urlToImage} alt={article.title} />
                )}

                <p className="news-meta">
                  <strong>Author:</strong>{" "}
                  {article.author || "Unknown"} <br />
                  <strong>Source:</strong>{" "}
                  {article.source?.name}
                </p>

                <p>{article.description}</p>
                <p className="news-content">{article.content}</p>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  Read full article →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}