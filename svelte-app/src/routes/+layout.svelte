<script>
    import {Footer, Header} from '$lib';
    </script>
    

    <Header/>
    <main> 
        <slot />
    </main>
    
    <Footer />
    <style>
        main {
            padding: 2rem;
            text-align: center;
            min-height: 100vh;
        }
    </style>