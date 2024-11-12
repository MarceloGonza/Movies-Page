export const fetchData = async () => {
  const url = "https://imdb-com.p.rapidapi.com/search?searchTerm=deadpool";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "2849af8d8emsh0dfee60a24b97adp11c4b5jsnda198a01814b",
      "x-rapidapi-host": "imdb-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response) {
      throw new Error(`HTTP Error. Status: ${response.status}`);
    }
    const result = await response.json();
    return result.data.mainSearch.edges;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};