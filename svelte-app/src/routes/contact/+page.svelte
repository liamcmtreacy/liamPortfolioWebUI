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

<style>
  
  h1 {
    font-size: large;
    font-family: 'Times New Roman', Times, serif;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    border-bottom: solid black 2px;
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
.contactInfo {
  flex-direction: column; /* TO HAVE THEM APPEAR ONE ON TOP OF ANOTHER */
  gap: 25px;
  padding: 10px;
  align-items: center;
  display: flex;
}

h1 {
    font-size: 50px;
    margin-top: 222px;
}
    }
</style>
<!----PROBABLY THE ONLY PAGE THAT GAVE LIKE NO TROUBLE AT ANY STAGE-->