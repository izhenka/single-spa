import { EVENT_TYPES, usePersistedBreeds } from "@cats/storage";
import { useEffect, useState } from "react";

const useBreeds = () => {
  const { getPersistedBreeds, persistBreeds } = usePersistedBreeds();
  const [breeds, setBreeds] = useState(getPersistedBreeds());

  useEffect(() => {
    document.addEventListener(EVENT_TYPES.BREEDS_CLEARED, function (e) {
      console.log("Breeds cleared", getPersistedBreeds());
      setBreeds(getPersistedBreeds());
    });
  }, []);

  const addBreed = (breed) => {
    if (breeds.includes(breed)) return;
    const newBreeds = [...breeds, breed];
    persistBreeds(newBreeds);
    document.dispatchEvent(new CustomEvent(EVENT_TYPES.BREED_ADDED));
    setBreeds(newBreeds);
  };

  return {
    breeds,
    addBreed,
    emptyBreeds: () => setBreeds([]),
  };
};

export default useBreeds;
