import { Icons } from "@/components/BaseIcon";

export function SignIn() {
  return (
    <div className="flex flex-row-reverse items-center w-48 h-[44px] text-sm gap-x-2">
      <button className="flex items-center px-4 gap-x-2 w-[132px] h-10 border border-gray-200 rounded-lg">
        <span className="">ورود</span>
        <span>|</span>
        <span className="text-sm whitespace-nowrap">ثبت نام</span>
        <Icons name="ph:sign-in" size={24} className="text-gray-700" />
      </button>
      <span className="w-1 h-6 text-gray-200 border-l-2"></span>
      <Icons
        name="ph:shopping-cart-simple"
        size={24}
        className="text-gray-700"
      />
    </div>
  );
}
