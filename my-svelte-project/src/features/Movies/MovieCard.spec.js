import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import MovieCard from "../Movies/MovieCard.svelte";
import moviesMock from "../../mocks/movie.json";

describe("MovieCard", () => {
  it("renders movie card with all relevant content", () => {
    const [movie] = moviesMock.results;

    const { getByText } = render(MovieCard, { movie });

    const exactAssertions = [
      "Men in Black: International",
      "3208",
      "6",
      "always protected the Earth",
    ];

    exactAssertions.forEach((item) => {
      expect(getByText(item, { exact: false })).toBeInTheDocument();
    });
  });

  it("renders the movie poster with proper data", () => {
    const [movie] = moviesMock.results;

    const { getByAltText } = render(MovieCard, { movie });

    const image = getByAltText(`Poster: ${movie.title}`);

    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty(
      "src",
      "https://image.tmdb.org/t/p/original/2FYzxgLNuNVwncilzUeCGbOQzP7.jpg"
    );
  });
});
