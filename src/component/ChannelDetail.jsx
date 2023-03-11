import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

export default function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(channelDetail);
  console.log(videos);

  useEffect(() => {
    fetchFromApi(`channel?part=snippet&id=${id}`).then((response) => {
      setChannelDetail(response);
      setVideos(response.data);
    });
  }, [id]);

  return (
    <Box sx={{ backgroundColor: "black" }}>
      <div
        style={{
          background:
            "linear-gradient(90deg,rgba(0,238,247,1) 0%,rgba(206,3,184,1) 100%,rgba(0,212,255,1) 100%)",
          zIndex: 10,
          height: "200px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <Card sx={{ boxShadow: "none", backgroundColor: "black" }}>
          <CardMedia
            sx={{
              width: 125,
              height: 125,
              zIndex: 1000,
              borderRadius: "50%",
            }}
            image={channelDetail.meta.thumbnail[0].url}
          />
          <CardContent>
            <Typography sx={{ color: "gray" }}>
              {channelDetail.meta.title}
            </Typography>
            <Typography sx={{ color: "gray" }}>
              Subscribers: {channelDetail.meta.subscriberCount}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Videos videos={videos} />
    </Box>
  );
}
