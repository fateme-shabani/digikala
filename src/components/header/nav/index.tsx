import { LogoSvg } from "@/components/Svg/LogoSvg";

import { SignIn } from "./components/SignIn";
import { SearchBar } from "./components/SearchBar";

export function Nav() {
  return (
    <>
      <div className="flex flex-row-reverse justify-between items-center w-full h-[68px] px-5">
        <div className="flex flex-row-reverse items-center gap-x-5">
          <LogoSvg />
          <SearchBar />
        </div>
        <SignIn />
      </div>
    </>
  );
}
