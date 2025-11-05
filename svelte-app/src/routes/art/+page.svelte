<script>
import {base} from '$app/paths';
</script>

<div class = "stylingDiv">

    <h1> Welcome to my Art Page!</h1>
    
<img id = "mayaHou" src="{base}/mayaHouse.png" alt = "a house which is cream and red and was constructed in Maya, it has fences, grass and trees too.">
<img id = "SCR" src="{base}/pubSketch.png" alt = "Doodle I did of two characters in my art style, drinking and smoking">

<p> I have always enjoyed Drawing and Sketching since I was young, my art style is admittedly rather goofy, however it is just second nature now. The two biggest inspirations for my art style was the Henry Stickman series of games, I used to play these 
    a lot and would trace the characters, until I got a bit older and started adding more details and progressively turning it into my own style.

    The other main inspiration was South Park, I always liked how the show had characters with rather exaggerated features, for example huge eyes, and how characters often had hats or clothing to help distinguish them.
<p>
<!---oh man-->
<a href="{base}/artwork.zip" download="liamTreacy_artwork.zip" aria-label="Download My Folder"> <!---FOLDER WHICH CAN BE DOWNLOADED, HELP FROM LIBOR-->
    <span aria-hidden="true">⬇️</span> If you would like to access to a folder with more examples of my art, download this folder
  </a>
<!----So originally I had I created a folder on OneDrive and attached a link, however the link always seemed to not work, so then I tried downloading the folder frmo the onedrive and attaching it, i did not work,
so then I tried to create a new folder on my laptop, then port over the materials and then put it into the project, and this finally worked-->
<!----PROCESS was a lot of trial and error, I used the code Libor provided for the download and tried rework it-->
</div>
<style>

.stylingDiv{ /* HELP FROM FLEXBOX NOTES */
        display: flex;
        gap: 10px;
        background-color: #ffffff88;
        padding: 30px;
        width: 100%;
        max-width: 1200px;
        justify-content: center;
        border: solid black 2px;
        flex-direction: column;
        margin: 0 auto;
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
        margin: 0 auto;
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

         @media (max-width: 1024px) {
            .stylingDiv {
        margin-top: 100px;
    }
            h1 {
        font-size: 40px;
        text-align: center;
        margin-top: 100px;
            }

            

            #SCR {
            width: 350px;
            height: auto;
            flex-direction: row;
            }

            #mayaHou {
            width: 300px;
            height: auto;
            flex-direction: column;
            }

            #sprite {
            width: auto;
            height: auto;
            flex-direction: column;
            }

         }

         @media (min-width: 500px) and (max-width: 624px) { /* TRIAL AND ERROR */
            .stylingDiv {
        margin-top: 100px;
        width: 70%;
    }
            h1 {
        font-size: 24px;
        text-align: center;
        margin-top: 100px;
            }

            p {
    font-size: 16x;
    padding: 10px;
}

            #SCR {
            width: 250px;
            height: 150px;
            flex-direction: row;
            }

            #mayaHou {
            width: 250px;
            height: 150px;
            flex-direction: column;
            }

            #sprite {
            width: 250px;
            height: 250px;
            flex-direction: column;
            }

         }
        
         @media (min-width: 360px) and (max-width: 600px){ /*Pasted from Games Page and MODIFIED */
        .stylingDiv {
        margin-top: 100px;
        width: 80%;
    }
            h1 { 
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

#SCR {
            width: 220px;
            height: 150px;
            flex-direction: row;
            }

            #mayaHou {
            width: 220px;
            height: 150px;
            flex-direction: column;
            }

            #sprite {
            width: 220px;
            height: 200px;
            flex-direction: column;
            margin-right: 25px;
            }
         }
</style>