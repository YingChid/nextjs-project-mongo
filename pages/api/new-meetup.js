import { MongoClient} from 'mongodb'
// /api-new-meetup
// POST /api/new-meetup
const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;
        // const { title, image, address, description } = data;

        const client = await MongoClient.connect('mongodb://localhost:27017/nextjs-course');
        const db = client.db();

        const meetupCollection = db.collection('meetups');
        const result = await meetupCollection.insertOne(data);

        client.close()

        res.status(201).json({
            message: "Meetup inserted!"
        })
    }
}

export default handler;