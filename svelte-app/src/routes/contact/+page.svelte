<script>
    import {onMount} from 'svelte';
    import {Card} from '$lib';
    import {Modal} from '$lib';
    import {base} from '$app/paths';

    let showModal = false;

    onMount (() => {
        console.log("About Page Loaded");
    });
</script>


<h1> Here you can find any relevant contact information for me!</h1>

<!---help from Libor restructing this site on project 1-->
<!---Going to use custom drawings for the images, not done yet-->
<div class = "contactInfo">
    <Card 
        title = "Phone" 
        src="./phoneDraw.png"
        alt="Drawing of Phone"
        description ="My personal phone number is: 085-211-1818"
    /> 
    <Card 
        title = "Github" 
        src="./githubDrawing.png" 
        alt="Github DrawingS"
        description = "If you would like to add me on Github, my name is Liamcmtreacy, you can also follow this link:
        https://github.com/liamcmtreacy?tab=repositories"
        />
    <Card 
        title = "Linkedin" 
        src="./" 
        alt="Hello, I'm Liam Treacy, this is my portrait" 
        description = "The following link will take you directly to my Linkedin: https://www.linkedin.com/in/liam-treacy-cw/"
    />

    <Card 
        title = "Emails" 
        src="./emailDraw.png" 
        alt="drawing of a blue envelope, used as the image to depict the contact email" 
        description="If you would like to contact me via email, you can contact me personally by emailing Liamtreacy100@hotmail.com, or you can contact me via my college email by messaging C00298242@setu.ie"
    />
</div>

<style>
    h1 {color: #000000; 
    font-size: 25px;
    font-family: 'Courier New', Courier, monospace;
    border-bottom: #000000;}

    .contactInfo { /*PUT THEM ALL IN ONE DIV CLASS */
        display: flex; 
        align-content: center;
        justify-content: space-between; /*allows white space */
        word-spacing: normal;
    }

    @media (max-width: 768px) {
.contactInfo {
  flex-direction: column; /* TO HAVE THEM APPEAR ONE ON TOP OF ANOTHER */
  gap: 25px;
  padding: 10px;
  align-items: center;
  display: flex;
}

h1 {
    font-size: 50px;
}
    }
</style>