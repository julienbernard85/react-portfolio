// api/send-email.ts

import sgMail from '@sendgrid/mail';
import {NextApiRequest, NextApiResponse} from 'next';

const api_key = process.env.api_key;

if (!api_key) {
  throw new Error("La clé API SendGrid est manquante dans les variables d'environnement.");
}

sgMail.setApiKey(api_key);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {name, email, message} = req.body;

    const msg = {
      to: 'julien85bernard85@gmail.com', // Remplace par l'email où tu veux recevoir les messages
      from: email, // L'email de l'expéditeur
      subject: `Nouveau message de ${name}`,
      text: message,
      html: message,
    };

    try {
      await sgMail.send(msg);
      return res.status(200).json({success: true});
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({error: 'Erreur lors de l\'envoi de l\'email'});
    }
  } else {
    return res.status(405).json({error: 'Méthode non autorisée'});
  }
}
