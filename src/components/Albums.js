import React from 'react'
import Navbar from './Navbar';
import "./Albums.css";
import eminem from './images/eminem.jpeg';
import tech from './images/tech.jpeg';
import Footer from './Footer';

const Albums = () => {
    return (
        <>
        <Navbar />
            <h1>1)Eminem-Music to be murdered by </h1>
            <img src={eminem} alt="" />
            <br />
            <p>Music to Be Murdered By is the eleventh studio album by American rapper Eminem. It was released on January 17, 2020, by Shady Records, Aftermath Entertainment, and Interscope Records. It was released with no prior announcement, in a similar fashion to his previous studio album Kamikaze (2018). The album was produced by Eminem and Dr. Dre, amongst other producers. It features guest appearances from Skylar Grey, Young M.A, Royce da 5'9", White Gold, Ed Sheeran, the late Juice Wrld, Black Thought, Q-Tip, Denaun, Anderson .Paak, Don Toliver, Kxng Crooked and Joell Ortiz. The album's title, cover art, and concept are inspired by Alfred Hitchcock and Jeff Alexander's 1958 spoken word album Alfred Hitchcock Presents Music to Be Murdered By. The album was supported by two singles: "Darkness" and "Godzilla". Alongside the album's surprise release, Eminem also released the music video for "Darkness", which revolves around the 2017 Las Vegas shooting from the point of view of the perpetrator Stephen Paddock alternating with Eminem's own.

The album debuted at number one on the Billboard 200, selling 279,000 album-equivalent units in its first week. Subsequently, Eminem became the first artist to have ten consecutive number-one albums in the US and one of six artists to have released at least ten US number-one albums.[5] Music critics praised Eminem's lyrical abilities and the improved production after Kamikaze, while criticism directed towards the album's formulaic song structure, lack of innovation, and shock value.[6][7] The Mayor of Manchester, England, Andy Burnham, responded to Eminem making light of the 2017 Manchester Arena bombing, saying, "This is unnecessarily hurtful and deeply disrespectful to the families and all those affected." The criticism of the album's subject matter led to Eminem responding in an open letter, saying that Music to Be Murdered By is "not for the squeamish" and is "designed to shock the conscience."</p>


<br /><br />
<h1>2)Tech N9ne-Asin9ne</h1>
<img src={tech} alt="" />
<br />
<p>This is the 23rd full-length album from Kansas City icon Tech N9ne. Getting his footing in 3 decades back as a member of the groups Black Mafia as well as the 57th Street Rogue Dog Villians & Nnutthowze, his profile began to increase in the late 90’s after landing a spot on the Gang Related soundtrack & becoming among the first to join Yukmouth’s then-newly formed collective The Regime. But after having issues with Interscope Records & Universal Music Group following the release of his iconic 3rd album Anghellic, that’s when Tech decided to form his own label with the help of a man at Paradise Originals named Travis O’Guin. Together, they would call it Strange Music & solidified itself as one of if not the biggest indie label in the world. Tech has made it a tradition to drop an album every year since Everready (The Religion)back in ‘06 & given that’s been going on at Strange throughout 2021, I was very curious to hear how Asin9ne would address it all.

“The Herder” kicks the album off with Tech villainously proclaiming himself as just that with production from Wyshmaster whereas the King Iso & Seuss Mace-assisted “I Don’t Fit” has a symphonic trap vibe with the help of N4 talking about not fitting in even though they’re the shit. “Kickiter” has a bit of an EDM flare encouraging the crowds to riot leading into the spacious “Too Good” produced by Ervin Pope & featuring Lil Wayne tackles the idea of being too good for their own good.</p>

<Footer />
        </>


    )
}

export default Albums
