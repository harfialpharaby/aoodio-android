import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../store/actions";

export default function useFetchVideos(artist) {
  const dispatch = useDispatch();
  const { video } = useSelector(state => state);

  useEffect(() => {
    if (typeof artist === "object" && artist.hasOwnProperty("id")) {
      dispatch(fetchVideos(artist.id));
    }
  }, [dispatch, artist]);

  return video;
}
