// out-domain.con/new-meetup
import { Fragment } from "react/cjs/react.production.min";
import Head from 'next/head';

import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const router = useRouter();
    async function addMeetupHandler(enteredMeetupData) {
        // const response = await fetch('https://som-domain.com/api');
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify( enteredMeetupData ),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data)

        router.push('/')
    }

    return (
        <Fragment>
            <Head>
                <title>New Meetup</title>
                <meta
                    name='description'
                    content='New Meetup'
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    )
}

export default NewMeetupPage