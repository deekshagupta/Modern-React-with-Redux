import axios from "axios";
const KEY = "AIzaSyCN6e98GjAfa_d4E4mISSn8uCP6g5b1DvE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
