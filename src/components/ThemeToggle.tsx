"use client";

import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuCloudMoonRain, LuCloudSunRain } from "react-icons/lu";

const ToggleTheme: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuCloudSunRain /> : <LuCloudMoonRain />}
      </IconButton>
    </ClientOnly>
  );
};

export default ToggleTheme;
