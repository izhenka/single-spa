import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import getRandomImage from "./getRandomImage";
import "./loader.css";
import useBreeds from "./useBreeds";

function App({ className }) {
  const { breeds, addBreed, updateBreeds } = useBreeds();
  const [data, setData] = useState({});
  const [isImgLoading, setIsImgLoading] = useState(false);

  const currentBreed = data.breeds && data.breeds[0].name;
  const description = data.breeds && data.breeds[0].description;
  const imageSrc = data.url;
  const isCurrentBreedFavourite = breeds.includes(currentBreed);

  useEffect(() => {
    async function onMount() {
      await showNext();
    }
    onMount();
  }, []);

  const showNext = async () => {
    setIsImgLoading(true);
    const result = await getRandomImage();
    setData(result);
  };

  return (
    <div className={`${styles.mainContainer} ${className}`}>
      <h2>This is {currentBreed}</h2>
      <div className="image-loader-container">
        <img
          src={imageSrc}
          alt={currentBreed}
          className={styles.dogImage}
          onLoad={() => setIsImgLoading(false)}
          onError={() => setIsImgLoading(false)}
        />
        {isImgLoading && <div className="overlay"></div>}
        {isImgLoading && <div className="loader"></div>}
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonsBar}>
        <button
          onClick={() => addBreed(currentBreed)}
          disabled={isCurrentBreedFavourite}
          className={isCurrentBreedFavourite ? "tertiary" : "primary"}
        >
          {isCurrentBreedFavourite ? "Added!" : "Add to favourites"}
        </button>
        <button className="secondary" onClick={async () => await showNext()}>
          Show next
        </button>
      </div>
    </div>
  );
}

export default App;
