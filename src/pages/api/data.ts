// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<google.maps.MarkerOptions[]>
) => {
  res.status(200).json([
    {
      position: {
        lat: -33.91721,
        lng: 151.2263
      },
    },
    {
      position: {
        lat: -33.91539,
        lng: 151.2282
      },
    },
    {
      position: {
        lat: -33.91747,
        lng: 151.22912
      },
    },
    {
      position: {
        lat: -33.9191,
        lng: 151.22907
      },
    },
    {
      position: {
        lat: -33.91725,
        lng: 151.23011
      },
    },
    {
      position: {
        lat: -33.91872,
        lng: 151.23089
      },
    },
    {
      position: {
        lat: -33.91784,
        lng: 151.23094
      },
    },
    {
      position: {
        lat: -33.91682,
        lng: 151.23149
      },
    },
    {
      position: {
        lat: -33.9179,
        lng: 151.23463
      },
    },
    {
      position: {
        lat: -33.91666,
        lng: 151.23468
      },
    },
    {
      position: {
        lat: -33.916988,
        lng: 151.23364
      },
    },
    {
      position: {
        lat: -33.91662347903106,
        lng: 151.22879464019775
      },
    },
    {
      position: {
        lat: -33.916365282092855,
        lng: 151.22937399734496
      },
    },
    {
      position: {
        lat: -33.91665018901448,
        lng: 151.2282474695587
      },
    },
    {
      position: {
        lat: -33.919543720969806,
        lng: 151.23112279762267
      },
    },
    {
      position: {
        lat: -33.91608037421864,
        lng: 151.23288232673644
      },
    },
    {
      position: {
        lat: -33.91851096391805,
        lng: 151.2344058214569
      },
    },
    {
      position: {
        lat: -33.91818154739766,
        lng: 151.2346203981781
      },
    },
    {
      position: {
        lat: -33.91727341958453,
        lng: 151.23348314155578
      },
    },
  ])
}

export default handler
