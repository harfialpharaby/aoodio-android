import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtist } from "../store/actions";

export default function useFetchArtist(searchInput) {
  const searchArtist = searchInput;
  const dispatch = useDispatch();
  const artist = useSelector(state => state.artist);

  useEffect(() => {
    dispatch(fetchArtist(searchArtist));
  }, [dispatch, searchArtist]);

  return artist;
}
