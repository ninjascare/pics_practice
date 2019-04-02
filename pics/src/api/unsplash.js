import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 719f94ffaa69be7362d8c5cd6289dbd317441a8a20e95acffd1927a2bb0ee091"
  }
});
