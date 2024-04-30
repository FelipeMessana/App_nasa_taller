const gateway = "https://api.nasa.gov/planetary/apod";
const api_key = "fmhY1XYjBAzrrFKLxIb0ImZNtgQ01YfP8aPJv3vv";

export default apiGet = async (parametros) => {
  try {
    //voy a intentar hacer esto
    const response = await fetch(
      `${gateway}?api_key=${api_key}${parametros.length > 0 ? parametros : ""}`
    );
    return await response.json();
  } catch (error) {
    //capturo el error y hago algo
    console.error(error);
  } finally {
    //fin
  }
};
