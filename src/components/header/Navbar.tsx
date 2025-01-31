import { HeaderSvg } from "../Svg/HaederSvg.tsx";
import { Nav } from "./Nav/index.tsx";

/**
 * @component
 * @returns{JSX.Element}
 */

export function Navbar(): JSX.Element {
  return (
    <div>
      <div className="flex flex-col w-full h-[132px] shadow-base test">
      <HeaderSvg className="w-full h-[60px]" />
        <Nav />
      </div>
    </div>
  );
}
