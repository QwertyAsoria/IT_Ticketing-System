import React from "react";
import CategoryAddSection from "./category-add-section";
import { TicketIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { router } from "@inertiajs/react";

export default function CategoryTableSection() {
    const { categories } = useSelector((state) => state.category);
    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <CategoryAddSection />
                <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 px-4 bg-slate-900 rounded-t-lg">
                    <div>
                        <h3 className="text-gray-300 font-bold text-3xl inline-flex items-center">
                            <img
                                src="/images/Final I.T Logo.png"
                                class="h-12 me-2"
                                alt="FlowBite Logo"
                            />{" "}
                            Category Section
                        </h3>
                    </div>
                    <label for="table-search" class="sr-only">
                        Search
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                class="w-4 h-4 text-gray-500 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search-users"
                            class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500     "
                            placeholder="Search for users"
                        />
                    </div>
                </div>
                <table class="w-full text-sm text-left rtl:text-right text-gray-300">
                    <thead class="text-xs text-white-200 uppercase bg-slate-700">
                        <tr className="border-b border-slate-500">
                            <th scope="col" class="px-6 py-3">
                                Name of Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Pending Tickets
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Assigned Tickets
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ongoing Tickets
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Closed Tickets
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total Tickets
                            </th>
                            <th scope="col" class="px-6 py-3 ">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((res, i) => {
                            return (
                                <tr
                                    key={i}
                                    class="text-white bg-slate-700  border-b border-slate-500 hover:bg-slate-500"
                                >
                                    <th
                                        scope="row"
                                        class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                                    >
                                        <div class="ps-3">
                                            <div class="bg-indigo-400 text-gray-100 font-semibold inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500">
                                                {res.name}
                                            </div>
                                        </div>
                                    </th>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center justify-center w-4 h-4 text-center text-medium p-3 font-bold text-gray-800 bg-yellow-400 rounded">
                                            {res.pending ?? 0}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center justify-center w-4 h-4 text-center text-medium p-3 font-bold text-gray-800 bg-cyan-400 rounded">
                                            {res.assigned ?? 0}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center justify-center w-4 h-4 text-center text-medium p-3 font-bold text-gray-800 bg-orange-400 rounded">
                                            {res.ongoing ?? 0}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center justify-center w-4 h-4 text-center text-medium p-3 font-bold text-gray-800 bg-green-400 rounded">
                                            {res.closed ?? 0}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center justify-center w-4 h-4 text-center text-medium p-3 font-bold text-gray-800 bg-blue-200 rounded">
                                            {res.pending +
                                                res.assigned +
                                                res.ongoing +
                                                res.closed ?? 0}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <button
                                            type="button"
                                            onClick={()=>router.visit('/admin/category/'+res.id+'?page=1')}
                                            class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                                        >
                                            <TicketIcon className="size-5 mr-1" />{" "}
                                            View Tickets
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
