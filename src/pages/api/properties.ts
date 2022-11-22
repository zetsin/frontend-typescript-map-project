// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";

const handler = (req: NextApiRequest, res: NextApiResponse<Property[]>) => {
  res.status(200).json(
    Array.from(new Array(20)).map((item) => {
      const [lat, lng] = faker.address.nearbyGPSCoordinate(
        [Number(req.query.lat), Number(req.query.lng)],
        2
      );

      return {
        ...item,
        address: faker.address.streetAddress(true),
        position: {
          lat: Number(lat),
          lng: Number(lng),
        },
        visitors: faker.datatype.number(),
        frequency: faker.datatype.number(),
        medium_income: faker.datatype.number(),
      };
    })
  );
};

export default handler;
