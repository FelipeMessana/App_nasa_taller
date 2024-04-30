const api = "https://api.nasa.gov/planetary/apod";
const key = "fmhY1XYjBAzrrFKLxIb0ImZNtgQ01YfP8aPJv3vv";

export default Fech = async (parametros) => {
  try {
    const response = await fetch(
      `${api}?api_key=${key}${parametros.length > 0 ? parametros : ""}`
    );
    const Data = await response.json();
    return Data;
  } catch (er) {
    console.log(er);
  }
};
