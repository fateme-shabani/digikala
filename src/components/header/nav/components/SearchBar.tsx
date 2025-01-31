import { Icons } from "@/components/Icons";

export function SearchBar() {
  return (
    <div className="flex flex-row-reverse items-center w-[600px] h-[44px] rounded-lg px-4 gap-x-2 pt-1 bg-gray-100">
      <button onClick={()=>console.log('test')}>
        <Icons name="ph:magnifying-glass" size={24} className="text-gray-400" />
      </button>
      <span className="text-gray-500">جستجو </span>
    </div>
  );
}
