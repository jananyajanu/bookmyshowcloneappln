import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieLayoutHoc from "../layout/Movie.layout";
import axios from "axios";

const MoviePage = () => {
  const { id } = useParams();

  const [cast, setCast] = useState();
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get("/movie/${id}/credits");
      setCast(getCast.data.cast);
    };
    requestCast();
  }, []);

  return <div>Movie</div>;
};

export default MovieLayoutHoc(MoviePage);
