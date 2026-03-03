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
		Wanna be animator and creative developer, passionite in storytelling,
		character animation and all around creative work.
	</p>

	<div class="imageWrap fadeIn delay4">
		<img
			id="me"
			src="{base}/kkAnimated.jpeg"
			alt="Group of us at Kilkenny Animated"
		/>
	</div>

	<div class="featured fadeIn delay5">
		<h2>What you can expect to see!</h2>

	<div class="grid">
		<div class="card">
			<img src="{base}/character.png" alt="2D Illustration" />
			<p>2D Character Illustations</p>
		</div>

		<div class="card">
			<img src="{base}/codeHome.png" alt="Proof I can code" />
			<p>Code Based Projects</p>
		</div>

		<div class="card">
			<img src="{base}/testBlender.png" alt="3D Model" />
			<p>3D Modelling</p>
		</div>
</div>

	<h3 class="fadeIn delay6">
		Have a look around — hopefully you like what you see
	</h3>

	<p class="navHint fadeIn delay7">
		Explore my animation, games and artwork using the navigation above.
	</p>

</div>
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

.goal {
	text-align: center;
	font-family: 'Times New Roman', Times, serif;
	font-size: 18px;
	opacity: 0.9;
}

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
	border: 2px solid black;  
}

#me:hover {
	transform: scale(1.02);
}


/* my own work that I made */
.featured {
	text-align: center;
	margin-top: 20px;
}

.featured {
	text-align: center;
	margin-top: 20px;
}

.featured {
	text-align: center;
	margin-top: 30px;
}

.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: 30px;
	margin-top: 25px;
}

/*  card style */ /*took forever to get right */
.card {
	background: #f4e1a1;
	border-radius: 18px;            
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	border: 2px solid black;          /* LOOKS nice in my opinion */
}

.card img {
	width: 100%;
	height: 240px;
	object-fit: contain;
	border-radius: 14px;              
	border: 2px solid black;         
	background: white;                
	padding: 8px;                   
}

.card p {
	margin-top: 12px;
	font-family: 'Times New Roman', Times, serif;
	font-size: 18px;
	font-weight: bold;
}

.card:hover {
	transform: translateY(-8px);
	box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}

.navHint {
	text-align: center;
	font-family: 'Times New Roman', Times, serif;
	font-size: 16px;
	opacity: 0.75;
}

:global(body) {
	background-color: #f2e3c6;
}

.fadeIn {
	opacity: 0;
	transform: translateY(15px);
	animation: fadeUp 0.7s ease forwards;
}
/* Animation delay to make page more dynamic-ish */
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

@keyframes float {
	0%, 100% { transform: translateY(0); }
	50% { transform: translateY(-6px); }
}

@media (max-width: 768px) {
	.homeWrapper {
		margin-top: 140px;
	}

	h1 { font-size: 36px; }
	h2 { font-size: 20px; }
	h3 { font-size: 18px; }

	.grid img {
		height: 180px; /* slightly smaller on mobile */
	}
}
</style>