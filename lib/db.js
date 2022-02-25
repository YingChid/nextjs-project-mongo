import { MongoClient } from 'mongodb'

const uri = 'mongodb://localhost:27017/nextjs-course'
const options = {}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.

export async function getMeetupCollection() {
    const client = await MongoClient.connect(uri, options);
    const db = client.db();

    const meetupCollection = db.collection('meetups');
    return meetupCollection
}
export default getMeetupCollection