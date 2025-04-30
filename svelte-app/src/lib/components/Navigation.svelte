<script>
	import Page from "../../routes/+page.svelte";
    import {base} from '$app/paths';
 
</script>
<nav>
    <ul>
        <li><a href = {`${base}/`}> Home Page</a></li>
        <li><a href = {`${base}/art`}> My Artwork</a></li>
        <li><a href = {`${base}/games`}> Games I have created</a></li>
        <li><a href = {`${base}/college`}>My Studies</a></li>
        <li><a href = {`${base}/Whales`}> The World of Whales </a></li>
        <li><a href = {`${base}/contact`}> Contact Me </a></li>
        <li><a href = {`${base}/AboutMe`}> About Me </a></li>
    </ul>
</nav>

    <style>

        nav {
            background-color: #000000;
            top: 0%; /*added due to responsivenss errors */
            left: 0; /* The Nav Bar for some reason is off, so used this to put in the right place, originally did trial and error with Margin-Left but found this works better */
            width: 100%;
            position: fixed; /*Found online, that this will keep the NAV Bar from scrolling, I think this could be a good feature have as it could allow for ease of access to other pages */
        }

        nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
        }
    
        nav ul li {
            margin: 0 70px;
        }
    
        nav ul li a {
            text-decoration: none;
            color: rgb(255, 255, 255);
            font-weight: bold;
            font-family: 'Courier New', Courier, monospace;
            position: relative;
            transition: 0.4s ease; /* from Blackboard Week 6.1 Notes, used on Nav Bar for a nice feel */
        }

        nav ul li a:hover {
         color: rgb(255, 85, 0);
        }
 
        nav a:hover {
         cursor: pointer;
         background-color: rgba(255, 255, 255, 0.753);
        }

        @media (max-width: 768px) {
        nav {
            width: 100%;
        }
        /*changed both NAV uls to a row, to look cleaner */
        nav ul {
            flex-direction: row;
            align-items: center;
        }

        nav ul li {
            margin: 10px 0;
        }
}

@media (max-width: 1024px) {
    nav {
        width: 100%;
    }

    nav ul {
        flex-direction: row; /*As seen in Week 7 notes, row is default */
        justify-content: center;
    }

    nav ul li {
            margin: 11px 10px;
        }

        nav ul li a {
           font-size: 13px;
        }

}
    </style>