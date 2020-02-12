import { combineReducers } from "redux";
import albums from "./albums";
import track from "./track";
import artist from "./artist";
import search from "./search";
import video from "./video";

export default combineReducers({ albums, track, artist, search, video });
