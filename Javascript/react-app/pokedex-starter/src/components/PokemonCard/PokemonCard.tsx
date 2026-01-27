import type { IPokemonDetailResponse } from "@/interface/pokemonDetail";
import React from "react";
import { Link } from "react-router";

interface PokemonCardProps {
  data: IPokemonDetailResponse;
}

function PokemonCard({ data }: PokemonCardProps) {
  return (
    <div className="p-2 bg-[#253641] text-white flex flex-col h-full min-w-[250px] max-w-[300px] rounded-base shadow-xs dark:border-gray-70 m-[auto]">
      <div className=" bg-[url('/images/poke-card-bg.png')] bg-[center]">
        <Link to={`/detail/${data.name}`}>
          <img
            className="rounded-base h-[218px] w-full mb-6" // 1. บังคับความสูงรูป + object-cover
            src={data.image}
            alt=""
          />
        </Link>
      </div>
      <div className=" px-2 mt-1 flex justify-between">
        <h5 className="capitalize mb-2 text-xl font-semibold tracking-tight text-heading line-clamp-1">
          {data.name}
        </h5>
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-heading line-clamp-1">
          #{data.id}
        </h5>
      </div>

      <div className="mt-auto px-1 py-2 flex gap-2 justify-end">
        {data.types.map((item) => {
          return (
            <span
              className={`badge-type-${item.type.name} rounded-xl text-black px-3 py-2 capitalize`}
            >
              {item.type.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonCard;
