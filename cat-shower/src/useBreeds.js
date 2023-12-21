import { useState } from "react";

const useBreeds = () => {
  const [breeds, setBreeds] = useState([]);

  const addBreed = (breed) =>
    !breeds.includes(breed) && setBreeds([...breeds, breed]);

  return {
    breeds,
    addBreed,
    emptyBreeds: () => setBreeds([]),
  };
};

export default useBreeds;
