import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
    }

    //store it in a database

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        'mongodb+srv://kuba941:Tqp2cjqE0XkGHgf2@cluster0.vzzyb.mongodb.net/my-site?retryWrites=true&w=majority'
      );
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
    }

    const db = client.db();
    try {
      const result = await db.collection('messages').insertOne(newMessage);
      console.log(result);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing messgae failed' });
      return;
    }
    client.close();

    res.status(201).json({ message: newMessage });
  }
}

export default handler;
