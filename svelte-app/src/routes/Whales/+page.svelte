<h1>Here is the link to the website I made, as part of a group project</h1>
<div class="gifBG">
    <div class="overlay"></div>
</div>
<a href= "https://liamcmtreacy.github.io/WebUI_LiamMikeyJess_groupProject/"> Link to The World of Whales</a> 
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

@keyframes gifs {
         0%, 100% { 
             background-image: url('/whaleCrash.gif');
             opacity: 0.3;
         }   
         }
</style>