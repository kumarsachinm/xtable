import "./App.css";
import { useState } from "react";

function App() {
  const [myTable, setMyTable] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const handleSortByDate = () => {
    const sortedData = [...myTable].sort((a, b) =>
    {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA; // Ascending order
    });

    setMyTable(sortedData);
  }

  const handleSortByViews = () => {
    const sortedData = [...myTable].sort((a, b) => b.views - a.views);
    setMyTable(sortedData);
  }

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick = {handleSortByDate}>Sort by Date</button>
      <button onClick = {handleSortByViews}>Sort by Views</button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {myTable.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
