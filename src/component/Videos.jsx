import { Stack, Box } from "@mui/material";
import { VideoCard } from "../component";

function Videos({ videos }) {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => {
        return (
          <Box key={index}>
            {item.videoId && <VideoCard video={item} />}
            {/* {item.channelId && <ChannelCard channel={item} />} */}
          </Box>
        );
      })}
    </Stack>
  );
}

export default Videos;
