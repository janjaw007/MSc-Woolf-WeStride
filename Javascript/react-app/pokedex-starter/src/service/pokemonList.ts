import type { IPokemonListResponse } from "@/interface/PokemonList";
import { POKEMON_BASE_URL } from "@/utils/constants";
import { default as axios } from "axios";

interface IGetPokemonListResponse {
  status: number;
  data: IPokemonListResponse;
}

export const pokemonListService = {
  getPokemonList: async (
    limit?: number,
    offset?: number,
  ): Promise<IGetPokemonListResponse> => {
    const response = await axios.get(
      `${POKEMON_BASE_URL}/pokemon?limit=${limit || 151}&offset=${offset || 0}`,
    );
    return response;
  },
};
