import type { IPokemonDetailResponse } from "@/interface/pokemonDetail";
import { pokemonDetailService, pokemonListService } from "@/service";
import { usePokemonListStore } from "@/store/pokemonList";
import { generationList } from "@/utils/optionList";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const useSearchForm = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const { setFetchPokemonList, fetchPokemon, setPokemonList } =
    usePokemonListStore();

  const generation = watch("generation");
  const type = watch("type");
  const sort = watch("sort");
  const keyword = watch("keyword");

  async function callData(filter: {
    name: string;
    limit: number;
    offset: number;
  }) {
    setFetchPokemonList({
      data: [],
      loading: true,
      error: null,
    });
    const responseList = await pokemonListService.getPokemonList(
      filter.limit,
      filter.offset,
    );
    const pokeList = [];

    if (responseList.status === 200) {
      const responseResults = responseList.data?.results;
      for (const pokemon of responseResults) {
        const response = await pokemonDetailService.getPokemonDetail(
          pokemon.name,
        );
        const pokeData = response.data;
        pokeList.push({
          ...pokeData,
          image:
            pokeData.sprites.other.dream_world.front_default ||
            pokeData.sprites.other["official-artwork"].front_default,
        });
      }

      setFetchPokemonList({
        data: pokeList,
        loading: false,
        error: null,
      });
      setPokemonList({
        data: pokeList,
        loading: false,
        error: null,
      });
    } else {
      setFetchPokemonList({
        data: [],
        loading: false,
        error: responseList.error,
      });
    }
  }

  useEffect(() => {
    console.log("gene", generation);
    if (generation !== undefined) {
      callData(generationList[generation]);
    }
  }, [generation]);

  useEffect(() => {
    const data = fetchPokemon.data.filter((item) =>
      item.name.toLowerCase().includes(keyword?.toLowerCase()),
    );

    setPokemonList({
      data: data,
      loading: false,
      error: null,
    });
  }, [keyword]);

  return {
    fieldKeyword: register("keyword"),
    fieldGeneration: register("generation"),
    fieldType: register("type"),
    fieldSort: register("sort"),
  };
};
export { useSearchForm };
