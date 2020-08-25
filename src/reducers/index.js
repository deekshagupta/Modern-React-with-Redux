import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No scrubs", duration: "4:05" },
    { title: "No", duration: "3:00" },
    { title: "All starts", duration: "2:30" },
    { title: "I want it that way", duration: "3:15" },
    { title: "Macaren", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
