import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

export default function VedioDetail() {
  const [video, setVideo] = useState(null);
  const [related, setRelated] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`video?part=snippet&id=${id}`).then((data) => setVideo(data));
    fetchFromApi(`related?id=${id}`).then((data) => setRelated(data.data));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
          <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/watch?v=${id}`}
          />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {video.title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ color: "#fff" }}
            py={1}
            px={2}
          >
            <Link to={`/channel/${video.channelId}`}>
              <Typography color="#fff">{video.channelTitle}</Typography>
            </Link>

            <Stack>
              <Typography variant="body1" color="grey" sx={{ opacity: 0.8 }}>
                {parseInt(video.viewCount).toLocaleString()} views
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <Videos videos={related} />
      </Box>
    </Box>
  );
}
