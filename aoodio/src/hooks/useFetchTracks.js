import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrack } from "../store/actions";

export default function useFetchAlbum(id) {
  const dispatch = useDispatch();
  const { track } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchTrack(id));
  }, [dispatch, id]);

  return track;
}
