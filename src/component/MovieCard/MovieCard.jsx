const MovieCard = ({ item }) => {
  return (
    <div className="p-2 border w-[300px] h-[400px]">
      <div className="w-full h-[300px]">
        <img
          className="w-full h-full"
          alt="this is Movie Poster"
          src={item?.Poster}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x400";
          }}
        />
      </div>
      <div>
        <h3>{item?.Title}</h3>
        <p>{item?.Year}</p>
      </div>
    </div>
  );
};
export default MovieCard;
