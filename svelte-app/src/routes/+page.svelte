<script>
import {base} from '$app/paths';
</script>
<h1>Hello, my name is Liam Treacy</h1>
<h2>I am a student at SETU Carlow studying Computing in Interactive Digital Art and Design, welcome to my Portfolio</h2>

<img id="me" src="{base}/kkAnimated.jpeg" alt = "portrait of me with a black and white filter"> <!---I acknowledge how goofy the photo looks-->

<h3>Have a look around, hopefully you like what you see!</h3>

<style>

    h1 {
        font-family:'Times New Roman', Times, serif;
        color: black;
        text-align: center;
        font-size: 60px;
        padding: 2px;
        font-weight: bold;
    }

    h2 {
       text-align: left;
       font-family:'Times New Roman', Times, serif;
    }

    h3 {
        text-align: center;
        font-family:'Times New Roman', Times, serif;
    }

    #me {
        border: solid black 2px;
        width: auto;
        max-width: 100%;
        height: 500px;
        border-radius: 10px;

    }

    :global(body){ /*FOUND HOW TO DO THIS ON STACK OVERFLOW, LINK IN README */
        background-color: burlywood;

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

@media (max-width: 768px) {
h1 {
    margin-top: 220px;
}

#me {
width: 350px;
height: auto;
flex-direction: column;
}
}
</style>