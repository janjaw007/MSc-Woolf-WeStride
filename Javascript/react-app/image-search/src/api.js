import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID EZymkD9Mh04D0GZ_gH68ZAbXMjbjwkuZ0xPOcxF62Wc",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
