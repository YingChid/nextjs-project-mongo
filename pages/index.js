import Head from 'next/head';
import { Fragment } from "react/cjs/react.production.min";
import MeetupList from "../components/meetups/MeetupList";
import { getData } from './api/meetup'
// import { useEffect, useState } from "react";

export const getStaticProps = async () => {
    // fetch data from an API
    // const res = await fetch('http://localhost:3000/api/meetup');
    // const meetups = await res.json();
    const meetups = await getData();
    
    const meetup_map = meetups.map(meetup => ({
        title: meetup.title,
        id: meetup._id.toString(),
        image: meetup.image ,
        address: meetup.address,
        description: meetup.description 
    }))

    return {
        props: {
            meetups: meetup_map
        }
    }
}

const HomePage = ({meetups}) => {
    // const [loadMeetups, setLoadMeetups] = useState([])
    // useEffect(() => {
    //     // send a http request and fetch data
    //     setLoadMeetups(DUMMY_MEETUPS);
    // }, [])

    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta
                    name='description'
                    content='A list of all programming-related tutorials and posts!'
                />
            </Head>
            <MeetupList meetups={meetups} />
        </Fragment>
    )
}

export default HomePage;