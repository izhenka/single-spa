// Anything exported from this file is importable by other in-browser modules.
import {
  getValueFromLocalStorage,
  saveToLocalStorage,
} from "./localStorageUtils.js";

import "./global.css";

import "./set-public-path.js";

const BREEDS_KEY = "cats-breeds";
export const EVENT_TYPES = {
  BREED_ADDED: "breed-added",
  BREEDS_CLEARED: "breeds-cleared",
};

function getPersistedBreeds() {
  return getValueFromLocalStorage(BREEDS_KEY, []);
}

function persistBreeds(breeds) {
  saveToLocalStorage(breeds, BREEDS_KEY);
}

// let breedsCash = [];

// function getBreedsCash() {
//   return breedsCash;
// }

// function persistBreedsCash(breeds) {
//   breedsCash = [...breeds];
//   console.log("breedsCash", breedsCash);
// }

export function usePersistedBreeds() {
  return {
    getPersistedBreeds,
    persistBreeds,
  };
}
