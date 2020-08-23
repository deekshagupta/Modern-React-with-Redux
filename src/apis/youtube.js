import axios from "axios";
const KEY = "AIzaSyDy1i-0fxh4vxlkcVcZaSDTJfICLxSLvtU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
