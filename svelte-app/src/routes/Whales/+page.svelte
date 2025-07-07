<script>
import {base} from '$app/paths';
</script>

<h1> Website Development</h1>
<p> During College I have learned to use HTML, CSS, Javascript and Svelte, currentl my portfolio and this group project are the main websites I have made, my game "Angry Man's Utopia" was made using HTML, CSS and Javascript</p>

<h1>Here is the link to the website I made, as part of a group project</h1>
<div class="gifBG">
    <div class="overlay"></div> <!-----hepl with background-->
</div> 
<a href="https://liamcmtreacy.github.io/WebUI_LiamMikeyJess_groupProject/"> Link to The World of Whales</a> 
<!---used same logic as links to parts of the same site, tested it with our website for an external link and works as intended-->

<style>
/* CODE TAKEN DIRECTLY FROM PREVIOUS PROJECT */
.gifBG {
    position: fixed; 
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    animation: gifs 25s infinite steps(1);
    overflow: hidden;
    z-index: -10000;
}

h1 {
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        border-bottom: solid black 2px;
    }

a { 
    display: block;
    text-align: center;
    font-size: 20px;
    color: black;
    text-decoration: none;
}

p {
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    padding: 10px;
}

a:hover {
    background-color: rgb(148, 60, 2);
    color: rgb(255, 255, 255);
}

         @media (max-width: 768px) {
            h1 {
        font-size: 36px;
        text-align: center;
        margin-top: 50px;
            }
         }

         @media (max-width: 624px) {
            h1 {
        font-size: 36px;
        text-align: center;
        margin-top: 50px;
            }
         }
</style>
<!----From previous Project, help from Libor-->
{@html `<style> 
    @keyframes gifs { 
        0%, 100% { 
            background-image: url('${base}/whaleCrash.gif');
            opacity: 0.5;
            
        }
}
</style`}
