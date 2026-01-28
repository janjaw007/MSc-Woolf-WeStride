import { PokemonCard } from "@/components/PokemonCard";
import type { IPokemonDetailResponse } from "@/interface/pokemonDetail";
import { pokemonDetailService, pokemonListService } from "@/service";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
type pokemonType = {
  data: IPokemonDetailResponse | undefined;
  loading: boolean;
  error: null | any;
};

function DetailPage() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null,
  });
  async function callData(name: string) {
    const response = await pokemonDetailService.getPokemonDetail(name);
    if (response.status === 200) {
      const responseResults = response.data;

      if (responseResults) {
        setPokemon({
          data: {
            ...responseResults,
            image:
              responseResults.sprites.other.dream_world.front_default ||
              responseResults.sprites.other["official-artwork"].front_default,
          },
          loading: false,
          error: null,
        });
      }
    } else {
      setPokemon({
        data: undefined,
        loading: false,
        error: response.error,
      });
    }
  }

  useEffect(() => {
    if (name) callData(name);
  }, [name]);

  return (
    <div className=" w-[90%] m-[auto] max-w-[1100px]">
      <div className="flex justify-center">
        <img
          src="/images/logo.webp"
          className="max-h-[80px] mt-[20px]"
          alt=""
        />
      </div>
      <div className="w-[90%] max-w-[600px] m-[auto]">
        <Link
          to={"/"}
          className="bg-[#4CAFEB] px-5 py-2 rounded-2xl font-semibold"
        >
          Back
        </Link>
        {pokemon.data && (
          <div className="p-2  text-white flex flex-col h-full  rounded-base shadow-xs dark:border-gray-70 m-[auto]">
            <div className="bg-center aspect-square w-full bg-cover rounded-[20px] relative h-[400px]">
              <img
                className="absolute h-[auto] max-h-[400px] w-full translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]" // 1. บังคับความสูงรูป + object-cover
                src="/images/pokemon_bg.png"
                alt=""
              />
              <img
                className="absolute  h-[150px] sm:h-[200px] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]" // 1. บังคับความสูงรูป + object-cover
                src={pokemon.data.image}
                alt=""
              />
            </div>

            <div className="bg-[#253641] rounded-[20px] p-4 my-5">
              <div className=" mt-1 flex justify-between ">
                <h5 className="capitalize mb-2 text-xl font-semibold tracking-tight text-heading line-clamp-1">
                  {pokemon.data.name}
                </h5>
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-heading line-clamp-1">
                  #{pokemon.data.id}
                </h5>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] gap-y-[30px]">
                <div>
                  <div className="flex gap-x-[10px]">
                    <div className="text-[#4CAFEB] font-semibold">Height</div>
                    <div>{(pokemon.data.height / 10).toFixed(2)} m.</div>
                  </div>
                  <div className="flex gap-x-[10px]">
                    <div className="text-[#4CAFEB] font-semibold">Weight</div>
                    <div>{(pokemon.data.weight / 10).toFixed(2)} kg.</div>
                  </div>
                </div>
                <div className="mt-auto  py-2 flex gap-2 sm:justify-end justify-start">
                  {pokemon.data.types.map((item) => {
                    return (
                      <span
                        className={`badge-type-${item.type.name} rounded-xl text-black px-3 py-2 capitalize`}
                      >
                        {item.type.name}
                      </span>
                    );
                  })}
                </div>
                <div>
                  <h5 className="font-semibold ">Abilities</h5>
                  <div className="grid sm:grid-cols-1 grid-cols-2  gap-2 mt-2">
                    {pokemon.data.abilities.map((abilitie) => {
                      return (
                        <span
                          className={`rounded-xl text-black px-3 py-2 capitalize bg-[#4CAFEB]`}
                        >
                          {abilitie.ability.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold ">Stat</h5>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {pokemon.data.stats.map((stat) => {
                      return (
                        <div className="flex gap-x-[10px] justify-between">
                          <div className="text-[#4CAFEB] font-semibold capitalize">
                            {stat.stat.name}
                          </div>
                          <div>{stat.base_stat}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailPage;
