export const getMemberCards = async () => {
  const URL = "https://rws-cards-api.herokuapp.com/api/v1/cards";

  const response = await fetch(URL, { method: "GET" });
  return await response.json();
};