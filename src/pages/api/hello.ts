import { config } from "dotenv-safe";
if (!process.env.VERCEL) config();

import type {
  NextApiHandler,
  NextApiRequest,
  NextApiResponse,
} from "next";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  return res.status(200).json({ name: "John Doe" });
};

export default handler;
