import type { Place } from "./Place";

interface SearchResponse {
  features: Feature[];
}

interface Feature {
  geometry: Geometry;
  properties: Properties;
}

interface Geometry {
  coordinates: number[];
}

interface Properties {
  place_id: number;
  display_name: string;
}

export const search = async (term: string) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`,
    {
      method: "GET",
      headers: {
        // สำคัญมาก: ต้องระบุชื่อแอพหรือเว็บของคุณ และช่องทางติดต่อ
        "User-Agent": "MyAppName/1.0 (me@example.com)",
        "Accept-Language": "th", // (Option) ถ้าอยากได้ผลลัพธ์ภาษาไทย
      },
    }
  );

  // Photon API ไม่ต้องใช้ User-Agent ที่เคร่งครัดเท่า
  // const res = await fetch(
  //   `https://photon.komoot.io/api/?q=${term}&limit=5&lang=en`
  // );

  const data: SearchResponse = await res.json();
  const places: Place[] = data.features.map((feature) => {
    return {
      id: feature.properties.place_id,
      name: feature.properties.display_name,
      longitude: feature.geometry.coordinates[0],
      latitude: feature.geometry.coordinates[1],
    };
  });

  return places;
};
