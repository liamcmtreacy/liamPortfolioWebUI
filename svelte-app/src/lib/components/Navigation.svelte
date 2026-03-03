<script>
	import { base } from '$app/paths';
</script>

<nav>
	<ul>
		<li><a href="{base}/">Home Page</a></li>
		<li><a href="{base}/art">My Artwork</a></li>
		<li><a href="{base}/games">Games I have created</a></li>
		<li><a href="{base}/webDev">Web Development</a></li>
		<li><a href="{base}/AboutMe">About Me</a></li>
	</ul>
</nav>

<style>
nav {
	background-color: #000;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 9999; /* higher than anything else */
	padding: 12px 0;
	box-shadow: 0 4px 12px rgba(0,0,0,0.2); /* subtle polish */
}

nav ul {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	gap: 50px; /* cleaner spacing */
}

nav ul li a {
	text-decoration: none;
	color: white;
	font-weight: bold;
	font-family: 'Courier New', Courier, monospace;
	position: relative;
	padding: 6px 10px;
	transition: color 0.25s ease;
}

/* underline animation instead of background flicker */
nav ul li a::after {
	content: "";
	position: absolute;
	left: 0;
	bottom: -4px;
	width: 0%;
	height: 2px;
	background: rgb(255, 85, 0);
	transition: width 0.25s ease;
}

nav ul li a:hover {
	color: rgb(255, 85, 0);
}

nav ul li a:hover::after {
	width: 100%;
}

/* Tablet */
@media (max-width: 1024px) {
	nav ul {
		gap: 20px;
	}
	nav ul li a {
		font-size: 13px;
	}
}

/* Mobile */
@media (max-width: 624px) {
	nav ul {
		gap: 10px;
	}
	nav ul li a {
		font-size: 11px;
	}
}
</style>
