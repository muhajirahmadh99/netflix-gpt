import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="md:w-48 w-36">
      <img className="" src={IMG_CDN_URL + posterPath} alt="image url" />
    </div>
  );
};

export default MovieCard;
