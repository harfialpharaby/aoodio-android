import {
  FETCH_ALBUMS_START,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_FAIL,
  FETCH_ARTIST_START,
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_FAIL,
  FETCH_TRACK_START,
  FETCH_TRACK_SUCCESS,
  FETCH_TRACK_FAIL,
  FETCH_VIDEO_START,
  FETCH_VIDEO_SUCCESS,
  FETCH_VIDEO_FAIL
} from "../actionTypes";

function generateStar(score) {
  let stars = [];
  while (score > 0) {
    stars.push(score);
    score--;
  }

  return stars;
}

export function fetchAlbums(artist) {
  return function(dispatch) {
    dispatch({
      type: FETCH_ALBUMS_START
    });

    fetch(`http://theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artist}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        let albumsData = [];
        if (!data.album) {
          albumsData = ["Not Found"];
        } else {
          data.album.forEach(album => {
            albumsData.push({
              id: album.idAlbum,
              artistId: album.idArtist,
              thumbnail:
                album.strAlbumThumb ||
                "https://bandungumroh.com/sie/assets/no_image.png",
              albumName: album.strAlbum,
              artistName: album.strArtist,
              releaseDate: album.intYearReleased,
              genre: album.strGenre,
              label: album.strLabel,
              description: album.strDescriptionEN,
              loved: album.intLoved || 0,
              score: album.intScore || "No Rate",
              stars: generateStar(album.intScore),
              voted: album.intScoreVotes || 0
            });
          });
        }

        dispatch({
          type: FETCH_ALBUMS_SUCCESS,
          albums: albumsData
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_ALBUMS_FAIL,
          err
        });
      });
  };
}

export function fetchTrack(id) {
  return function(dispatch) {
    dispatch({
      type: FETCH_TRACK_START
    });

    fetch(`http://www.theaudiodb.com/api/v1/json/1/track.php?m=${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const tracks = [];

        if (!data.track) {
          tracks.push("Not Found");
        } else {
          data.track.forEach(track => {
            tracks.push({
              id: track.idTrack,
              video: track.strMusicVid,
              thumbnail:
                track.strTrackThumb ||
                "https://bandungumroh.com/sie/assets/no_image.png",
              trackName: track.strTrack || track.strAlbum,
              artistName: track.strArtist,
              genre: track.strGenre || "Unknown",
              mood: track.strMood || "Unknown",
              style: track.strStyle || "Unknown",
              description: track.strDescriptionEN,
              loved: track.intLoved || 0,
              score: track.intScore || "No Rate",
              voted: track.intScoreVotes || 0
            });
          });
        }

        dispatch({
          type: FETCH_TRACK_SUCCESS,
          tracks
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_TRACK_FAIL,
          err
        });
      });
  };
}

export function fetchArtist(artistName) {
  return function(dispatch) {
    dispatch({
      type: FETCH_ARTIST_START
    });

    fetch(`http://www.theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const artistData = [];

        if (!data.artists) {
          artistData.push("Not Found");
        } else {
          data.artists.forEach(artist => {
            artistData.push({
              id: artist.idArtist,
              artistName: artist.strArtist,
              label: artist.strLabel,
              website: artist.strWebsite || null,
              biography: artist.strBiographyEN || null,
              thumbnail:
                artist.strArtistThumb ||
                "https://bandungumroh.com/sie/assets/no_image.png",
              logo: artist.strArtistLogo || null,
              clearArt: artist.strArtistClearart || null,
              style: artist.strStyle || null,
              genre: artist.strGenre || null,
              mood: artist.strMood || null
            });
          });
        }

        dispatch({
          type: FETCH_ARTIST_SUCCESS,
          artists: artistData
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_ARTIST_FAIL,
          err
        });
      });
  };
}

export function fetchVideos(id) {
  return function(dispatch) {
    dispatch({
      type: FETCH_VIDEO_START
    });

    fetch(`https://theaudiodb.com/api/v1/json/1/mvid.php?i=${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const videos = [];
        if (!data.mvids) {
          videos.push("Not Found");
        } else {
          data.mvids.forEach(video => {
            videos.push({
              idArtist: video.idArtist,
              idAlbum: video.idAlbum,
              trackName: video.strTrack,
              trackThumb:
                video.strTrackThumb ||
                "https://bandungumroh.com/sie/assets/no_image.png",
              video: video.strMusicVid
            });
          });
        }

        dispatch({
          type: FETCH_VIDEO_SUCCESS,
          videos
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_VIDEO_FAIL,
          err
        });
      });
  };
}
