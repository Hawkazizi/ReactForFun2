import { useState } from "react";
import "./Styles/Box1.css";
const Box1 = () => {
  const [query, setQuery] = useState("");
  const [imageURL, setImageURL] = useState("");

  function handleInputChange(event) {
    console.log(event.target.value);
    setQuery(event.target.value);
  }

  async function handleSearchClick() {
    const apiKey = "24932724-292ec5e878186a1e45466a250";
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`;
    const response = await fetch(url);
    const data = await response.json();
    const image = data.hits[Math.floor(Math.random() * data.hits.length)];
    setImageURL(image.webformatURL);
  }

  return (
    <div className="Box1">
      <label>
        Search for an image:
        <input type="text" value={query} onChange={handleInputChange} />
      </label>
      <button onClick={handleSearchClick}>Search</button>
      {imageURL && <img src={imageURL} alt="" />}
    </div>
  );
};
export default Box1;
