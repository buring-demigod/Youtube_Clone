import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Sidebar, Videos } from "./index.js";

const Feed = () => {
  const [current, setCurrent] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&query=${current}`).then((response) =>
      setVideos(response.data)
    );
  }, [current]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar current={current} setCurrent={setCurrent} />
        <Typography sx={{ mt: 1.5, color: "#fff" }}>
          created By Faiz,Reffered from Js mastery.
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {current} <span style={{ color: "#F31503" }}>Vedios</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Feed;
