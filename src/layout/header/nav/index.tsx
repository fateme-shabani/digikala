import { LogoSvg } from "@/assets/Svg/LogoSvg";

import { SignIn } from "./components/SignIn";
import { SearchBar } from "./components/SearchBar";

export function Nav() {
  return (
    <>
      <div className="flex flex-row-reverse justify-around items-center w-full h-[68px]">
        <div className="flex flex-row-reverse items-center gap-x-5">
          <LogoSvg />
          <SearchBar />
        </div>
        <SignIn />
      </div>
    </>
  );
}
