import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Videos } from "./index.js";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&query=${searchTerm}`).then((response) =>
      setVideos(response.data)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}> {searchTerm} Vedios</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};
export default SearchFeed;
