import Head from 'next/head';
import { Fragment } from "react/cjs/react.production.min";

import MeetupDetail from "../../components/meetups/MeetupDetail";
import { getData, getDataID } from '../api/meetup'

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta
                    name='description'
                    content='Detail'
                />
            </Head>
            <MeetupDetail 
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    );
}

export async function getStaticPaths() {
    const meetups = await getData();
    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() }
        }))
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;
    const selectMeetup = await getDataID(meetupId);

    // const req = context.req;
    // const res = context.res;

    return {
        props: {
            meetupData: {
                id: selectMeetup._id.toString(),
                title: selectMeetup.title,
                address: selectMeetup.address,
                image: selectMeetup.image,
                description: selectMeetup.description,
            }
        },
        revalidate: 1,
    }
}

export default MeetupDetails;