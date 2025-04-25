<div class = "stylingDiv">

    <h1> Welcome to my Art Page!</h1>
    
<img id = "mayaHou" src = "/mayaHouse.png" alt = "a house which is cream and red and was constructed in Maya, it has fences, grass and trees too.">
<img id = "SCR" src = "/pubSketch.png" alt = "Doodle I did of two characters in my art style, drinking and smoking">

<p> I always enjoyed Drawing and Sketching since I was young, my art style is admittedly rather goofy, however it is just second nature now. The two biggest inspirations for it was the Henry Stickman series of games, I used to play these 
    a lot and would trace the characters, until I got a bit older and started adding more details, would I like to think was due to the fact I got better at drawing the older I got.

    The other main inspiration was South Park, I always liked how the show had characters with rather exaggerated features, for example huge eyes, and how characters often had hats or clothing to help distinguish them.
<p>

<img id = "sprite" src = "/aseprite.png" alt = "aseprite drawing of my art style">

<p> Asperite is a software I first learned in January 2024, I find it very enjoyable to use and see it as a great tool for backgrounds and characters, as I have used it for all the games I created,.As for Maya/3D modelling as a whole, I am still somewhat new to the process, as we only started learning it in January 2025, however I am rather hooked and do really enjoy seeing something come together, below I will attach a folder of some miscellanous art work I have done throughout my life</p>
<a href = "https://setuo365-my.sharepoint.com/:f:/g/personal/c00298242_setu_ie/EvHRUtVvEl1Gv1n3K1pTKCsBvApblrRDsDrk8K_Rhy5MmQ?e=gGU6LT"> Link to Folder</a>
</div>
<style>

.stylingDiv{ /* HELP FROM FLEXBOX NOTES */
        display: flex;
        gap: 10px;
        background-color: #ffffff88;
        padding: 30px;
        align-items: center; 
        border: solid black 2px;
        flex-direction: column;
    }

h1 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    border-bottom: solid black 2px;
}

p {
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    font-size: 20px;
    padding: 10px;
}

#mayaHou {
    width: 500px;
    align-items: center;
        height: auto;
        border: solid black 2px;
        border-radius: 10px;
}

#sprite { width: 500px;
    align-items: center;
        height: auto;
        border: solid black 2px;
        border-radius: 10px;
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

#SCR {
    width: auto;
        height: auto;
        border: solid black 2px;
        border-radius: 10px;
}

@media (max-width: 768px) {

    .stylingDiv {
        margin-top: 100px;
    }
            h1 {
        font-size: 36px;
        text-align: center;
        margin-top: 100px;
            }

            #SCR {
            width: 350px;
            height: auto;
            flex-direction: column;
            }

            #mayaHou {
            width: 350px;
            height: auto;
            flex-direction: column;
            }

            #sprite {
                width: 350px;
            height: auto;
            flex-direction: column;
            }

         }
</style>