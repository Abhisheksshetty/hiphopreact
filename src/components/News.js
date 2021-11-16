import React from 'react'
import Navbar from './Navbar';
import "../App.css";
import kendrick from '../components/images/kendrick.png';
import snoop from '../components/images/snoop.jpg';
import Footer from './Footer';
const News = () => {
    return (
        <>
        <Navbar />
       
       <h1>Kendrick Lamar Has A New Manager</h1>
       <img src={kendrick} alt="" />
       <p>Kendrick Lamar's new manager has been working with Nas for decades.
A few days ahead of his headlining performance at Day N Vegas this weekend, it has been announced that rapper Kendrick Lamar has a new business manager. According to a report from HitsDailyDouble, the pgLang co-founder is working with Anthony Saleh, who is well-respected in the music industry as the longtime manager of Nas.

As he prepares his upcoming studio album, which he announced will be his final offering as part of his deal with Top Dawg Entertainment, Kendrick is making a change to his entourage, employing Anthony Saleh as his new manager. </p>
<br />
<br />
<h1>SNOOP DOGG DEMANDS VETERAN RAP STARS GET SAME RESPECT AS ROCK ICONS</h1>
<img src={snoop} alt="" />
<p>Snoop Dogg made his grand entrance into the mainstream Hip Hop space at just 20 years old on the Dr. Dre single “Deep Cover.”

Now 50, the Doggfather may have sprouted a few grey hairs, but he’s even more prolific than he was at the height of the ’90s West Coast gangsta rap explosion. Even so, he sometimes finds himself facing the ageism that too often penetrates the culture.</p>

<Footer />
        </>
    )
}

export default News
