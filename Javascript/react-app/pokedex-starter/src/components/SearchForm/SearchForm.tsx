import React from "react";
import { generationList, typesList, sortList } from "@/utils/optionList";
import { useSearchForm } from "./SearchForm.hook";

function SearchForm() {
  const { fieldKeyword, fieldGeneration, fieldType, fieldSort } =
    useSearchForm();
  return (
    <form className="grid grid-cols-1 lg:grid-cols-4  sm:grid-cols-2  gap-[20px]">
      <div>
        <label
          htmlFor="generation"
          className="block mb-2.5 text-mb font-medium text-heading text-white"
        >
          Generation
        </label>
        <select
          id="generation"
          {...fieldGeneration}
          className="capitalize block w-full px-3 py-2.5 bg-[#253641] text-white border rounded-lg border-gray-300 border-default-medium text-heading text-sm rounded-base focus:ring-[#375EAA] focus:border-[#375EAA] shadow-xs placeholder:text-body"
        >
          {generationList.map((generation, index) => {
            return (
              <option
                className="capitalize"
                key={`generation-key-${index}`}
                value={index}
                selected
              >
                {generation.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="type"
          className="block mb-2.5 text-mb font-medium text-heading text-white"
        >
          Type
        </label>
        <select
          {...fieldType}
          id="type"
          className="capitalize block w-full px-3 py-2.5 bg-[#253641] text-white border rounded-lg border-gray-300 border-default-medium text-heading text-sm rounded-base focus:ring-[#375EAA] focus:border-[#375EAA] shadow-xs placeholder:text-body"
        >
          {typesList.map((type, index) => {
            return (
              <option
                className="capitalize"
                key={`type-key-${index}`}
                value={type}
                selected
              >
                {type}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="sort"
          className="block mb-2.5 text-mb font-medium text-heading text-white"
        >
          Sort
        </label>
        <select
          {...fieldSort}
          id="sort"
          className="capitalize block w-full px-3 py-2.5 bg-[#253641] text-white border rounded-lg border-gray-300 border-default-medium text-heading text-sm rounded-base focus:ring-[#375EAA] focus:border-[#375EAA] shadow-xs placeholder:text-body"
        >
          {sortList.map((sort, index) => {
            return (
              <option
                className="capitalize"
                key={`sort-key-${index}`}
                value={sort}
                selected
              >
                {sort}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="search"
          className="block mb-2.5 text-mb font-medium text-heading text-white"
        >
          Search
        </label>
        <input
          {...fieldKeyword}
          id="search"
          className="block w-full px-3 py-2.5 bg-[#253641] text-white border rounded-lg border-gray-300 border-default-medium text-heading text-sm rounded-base focus:ring-[#375EAA] focus:border-[#375EAA] shadow-xs placeholder:text-body"
        />
      </div>
    </form>
  );
}

export default SearchForm;
