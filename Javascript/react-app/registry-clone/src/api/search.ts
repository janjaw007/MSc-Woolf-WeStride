interface SearchResponse {
  features: Feature[];
}

interface Feature {
  geometry: {
    coordinates: number[];
  };
  properties: {
    place_id: number;
    display_name: string;
  };
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
  console.log(data);
};
