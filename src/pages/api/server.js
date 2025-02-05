// /server/server.js
/* eslint-env node */

const express = import('express');
const sgMail = import('@sendgrid/mail');
const cors = import('cors');
const process = import('dotenv').config();

const app = express();
const port = 5000;

sgMail.setApiKey(process.env.api_key); // Remplacez par votre clé API SendGrid

app.use(cors()); // Ajoutez cette ligne pour autoriser toutes les requêtes
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const {name, email, message} = req.body;

  const msg = {
    to: 'julien85bernard85@gmail.com', // Ton adresse de réception
    from: 'bernard85julien85@gmail.com', // L'email vérifié sur SendGrid
    replyTo: email, // Pour répondre directement à l'expéditeur
    subject: `Message de ${name} depuis le portfolio`,
    text: `Message de ${name} (${email}) :\n\n${message}`,
  };
  

  try {
    await sgMail.send(msg);
    res.status(200).send('Message envoyé');
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de l'envoi");
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
