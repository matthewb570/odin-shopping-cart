import { http, HttpResponse } from "msw";

export default [
  http.get("https://dummyjson.com/products", () => {
    return HttpResponse.json(
      [
        {
          id: 13,
          title: "Bedside Table African Cherry",
          description:
            "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
          price: 299.99,
          thumbnail: "",
        },
        {
          id: 14,
          title: "Knoll Saarinen Executive Conference Chair",
          description:
            "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
          price: 499.99,
          thumbnail: "",
        },
      ],
      { status: 200 },
    );
  }),
];
