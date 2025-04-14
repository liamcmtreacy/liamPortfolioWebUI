<h1> Here are games I have created during my time in SETU Carlow</h1>

<h2>Angry Man's Utopia </h2>
<img id = "AMU" src = "/AMU.png" alt = "screenshot of the game I created called Angry Man's Utopia">

<p>Angry Man's Utopia is game I created in Javascript, CSS and HTML for my second year module "UI Programming"
The goal of the game is too collect the fruit on the screen to feed the residents of the Utopian City, however there is enemies who are out to hurt you.</p>

<p>The black and white enemy will cause your score to reset to 0, which can used to your advantage if your socre goes below zero and into the negative figures, the other enemies simply caused damage.
    The game has both a good and bad ending, to get the good ending you must have a score above 0, you will be taken to a screen with peaceful music and a poem about Utopia. The bad ending is acquired by scoring below 0, you will be taken to a black and red screen where a negative poem is displayed and you are scolded for your play style
</p>
<h2> Game Elements</h2>
<img id = "goodEnd" src = "/goodEnding.png" alt = "screenshot of the good ending from my game">
<p>The game has a simple ranking system, which works by taking your current score and comparing it to values in a large if statement, if you score falls between certain values i.e. 0 - 100, you will be given the corresponding rank, 
    they range from E - S+, the game is published on Codeberg instead of Github. The game's multiple endings works simple by checking if your score is above or below 0, and whichever it is, will redirect you to a new page with the good or bad ending </p>


<style>
    #AMU {
        width: 500px;
        height: auto;
        border: solid black 2px;
        margin-left: -950px;
    }

    #goodEnd {
        width: 750px;
        height: auto;
        border: solid black 2px;
        margin-left: -700px;
    }

    p {
        text-align: left;
    }

    h2 {
        text-align: left;
    }
</style>