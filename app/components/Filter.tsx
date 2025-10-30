"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  function handleFilter(filter:string){
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
    console.log(filter);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, {scroll:false})
  }

  return (
    <div className="border border-primary-800 flex">
      <button className="px-5 py-2 hover:bg-pirmary-700 cursor-pointer" onClick={()=> handleFilter("all")}>All cabins</button>
      <button className="px-5 py-2 hover:bg-pirmary-700 cursor-pointer" onClick={()=> handleFilter("small")}>1&mdash;3 cabins</button>
      <button className="px-5 py-2 hover:bg-pirmary-700 cursor-pointer" onClick={()=> handleFilter("medium")}>4&mdash;7 cabins</button>
      <button className="px-5 py-2 hover:bg-pirmary-700 cursor-pointer" onClick={()=> handleFilter("large")}>8&mdash;12 cabins</button>
    </div>
  )
}