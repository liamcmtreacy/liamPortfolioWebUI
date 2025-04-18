<script>
    import {base} from '$app/paths';
    export let title = "Card Title";
    export let src= "";
    export let alt= "";
    export let description = "Description";
    export const link = ""; // originally I tried export let link, however Svelte suggested export const Link, trying to get this to work now 

    let expanded = false;
</script>

<!----CODE IMPORTED FROM WHALE PROJECT, CODE WAS WRITTEN BY Myself and Mikey Holmes-->
<div class = "Card">
<img src={src} alt ={alt}>
<div class = "content">
    <h2>{title}</h2>
</div>
<p transition:fade>{expanded ? description : description.substring(0, 5) + '...'}</p>
<button class="read-more" on:click={() => expanded = !expanded}>
    {expanded ? "Read Less" : "Read More"}
</button>
</div>


<style>
    .Card{
    background: white;
    border-radius: 10px;
    border: 3px solid #007bff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    width: 100%;
    max-width: 350px;
    margin: 0.5rem;
    flex: 1 1 30%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeInSlide 0.6s ease-out;
    }

    .Card > img {
        width: 100%;
        height: auto;
        border-radius: 8px 8px 0 0;
    }


    .content h2::before {
        content: "";
        display: block;
        width: 40%;
        height: 2px;
        background: #007bff;
        margin: 0 auto 10px auto;
        transition: width 0.3s ease-in-out;
    }

    @keyframes fadeInSlide {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .Card {
        animation: fadeInSlide 0.6s ease ease-out;
    }

    .Card div {
    transition: all 0.3s ease-in-out;
    }

    @keyframes fadeInSlide 
    {
        0% {
        opacity: 0;
        transform: translateY(20px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .read-more {
    background: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 10px;
    transition: background 0.3s ease;
    }

    .read-more:hover {
    background: #0056b3;
    }

    p {
    font-size: 16px;
    color: #333; 
    line-height: 1.6; 
    text-align: justify; 
    padding: 10px; 
    max-width: 90%; 
    margin: 0 auto; 
    }

    @media (max-width: 900px) {
    .Card {
        flex: 1 1 45%;
        }
    }

    @media (max-width: 600px) {
    .Card {
        flex: 1 1 100%;
        }
    }

</style>