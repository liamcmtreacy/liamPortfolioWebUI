<script>
import {base} from '$app/paths';
</script>

<div class = "style"> <!----MOST LINES OF CODE DUE TO ALL THE IDS-->
<h1> Here are games I have created during my time in SETU Carlow</h1>

<div class = "part1"> <!---EACH OF THE 3 GAMES ARE BROKEN INTO PARTS, ANGRY MAN UTOPIA PART 1-->
<h2>Angry Man's Utopia </h2>
<img id = "AMU" src = "{base}/AMU.png" alt = "screenshot of the game I created called Angry Man's Utopia">

<p>Angry Man's Utopia is game I created in Javascript, CSS and HTML for my second year module "UI Programming"
The goal of the game is too collect the fruit on the screen to feed the residents of the Utopian City, however there is enemies who are out to hurt you.</p>

<p>The black and white enemy will cause your score to reset to 0, which can used to your advantage if your socre goes below zero and into the negative figures, the other enemies simply caused damage.
    The game has both a good and bad ending, to get the good ending you must have a score above 0, you will be taken to a screen with peaceful music and a poem about Utopia. The bad ending is acquired by scoring below 0, you will be taken to a black and red screen where a negative poem is displayed and you are scolded for your play style
</p>

<h2> Game Elements</h2>
<img id = "goodEnd" src = "{base}/goodEnding.png" alt = "screenshot of the good ending from my game">
<p>The game has a simple ranking system, which works by taking your current score and comparing it to values in a large if statement, if you score falls between certain values i.e. 0 - 100, you will be given the corresponding rank, 
    they range from E - S+, the game is published on Codeberg instead of Github. The game's multiple endings works simple by checking if your score is above or below 0, and whichever it is, will redirect you to a new page with the good or bad ending, the game also has audio present. </p>
    
    <a href = "https://ui-programming-24-25.codeberg.page/Liam_Treacy_C00298242_ProgProject/">Link to the live version of Angry Man's Utopia</a>
    <a href = "https://codeberg.org/UI-Programming-24-25/Liam_Treacy_C00298242_ProgProject"> Link to Codeberg Repository for Angry Man's Utopia</a>
</div>
<!----end of part 1, the ANGRY MAN UTOPIA SECTION-->
<div class = "part2"> <!---PART TWO: MAGNET MISADVENTURE, NEW DIV-->
<h2> Magnet Misadventure</h2>
<img id = "MMending" src = "{base}/endScreen1.png" alt = "Title screen for Magnet Misadventure, my game from first year">
<p> Magnet Misadventure was my final project for my first year module "Introduction to Object Orientated Programming". The game was created in C++ SFML, the game is an arcade score attack game where you play as a magnet and have to shoot
    the enemies who are trying to get you, the goal is get the highest score you can and get the best rank you can.   

<h2> Game Elements</h2>
<p>Magnet Misadventure is 2D, and has the player move in 4 directions, up down, left and right as you attempt to kill the enmies, they will respawn
    and get quicker the higher your score, so the more you play, the more difficult it is going to be. The game has a health bar system, your health bar color changes when you get hit, going from Green to Yellow to Red, you have 5 lives, every time you get hit you lose a life.    
</p>
<img id = "code" src = "{base}/mmCode.png" alt = "code from the game">


<a href = "https://github.com/KenPowerClassroom/programming-project-semester-2-liamcmtreacy">
    Link to the Github repository for Magnet Misadventure</a>
</div> <!----END OF PART 2-->

<div class = "part3"> <!----FINAL PART, THIS IS THE DIV ABOUT ARTEFACT BRAWLER-->
    <h2> Artefact Brawler</h2>
    <img id = "ABtitle" src = "{base}/ABsplash.png" alt = "Pixel art of Artefact Brawler's homescreen">
    <p>Artefact Brawler was our final project for the Module "Game Design". I was on a team with 3 of my other classmates, we managed to get a perfect grade for this project, the game is similar to Super Smash Bros Home Run Contest. 
        It is a 2D beat em up arcade game, where the objective is too attack the opposition and get as many hit combos as you can. <br>

        For this project I mainly worked on the art side, along with programming some attacks and the bouncepads, I also edited the trailer for the Project.
    </p>

    <a href = "https://setuo365-my.sharepoint.com/personal/c00298242_setu_ie/_layouts/15/stream.aspx?id=%2Fpersonal%2Fc00298242%5Fsetu%5Fie%2FDocuments%2FTrailer%5FFolder%2FTrailer%2Emov&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ed7995f26%2Db2ea%2D4d24%2Db613%2D82c8163ac89f&isDarkMode=false"> Link to Artefact Brawler Trailer</a>
    <h2>Game Elements</h2>
    <img id = "gameplay" src = "{base}/gameplayAB.png" alt = "gameplay of Artefact Brawler">
    <img id = "shopForAB" src = "{base}/shopForAB.png" alt = "background which I created in Artefact Brawler">

    <p> Artefact Brawler has a timer which counts down, this creates a sense of urgency for the player, the sandbag can be hit in all directions, from any directions. There is also a store where you can purchase more powerful attacks from the coins, the coins are gained from getting higher combos. The sandbag percentage will keep getting higher, there is no limit, because we wanted to have a sense of replayability.</p>
    <a href = "https://github.com/PeterLowe/prototype24-yellow.git">Link to Artefact Brawler Github repository</a>

</div> <!----END OF THE THIRD PART-->
</div> <!----END OF STYLE GRID-->

<style> /*pour a drink, you may be here a while */

.style{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px));
        gap: 10px;
        width: 100%;
        max-width: 1200px;
        background-color: #ffffff88;
        padding: 30px;
        border: solid black 2px;
        margin: 0 auto;
    }

    #gameplay {
        border: solid black 2px;
        border-radius: 10px;
    }

    #shopForAB {
        border: solid black 2px;
        border-radius: 10px;
    }

    #ABtitle {
        border: solid black 2px;
        border-radius: 10px;
    }

    .part1 {
        display: flex;
        flex-direction: column;
    }

    .part2 {
        display: flex;
        flex-direction: column;
    }

    .part3 {
        display: flex;
        flex-direction: column;
    }

    #AMU {
        width: 500px;
        height: auto;
        border: solid black 2px;
        border-radius: 10px;
    }

    #goodEnd {
        width: 750px;
        height: auto;
        border: solid black 2px;        
        border-radius: 10px;
    }

    #MMending {
        width: 500px;
        height: auto;
        border: solid black 2px;
        border-radius: 10px;
    }

    #code {
        width: 500px;
        height: auto;
        border: solid black 2px;
        border-radius: 10px;
    }

    p {
        text-align: left;
        font-family: 'Times New Roman', Times, serif;
    
    }

    h2 {
        text-align: left;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
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

a:hover {
    background-color: rgb(148, 60, 2);
    color: rgb(255, 255, 255);
}

  /*MOBILE RESPOVINESS TESTED BASICALLY ALL WITH TRIAL AND ERROR FOR THE SECOND TIME (make that like the 9th time)*/
  @media (max-width: 768px) {

    .style {
        margin-top: 150px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px));
        gap: 10px;
        background-color: #ffffff88;
        padding: 30px;
        margin: 0 auto;
        border: solid black 2px;
    }

h1 {
    font-size: 36px;
    text-align: center;
    margin-top: 100px;
}

h2 {
    font-size: 28px;
}

p {
    font-size: 20px;
    padding: 10px;
}

#ABtitle {
width: 250px;
height: auto;
flex-direction: column;
}

#goodEnd {
width: 250px;
height: auto;
flex-direction: column;
}

#AMU {
width: 250px; 
height: auto;
flex-direction: column;
}

#MMending {
width: 250px;
height: auto;
flex-direction: column;
}

#code {
width: 350px;
height: auto;
flex-direction: column;
}

#gameplay {
width: 350px;
height: auto;
flex-direction: column;
}

#shopForAB {
width: 350px;
height: auto;
flex-direction: column;
}
}

@media (min-width: 769px) and (max-width: 1024px) {
#gameplay {
width: 650px;
height: auto;
flex-direction: column;
}

#shopForAB {
width: 650px;
height: auto;
flex-direction: column;
}

p {
    font-size: 20px;
    padding: 10px;
}

#ABtitle {
width: 650px;
height: auto;
flex-direction: column;
}
}


@media (max-width: 624px) { 
            .style {
        margin-top: 100px;
        width: 70%;
    }
            h1 { /* help from site in README */
        font-size: 20px;
        width: 250px;
        margin-top: 50px;
        word-wrap: break-word;
            }

            a { 
    width: 200px;
    align-items: center;
}

            p {
    font-size: 16px;
    width: 250px;
    word-wrap: break-word;
}

#ABtitle {
width: 250px;
height: auto;
flex-direction: column;
}

#goodEnd {
width: 250px;
height: 100px;
flex-direction: column;
}

#AMU {
width: 250px; 
height: auto;
flex-direction: column;
}

#MMending {
width: 250px;
height: auto;
flex-direction: column;
}

#code {
width: 250px;
height: auto;
flex-direction: column;
}

#gameplay {
width: 250px;
height: auto;
flex-direction: column;
}

#shopForAB {
width: 250px;
height: auto;
flex-direction: column;
}

         }

         @media (min-width: 360px) and (max-width: 600px){ /*Everytime I push it live I check my phone and my families phones and come back. I THINK THIS IS THE FINAL ONE */
        .style {
        margin-top: 100px;
        width: 80%;
    }
            h1 { /* help from site in README */
        font-size: 18px;
        width: 180px;
        margin-top: 50px;
        word-wrap: break-word;
            }
            
            h2 {
                width: 300px;
                font-size: 20px;
            }
            a { 
    width: 175px;
    align-items: center;
}

            p {
    font-size: 16px;
    width: 190px;
    word-wrap: break-word;
}

#ABtitle {
width: 200px;
height: auto;
flex-direction: column;
}

#goodEnd {
width: 200px;
height: 100px;
flex-direction: column;
}

#AMU {
width: 200px; 
height: auto;
flex-direction: column;
}

#MMending { /* Web Dev can be draining*/
width: 200px;
height: auto;
flex-direction: column;
}

#code {
width: 200px;
height: auto;
flex-direction: column;
}

#gameplay {
width: 200px;
height: auto;
flex-direction: column;
}

#shopForAB {
width: 200px;
height: auto;
flex-direction: column;
}

         }
         
         
       /*Too many lines of code on this page if you ask me */  
</style>