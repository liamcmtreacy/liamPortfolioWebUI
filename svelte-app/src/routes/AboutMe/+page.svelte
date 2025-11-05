<script>
    import {base} from '$app/paths';
    import {onMount} from 'svelte';
    import {Card} from '$lib';
    import {Modal} from '$lib';

    let showModal = false;

    onMount (() => {
        console.log("About Page Loaded");
    });
</script>

<div class = "aboutGrid">
<h1>About Me</h1> <!---interesting info incoming-->
<p> My name is Liam Treacy, I was born on February 24th 2004 in county Kilkenny, I currently live in Ballinkillen County Carlow. <br>

I am always interested to improve my skills, or to try a different way of completing a task, I am currently in my second year of Computing in Interactive Digital Art and Design, I will graduate in 2027.
I hope to obtain a career working in Animation, my ultimate goal would be to have an animated series of my own one day.</p>

<p> I currently work in the Eddie Rockets Diner in Shamrock Plaza, Carlow, I am also a volunteer at Visual Gallery and Theathre in Carlow. My future plan is too enroll in the IADT DL931 Animation Masters once I graduate. </p>

<h1>Events I've taken part in</h1> <!---MORE TO COME -->
<h2>Dingle Animation Festival 2025</h2>
<img id="dinglePhoto" src="{base}/dingle.png" alt="Two of my classmates and I at Dingle Animation Festival">
<p> From March 20th - 22nd 2025, I had the pleasure of attending Dingle Animation Festival as a part of my course. During this event it was amazing to meet many lovely industry professionals, who offered their advice and I was able to gain many new Linkedin connections.
    Some other highlights include learning to draw with Will Sliney, taking part in the Pitch for a Pint event and showing my ideas to an executive, and seeing the sights of Dingle, Kerry. <br>
    <a href="https://www.setu.ie/news/setu-students-shortlisted-at-dingle-animation-festival">We also had an article written about us for SETU Carlow</a>
</p>
<img id="dingleTrio" src="{base}/dingleTrio.png" alt="group of us from Dingle">

<h2>Brownbag Films and Kilkenny animated </h2> <!----Never got the photos, so just imagine a picture of me and some of my classmates outside the Studio-->
<p> On April 24th 2025, I had the pleasure of attending a Brown Bag Films event, where their staff gave talks about Storyboarding, the use of Unreal Engine in animation and Animation Directing, afterwards there was an hour for Networking where I had the chance to speak to their staff and talk, including co-founder Darragh O'Connell and Matthew Lloyd. Likewise with Kilkenny Animated, I was able to attend from October 3rd to October 5th, it was a great opportunity to meet other aspiring artists, and industry professionals.
    <img id="kkSelfie" src="{base}/kkSelfie.jpg" alt="group of us from Kilkenny Animated">
</p>

<div class = "grid01">
<h1> So what exactly am I studying?</h1>
<!----For a while I debated on keeping this page or not, keeping it purely so potential employers can look easily at the course-->
<p> I am enrolled in a course in SETU Carlow called Computing in Interactive Digital Art and Design "IDAD". In this course we learn about 
    Animation, Game Design, Web Development and also learn about the industries and how to effectively work in them. I also plan to complete an animation masters in IADT.
</p>

<a href = "https://www.setu.ie/courses/bsc-hons-in-computing-in-interactive-digital-art-and-design">Link to information page for IDAD at SETU Carlow</a>
<a href = "https://iadt.ie/courses/ma-animation/">IADT Animation Masters info page</a> <!---The Dream Masters-->
</div>

<h1> Here you can find any relevant contact information for me!</h1>

<!---help from Libor restructing this site on project 1-->
<!---Going to use custom drawings for the images-->
<div class = "contactInfo">
    <Card 
        title = "Phone" 
        src="{base}/phoneDraw.png"
        alt="Drawing of Phone"
        description ="My personal phone number is: 085-211-1818"
    /> 
    <Card 
        title = "Github" 
        src="{base}/githubDrawing.png" 
        alt="Github DrawingS"
        description = "If you would like to add me on Github, my name is Liamcmtreacy, you can also follow this link:
        https://github.com/liamcmtreacy?tab=repositories"
        />
    <Card 
        title = "Linkedin" 
        src="{base}/linkedIN.png" 
        alt="You will be redirected to my Linkedin if you use the link" 
        description = "The following link will take you directly to my Linkedin: https://www.linkedin.com/in/liam-treacy-cw/"
    />

    <Card 
        title = "Emails" 
        src="{base}/emailDraw.png" 
        alt="drawing of a blue envelope, used as the image to depict the contact email" 
        description="If you would like to contact me via email, you can contact me personally by emailing Liamtreacy100@hotmail.com, or you can contact me via my college email by messaging C00298242@setu.ie"
    />
</div>

<a href="{base}/Liam_Treacy_CV.pdf" download="liamcv.pdf" aria-label="Download My CV"> <!---CV WHICH CAN BE DOWNLOADED, HELP FROM LIBOR-->
    <span aria-hidden="true">⬇️</span> Download My CV
  </a> <!----brilliant CV by the way-->



</div>


<style>

.aboutGrid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    background-color: #ffffff88;
    width: 100%;
    max-width: 1200px;
    border: solid black 2px;
    margin: 0 auto;
    padding: 30px;
}

    img {
        max-width: 100%;
        border-radius: 10px;
        border: solid black 2px;
    }

h1 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    border-bottom: solid black 2px;
}

h2 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
     border-bottom: solid black 1px;
}

p {
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    padding: 10px;
}


    .contactInfo { /*PUT THEM ALL IN ONE DIV CLASS */
        display: flex; 
        align-content: center;
        justify-content: space-between; /*allows white space */
        word-spacing: normal;
    }

    .contactInfo:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /*only noticing that I originally had a space after the rgba which caused it to be white, fixed now */
    }

@media (max-width: 768px) {

    .aboutGrid {
        margin-top: 100px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px));
        gap: 10px;
        background-color: #ffffff88;
        padding: 30px;
        border: solid black 2px;
    }

    .contactInfo {
  flex-direction: column; /* TO HAVE THEM APPEAR ONE ON TOP OF ANOTHER */
  gap: 25px;
  padding: 10px;
  align-items: center;
  display: flex;
}

h1 {
    font-size: 28px;
    text-align: center;
    margin-top: 150px;
}

h2 {
    font-size: 24px;
}

p {
    font-size: 20px;
    padding: 10px;
}

#dinglePhoto {
width: 350px;
height: auto;
flex-direction: column;
}

#dingleTrio {
width: 350px;
height: auto;
flex-direction: column;
}

#kkSelfie {
width: 350px;
height: auto;
flex-direction: column;
}
}

@media (max-width: 1024px)
{
    .aboutGrid {
        margin-top: 100px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px));
        gap: 10px;
        background-color: #ffffff88;
        padding: 30px;
        width: auto;
        border: solid black 2px;
    }

h1 {
    font-size: 32px;
    text-align: center;
    margin-top: 125px;
}

h2 {
    font-size: 28px;
}

p {
    font-size: 24px;
}
/*Another huge pain of a page to make responsive */
}

</style>
