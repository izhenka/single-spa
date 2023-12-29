const getRandomImage = async (setImageSrc) => {
  return fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1")
    .then((res) => res.json())
    .then((data) => {
      return data[0].id;
    })
    .then((id) => {
      return fetch(`https://api.thecatapi.com/v1/images/${id}`);
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
      return {};
    });
};

export default getRandomImage;
