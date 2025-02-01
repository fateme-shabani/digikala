import { useEffect, useRef, useState } from "react";

import { BaseIcon } from "@/components/BaseIcon";
import { useClickOutSide } from "@/hooks/useClickOutSide";
import { useDebounce } from "@/hooks/useDebounce";
import { fetchSearchResults } from "@/services/endpoint";
import { LoadingSvg } from "@/assets/Svg/LoadingSvg";

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutSide({
    ref: modalRef,
    setValue: setOpen,
    value: open,
  });
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (search.length < 2) {
      setResults([]);
      setError("");
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await fetchSearchResults(debouncedSearch);
      setResults(data);
      setError(error);
      setLoading(false);
    };
    fetchData();
  }, [debouncedSearch]);

  return (
    <div
      className="flex flex-row-reverse items-center w-[600px] h-[44px] rounded-lg px-4 gap-x-2 pt-1 bg-gray-100"
      onClick={() => setOpen(true)}
    >
      <BaseIcon
        name="ph:magnifying-glass"
        size={24}
        className="text-gray-400"
      />
      {open ? (
        <div
          ref={modalRef}
          className="fixed bg-white flex flex-col items-end w-[600px] h-[400px] top-[70px] rounded-md shadow-md px-5"
        >
          <input
            type="text"
            placeholder="جستجو"
            className="w-full p-2 text-gray-500 bg-transparent rounded-md text-right border-b border-blue-300"
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {loading ? (
            // <span className="text-gray-400">در حال جستجو...</span>
            <LoadingSvg />
          ) : error ? (
            <span className="items-center m-auto text-red-500">{error}</span>
          ) : results.length > 0 ? (
            <ul className="w-full mt-2">
              {results.map((item) => (
                <li
                  key={item.id}
                  className="p-2 border-b text-right cursor-pointer hover:bg-gray-100"
                >
                  {item.title_fa}
                </li>
              ))}
            </ul>
          ) : debouncedSearch.length >= 2 ? (
            <span className="text-gray-400">نتیجه‌ای یافت نشد</span>
          ) : null}
        </div>
      ) : null}
      <span className="w-full p-2 text-gray-500 bg-transparent rounded-md text-right">
        جستجو
      </span>
    </div>
  );
}
