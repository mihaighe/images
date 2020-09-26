import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID MA3h0MicYb6AfiokBSlYWTcv6OUVnlqwbS6TkhWfpo0",
  },
});

