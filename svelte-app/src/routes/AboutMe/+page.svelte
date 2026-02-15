<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { Card } from '$lib';

  onMount(() => {
    console.log("About Page Loaded");
  });
</script>

<div class="stylingDiv">

  <h1>About Me</h1>

  <p>
    My name is Liam Treacy. I was born on February 24th, 2004 in County Kilkenny
    and currently live in Ballinkillen, County Carlow.
  </p>

  <p>
    I am currently studying Computing in Interactive Digital Art and Design and
    will graduate in 2027. I enjoy constantly improving my skills and exploring
    new ways of creating things. My long-term goal is to work in animation and
    eventually create an animated series of my own.
  </p>

  <p>
    I currently work in Eddie Rockets in Carlow and volunteer at the VISUAL
    Centre for Contemporary Art & Theatre. After graduating, I hope to continue
    my education by completing the IADT MA in Animation.
  </p>

  <!-- EVENTS -->
  <h1>Events & Industry Experiences</h1>

  <div class="projectGrid">

    <div class="project">
      <h2>Dingle Animation Festival 2025</h2>

      <img
        class="projectImage"
        src="{base}/dingle.png"
        alt="Two classmates and I at Dingle Animation Festival"
      />

      <p>
        From March 20th–22nd 2025, I attended Dingle Animation Festival as part
        of my course. It was an incredible opportunity to meet industry
        professionals, build connections, and take part in events like Pitch for
        a Pint and workshops with artists such as Will Sliney.
      </p>

      <a
        href="https://www.setu.ie/news/setu-students-shortlisted-at-dingle-animation-festival"
        target="_blank"
      >
        Read the SETU article about our trip
      </a>

      <img
        class="projectImage"
        src="{base}/dingleTrio.png"
        alt="Group photo from Dingle Animation Festival"
      />
    </div>

    <div class="project">
      <h2>Brown Bag Films & Kilkenny Animated</h2>

      <img
        class="projectImage"
        src="{base}/kkSelfie.jpg"
        alt="Photo from Kilkenny Animated"
      />

      <p>
        In April 2025 I attended a Brown Bag Films event covering storyboarding,
        Unreal Engine in animation, and directing. I also attended Kilkenny
        Animated later that year, which gave me more opportunities to meet both
        aspiring artists and industry professionals.
      </p>
    </div>

  </div>

  <!-- COURSE -->
  <h1>What I'm Studying</h1>

  <p>
    I am enrolled in Computing in Interactive Digital Art and Design at SETU
    Carlow. The course covers animation, game design, web development and
    creative technologies, while also preparing students for real industry
    workflows.
  </p>

  <a href="https://www.setu.ie/courses/bsc-hons-in-computing-in-interactive-digital-art-and-design" target="_blank">
    Learn more about IDAD at SETU
  </a>

  <a href="https://iadt.ie/courses/ma-animation/" target="_blank">
    IADT MA Animation Course
  </a>

  <!-- CONTACT -->
  <h1>Contact & Links</h1>

  <div class="contactGrid">

    <Card
      title="GitHub"
      src="{base}/githubDrawing.png"
      alt="GitHub drawing"
      description="You can view my repositories at:
      https://github.com/liamcmtreacy"
    />

    <Card
      title="LinkedIn"
      src="{base}/linkedIN.png"
      alt="LinkedIn drawing"
      description="Connect with me on LinkedIn:
      https://www.linkedin.com/in/liam-treacy-cw/"
    />

    <Card
      title="Email"
      src="{base}/emailDraw.png"
      alt="Drawing of an envelope"
      description="Personal: Liamtreacy100@hotmail.com
      College: C00298242@setu.ie"
    />

  </div>

  <a
    href="{base}/Liam_Treacy_CV.pdf"
    download="liamcv.pdf"
    aria-label="Download my CV"
  >
    ⬇️ Download My CV
  </a>

</div>

<style>
  .stylingDiv {
    display: flex;
    flex-direction: column;
    gap: 25px;
    background-color: #ffffff88;
    padding: 30px;
    max-width: 1200px;
    margin: 0 auto;
    border: solid black 2px;
  }

  h1 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 32px;
    text-align: center;
    border-bottom: solid black 2px;
  }

  h2 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 26px;
  }

  p {
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
  }

  .projectGrid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .project {
    border-bottom: solid black 2px;
    padding-bottom: 20px;
  }

  .projectImage {
    width: 100%;
    max-width: 700px;
    height: auto;
    border: solid black 2px;
    border-radius: 10px;
    margin: 15px 0;
  }

  .contactGrid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  a {
    display: block;
    text-align: center;
    font-size: 20px;
    color: black;
    text-decoration: none;
    padding: 8px;
  }

  a:hover {
    background-color: rgb(148, 60, 2);
    color: white;
  }

  /* Mobile */
  @media (max-width: 600px) {
    h1 { font-size: 22px; }
    h2 { font-size: 20px; }
    p { font-size: 16px; }
    a { font-size: 16px; }

    .contactGrid {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
