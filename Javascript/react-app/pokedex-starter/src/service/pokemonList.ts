import type { IPokemonListResponse } from "@/interface/PokemonList";
import { POKEMON_BASE_URL } from "@/utils/constants";
import { handleResponse, type IResponse } from "@/utils/handleResponse";
import { default as axios } from "axios";

interface IGetPokemonListResponse extends IResponse {
  status: number | undefined;
  data?: IPokemonListResponse;
}

export const pokemonListService = {
  getPokemonList: async (
    limit?: number,
    offset?: number,
  ): Promise<IGetPokemonListResponse> => {
    try {
      const response = await axios.get(
        `${POKEMON_BASE_URL}/pokemon?limit=${limit || 151}&offset=${offset || 0}`,
      );
      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
