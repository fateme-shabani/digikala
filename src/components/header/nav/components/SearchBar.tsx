import { Icons } from "@/components/Icons";
import { useClickOutside } from "@/helper/hooks/useClickOutSide";
import { useState } from "react";

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const modalRef = useClickOutside<HTMLDivElement>(() => setOpen(false));
  return (
    <div
      className="flex flex-row-reverse items-center w-[600px] h-[44px] rounded-lg px-4 gap-x-2 pt-1 bg-gray-100"
      onClick={() => setOpen(true)}
    >
      <Icons name="ph:magnifying-glass" size={24} className="text-gray-400" />
      {open ? (
        <div
          ref={modalRef}
          className="fixed bg-white flex flex-col items-end w-[600px] h-[400px] top-[70px] rounded-md shadow-md"
        >
          <input
            type="text"
            placeholder="جستجو"
            className="w-full p-2 text-gray-500 bg-transparent rounded-md text-right"
          />

          <span>جستجوهای پرطرفدار</span>
          {/* <div
            ref={modalRef}
            className="bg-red-400 p-4 rounded-lg shadow-lg w-[600px] h-44"
          >
            <input
              type="text"
              placeholder="جستجو"
              className="w-full p-2 text-gray-500 bg-transparent rounded-md text-right"
            />
          </div> */}
        </div>
      ) : null}
      <span className="w-full p-2 text-gray-500 bg-transparent rounded-md text-right">
        جستجو
      </span>
    </div>
  );
}

// export default function SearchBar() {

//   return (
//     <div className="relative">
//       <button onClick={() => setOpen(true)} className="p-2">
//         <Icons name="ph:magnifying-glass" size={24} className="text-gray-400" />
//       </button>
//       {open && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
//           <div
//             ref={modalRef}
//             className="bg-white p-4 rounded-lg shadow-lg w-96"
//           >
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-2 right-2 text-gray-500"
//             >
//               ✖
//             </button>
//             <input
//               type="text"
//               placeholder="جستجو..."
//               className="w-full p-2 border rounded-md"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
