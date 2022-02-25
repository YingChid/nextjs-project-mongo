import { ObjectId} from 'mongodb'
import { getMeetupCollection } from '../../lib/db'

// /api-meetup
// GET /api/meetup

export const getData = async () => {
    const meetupCollection = await getMeetupCollection();
    const meetups = await meetupCollection.find().toArray();
    return meetups;
}

export const getDataID = async (meetupId) => {
    const meetupCollection = await getMeetupCollection();
    const selectMeetup = await meetupCollection.findOne({ _id: ObjectId(meetupId)});
    return selectMeetup;
}

const handler = async (req, res) => {
    const jsonData = await getData()
    res.status(200).json(jsonData)
}

export default handler;