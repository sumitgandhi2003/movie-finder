import { useParams } from "react-router-dom";
import { useFetchData } from "../utility/useFetchData";
import { Link } from "react-router-dom";

const minHrs = (time) => {
  let min = "";
  for (let i = 0; i < time.length; i++) {
    if (time[i] == " ") {
      break;
    }
    min += time[i];
  }
  min = Number(min);

  return (min / 60).toFixed(1);
};
const MovieDetail = () => {
  const { movieId } = useParams();
  const data = useFetchData("", movieId);
  console.log(data);
  return data ? (
    <div className="w-full h-full flex justify-center py-12 items-center bg-gray-500">
      <div className="flex justify-between  items-center bg-white p-4 gap-4 rounded-lg w-6/12  sm:flex-col sm:w-9/12 md:flex-row lg:flex-row ">
        <div>
          <img
            src={data?.Poster}
            className="h-full object-fill aspect-auto"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x400";
            }}
            alt=""
          />
        </div>
        <div className="text-left w-full text-lg">
          <div className="text-xl font-bold">Name: {data?.Title}</div>
          <div>
            <span>Released:</span> <span>{data?.Released}</span>
          </div>
          <div>
            <span>Director:</span> <span>{data?.Director}</span>
          </div>
          <div>
            <span>Writer:</span> <span>{data?.Writer}</span>
          </div>
          <div>
            <span>Time:</span> <span>{minHrs(data?.Runtime)} Hrs</span>
          </div>
          <div>
            <span>Type:</span> <span>{data?.Type}</span>
          </div>
          <div>
            <span>Country:</span> <span>{data?.Country}</span>
          </div>
          <div>
            <span>Language:</span> <span>{data?.Language}</span>
          </div>
          <div>
            <span>Actors:</span> <span>{data?.Actors}</span>
          </div>
          <div>
            <span>Box Office Collection:</span> <span>{data?.BoxOffice}</span>
          </div>
          <div>
            <span>Rating:</span> <span>{data?.imdbRating}/10</span>
          </div>

          <div>
            <Link to={"/"}>
              <button className="w-max  m-2 px-4 py-2 bg-gray-500 rounded-md">
                Back
              </button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default MovieDetail;
