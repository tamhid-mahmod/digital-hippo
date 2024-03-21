import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

import HomeHero from "@/sections/home/HomeHero";
import HomePerks from "@/sections/home/HomePerks";

export default function RootPage() {
  return (
    <>
      <MaxWidthWrapper>
        <HomeHero />

        {/* TODO: List products */}
      </MaxWidthWrapper>

      <HomePerks />
    </>
  );
}
