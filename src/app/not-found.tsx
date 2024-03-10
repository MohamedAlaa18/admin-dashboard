"use client"
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const CustomNotFound = () => {
  const theme = useTheme();

  return (
    <Stack alignItems={"center"} justifyContent={"center"} gap={2}>
      <Typography variant="h5" sx={{ color: theme.palette.error.main }} align="center">This is no design yet</Typography>
      <Typography variant="h5" sx={{ color: theme.palette.error.main }} align="center">  Please try again later...</Typography>
      <Image src={"/images/404.svg"} width={500} height={500} alt="404" />
    </Stack>
  );
};

export default CustomNotFound;