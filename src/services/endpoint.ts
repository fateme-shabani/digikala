import axios from "axios";

export const E_GET_SEARCH_PRODUCT = (value: string) =>
  `https://api.digikala.com/v1/autocomplete/?q=${value}`;

export const fetchSearchResults = async (query: string) => {
  if (!query) return { data: [], error: "" };
  try {
    const { data } = await axios.get(E_GET_SEARCH_PRODUCT(query));
    return data;
  } catch (error) {
    return {
      data: [],
      error: "مشکلی در دریافت نتایج پیش آمد. لطفاً دوباره تلاش کنید",
    };
  }
};
