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
	top: 0;
	left: 0;
	width: 100%;
	position: fixed;
	z-index: 1000; /* prevents weird overlap bugs */
}

nav ul {
	list-style: none;
	padding: 10px;
	margin: 0;
	display: flex;
	justify-content: center;
}

nav ul li {
	margin: 0 70px;
}

nav ul li a {
	text-decoration: none;
	color: white;
	font-weight: bold;
	font-family: 'Courier New', Courier, monospace;
	transition: 0.3s ease;
}

nav ul li a:hover {
	color: rgb(255, 85, 0);
}

/* Tablet */
@media (max-width: 1024px) {
	nav ul li {
		margin: 0 15px;
	}
	nav ul li a {
		font-size: 13px;
	}
}

/* Mobile */
@media (max-width: 624px) {
	nav ul li {
		margin: 0 6px;
	}
	nav ul li a {
		font-size: 11px;
	}
}
</style>
