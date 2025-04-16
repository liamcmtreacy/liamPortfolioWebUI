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
        src=""
        alt="Drawing of Phone"
        description ="My phone number is: 085-211-1818"
    /> 
    <Card 
        title = "Github" 
        src="./githubDrawing.png" 
        alt="Github DrawingS"
        description = "If you would like to add me on Github, my name is Liamcmtreacy"
        />
    <Card 
        title = "Linkedin" 
        src="" 
        alt="Hello, I'm Liam Treacy, this is my portrait" 
        description = ""
    />

    <Card 
        title = "Emails" 
        src="" 
        alt="" 
        description="My personal Email is: Liamtreacy100@hotmail.com, my college Email is: C00298242@setu.ie"
    />
</div>

<style>
    h1 {color: #5aa1ed; 
    font-size: 25px;
    font-family: 'Courier New', Courier, monospace;
    border-bottom: #5aa1ed;}

    .contactInfo { /*PUT THEM ALL IN ONE DIV CLASS */
        display: flex; 
        align-content: center;
        justify-content: space-between; /*allows white space */
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