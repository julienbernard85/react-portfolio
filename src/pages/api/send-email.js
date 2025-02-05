import sgMail from '@sendgrid/mail';


// eslint-disable-next-line no-undef
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Méthode non autorisée'});
  }

  const {name, email, message} = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({error: 'Tous les champs sont requis'});
  }

  const msg = {
    to: 'julien85bernard85@gmail.com',
    from: 'bernard85julien85@gmail.com',
    replyTo: email,
    subject: `Message de ${name} depuis le portfolio`,
    text: `Message de ${name} (${email}) :\n\n${message}`,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({success: true, message: 'Message envoyé avec succès !'});
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.error('Erreur SendGrid:', error);
    return res.status(500).json({error: "Erreur lors de l'envoi du message"});
  }
}
