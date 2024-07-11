import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mern-render-backend-7d83.onrender.com"
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});

// creating a custom hook that can be access over the app
export const {
  useGetAllProductsQuery
} = productsApi;
