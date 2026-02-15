<script>
	import { base } from '$app/paths';
</script>

<div class="homeWrapper">

	<h1 class="fadeIn">Hello, my name is Liam Treacy</h1>

	<h3 class="tagline fadeIn delay1">
		Animation • Games • Visual Storytelling
	</h3>

	<h2 class="fadeIn delay2">
		I am a student at SETU Carlow studying Computing in Interactive
		Digital Art and Design.
	</h2>

	<p class="goal fadeIn delay3">
		Aspiring animator and creative developer focused on storytelling,
		character animation and stylised visuals.
	</p>

	<!-- MAIN IMAGE -->
	<div class="imageWrap fadeIn delay4">
		<img
			id="me"
			src="{base}/kkAnimated.jpeg"
			alt="Group picture at Kilkenny Animated"
		/>
		<p class="caption">
			From Kilkenny Animated — one of the best experiences so far.
		</p>
	</div>

	<!-- FEATURED WORK -->
	<div class="featured fadeIn delay5">
		<h2>Featured Work</h2>

		<div class="grid">
			<img src="{base}/character.png" alt="2D Illustration" />
			<img src="{base}/SCR.png" alt="Idea for cartoon " />
			<img src="{base}/blender.png" alt="3D Model" />
		</div>
	</div>

	<h3 class="fadeIn delay6">
		Have a look around — hopefully you like what you see
	</h3>

	<p class="navHint fadeIn delay7">
		Explore my animation, games and artwork using the navigation above.
	</p>

</div>

<style>
.homeWrapper {
	max-width: 1000px;
	margin: 0 auto;
	padding: 40px 20px;
	display: flex;
	flex-direction: column;
	gap: 25px;
}

/* TEXT STYLE */
h1 {
	font-family: 'Times New Roman', Times, serif;
	color: black;
	text-align: center;
	font-size: 56px;
	font-weight: bold;
}

h2 {
	font-family: 'Times New Roman', Times, serif;
	text-align: center;
	font-size: 24px;
}

h3 {
	text-align: center;
	font-family: 'Times New Roman', Times, serif;
	font-size: 20px;
}

.tagline {
	font-size: 18px;
	opacity: 0.8;
	letter-spacing: 1px;
}

/* GOAL STATEMENT */
.goal {
	text-align: center;
	font-family: 'Times New Roman', Times, serif;
	font-size: 18px;
	opacity: 0.9;
}

/* IMAGE */
.imageWrap {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
}

#me {
	border: solid black 2px;
	width: 100%;
	max-width: 700px;
	height: auto;
	border-radius: 10px;
	transition: transform 0.3s ease;
	animation: float 6s ease-in-out infinite;
}

#me:hover {
	transform: scale(1.02);
}

.caption {
	font-family: 'Times New Roman', Times, serif;
	font-size: 16px;
	opacity: 0.8;
}

/* FEATURED WORK */
.featured {
	text-align: center;
	margin-top: 20px;
}

.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: 20px;
	margin-top: 15px;
}

.grid img {
	width: 100%;
	height: 100%; /* forces same height */
	object-fit: cover; /* crops instead of stretching */
	border-radius: 8px;
	border: 2px solid black;
	transition: transform 0.25s ease, box-shadow 0.25s ease;
	background: #eee; /* prevents ugly gaps while loading */
}

.grid img:hover {
	transform: scale(1.05);
	box-shadow: 0 6px 14px rgba(0,0,0,0.2);
}


/* NAV HINT */
.navHint {
	text-align: center;
	font-family: 'Times New Roman', Times, serif;
	font-size: 16px;
	opacity: 0.75;
}

/* BACKGROUND */
:global(body) {
	background-color: burlywood;
}

/* FADE ANIMATION */
.fadeIn {
	opacity: 0;
	transform: translateY(15px);
	animation: fadeUp 0.7s ease forwards;
}

.delay1 { animation-delay: 0.2s; }
.delay2 { animation-delay: 0.35s; }
.delay3 { animation-delay: 0.5s; }
.delay4 { animation-delay: 0.65s; }
.delay5 { animation-delay: 0.8s; }
.delay6 { animation-delay: 1s; }
.delay7 { animation-delay: 1.15s; }

@keyframes fadeUp {
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

/* FLOAT EFFECT */
@keyframes float {
	0%, 100% { transform: translateY(0); }
	50% { transform: translateY(-6px); }
}

/* MOBILE */
@media (max-width: 768px) {
	.homeWrapper {
		margin-top: 140px; /* space for fixed nav */
	}

	h1 { font-size: 36px; }
	h2 { font-size: 20px; }
	h3 { font-size: 18px; }
}
</style> 