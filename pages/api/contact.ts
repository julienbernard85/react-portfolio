import {send, setApiKey} from "@sendgrid/mail";
import {NextApiRequest, NextApiResponse} from "next";

setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({error: "Méthode non autorisée"});
  }

  const {name, email, message} = req.body;

  const msg = {
    to: "julien85bernard85@gmail.com",
    from: "bernard85ulien85@gmail.com",
    subject: `Message de ${name}`,
    text: message,
    html: `<p><strong>Nom:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
  };

  try {
    await send(msg);
    res.status(200).json({success: true});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({error: error.message});
  }
}
