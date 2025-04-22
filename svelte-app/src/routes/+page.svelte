
<h1>Hello, my name is Liam Treacy</h1>
<h2>I am a student at SETU Carlow studying Computing in Interactive Digital Art and Design, welcome to my Portfolio</h2>

<img id = "me" src = "./liamPic.jpg" alt = "portrait of me with a black and white filter">

<a href="/liamCV.pdf" download="My_CV.pdf" aria-label="Download My CV">
    <span aria-hidden="true">⬇️</span> Download My CV
  </a>

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
    margin-top: 100px;
}
}
</style>