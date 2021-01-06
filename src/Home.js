import React from 'react'
import Banner from './Banner';
import './Home.css' 
import Card from './Card';

function Home() {
    return (
        <div className ="home">
            <Banner />
            <div className="home__section">
                <Card src="https://media1.s-nbcnews.com/i/newscms/2020_24/3383031/airbnb-experiences-kr-2x1-tease-200608_2dbec30d590e15a8313561c9de552ad5.jpg"
                title = "Online experiences"
                description="Find unique activities led by one-of-a-kind hosts — all without leaving home." />
                <Card src ="https://www.refinery29.com/images/9999682.jpg"
                title="Unique stays"
                description="Private setting with exceptional views, perfect for someone seeking a peaceful retreat."/>
                <Card src="https://www.clickondetroit.com/resizer/6pOj9JOmNVEvVTH7f-SOIY26Ufs=/1600x901/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/5DGJYTFJXVGI5HFHZHRKHAUQDU.jpg" 
                title="Entire homes"
                description="Treat yourself to days spent at the beach and nearby mountains, and activities like snorkelling, kayaking, and scuba diving."/>
            </div>
            <div className="home__section">
                <Card src="https://media.cntraveler.com/photos/5ed0045a4327aeb34fff8c89/master/pass/airbnb%20family%2025866848.jpg" 
                title="2 Bed 1 room" 
                description="The view from this porch overlooking the Puget Sound is spot on. With 350 feet of private beach just a few feet away"
                price="$57/night"/>
                <Card src="https://a0.muscache.com/pictures/5aad1370-1ab2-41b2-91ef-dc3a1afb45be.jpg"
                title="Penthouse in London"
                description="City Center Location with Stunning Views. Overlooking Galway Harbor "
                price="$350/night"/>
                <Card src="https://a0.muscache.com/pictures/9dfce186-c099-458f-9bad-e702541957e2.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="A beautiful 3 bedroom house with free parking space, perfectly located in a quiet area on the eastern edge of the city centre."
                price="$100/night"/>
            </div>
        </div>
    )
}

export default Home
