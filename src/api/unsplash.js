import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID IhupDTB9N9JWPeZPNYsze2elgC843AUHm5U3IqsHm70",
  },
});