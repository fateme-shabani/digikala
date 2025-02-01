import { BaseIcon } from "@/components/BaseIcon";

export function SignIn() {
  return (
    <div className="flex flex-row-reverse items-center w-48 h-[44px] gap-x-2">
      <button className="flex justify-center items-center text-xs font-bold gap-x-2 w-[140px] h-10 border border-gray-200 rounded-lg">
        <span className="">ورود</span>
        <span>|</span>
        <span className="whitespace-nowrap">ثبت نام</span>
        <BaseIcon name="ph:sign-in" size={24} className="text-gray-700" />
      </button>
      <span className="w-1 h-6 text-gray-200 border-l-2"></span>
      <button onClick={()=>console.log('first')}>
        <BaseIcon
          name="ph:shopping-cart-simple"
          size={24}
          className="text-gray-700"
        />
      </button>
    </div>
  );
}
