<script>
  import { base } from '$app/paths';
</script>

<div class="stylingDiv">

  <h1>Art & Visual Work</h1>

  <p>
    I have always enjoyed drawing and sketching from a young age. My art style
    is admittedly a bit goofy, but at this point it feels second nature to me.
    Over time it has slowly evolved into something that feels like my own.
  </p>

  <p>
    Two of the biggest influences on my style were the <em>Henry Stickmin</em>
    games, which I used to play (and trace) when I was younger, and
    <em>South Park</em>, particularly its exaggerated character designs and
    strong use of simple visual traits like hats and large eyes to distinguish
    characters.
  </p>

  <div class="projectGrid">

    <!-- 3D MODELLING -->
    <div class="project">
      <h2>3D Modelling – Maya</h2>

      <img
        class="projectImage"
        src="{base}/mayaHouse.png"
        alt="A house model created in Maya with fences, grass and trees"
      />

      <p>
        This is a 3D environment piece created in Maya. I focused on clean,
        readable shapes and colour contrast rather than realism, as I prefer
        stylised visuals that feel approachable and clear.
      </p>
    </div>

    <!-- SKETCHES -->
    <div class="project">
      <h2>Sketches & Character Art</h2>

      <img
        class="projectImage"
        src="{base}/pubSketch.png"
        alt="Doodle of two characters in my art style drinking and smoking"
      />

      <p>
        Most of my 2D work revolves around loose sketches and character designs.
        I tend to exaggerate proportions and facial features, leaning into a
        cartoon style that prioritises personality over realism.
      </p>
    </div>

    <!-- ANIMATION -->
    <div class="project">
      <h2>Animation</h2>

      <video class="projectVideo" controls preload="metadata">
        <source src="{base}/starFishedited.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p>
        This is a short animation project focusing on movement, timing and visual
        clarity. I enjoy animation as a way to bring the characters and styles I
        draw to life, even in small, simple pieces like this.
      </p>
    </div>

  </div>

  <a
    href="{base}/artwork.zip"
    download="liamTreacy_artwork.zip"
    aria-label="Download my artwork folder"
  >
    ⬇️ Download a folder with more examples of my artwork
  </a>

</div>

<style>
  .stylingDiv {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    padding-bottom: 20px;
    border-bottom: solid black 2px;
  }

  .projectImage {
    width: 100%;
    max-width: 700px;
    height: auto;
    border: solid black 2px;
    border-radius: 10px;
    margin: 15px 0;
  }

  .projectVideo {
    width: 100%;
    max-width: 700px;
    border: solid black 2px;
    border-radius: 10px;
    margin: 15px 0;
    background: black;
  }

  a {
    display: block;
    text-align: center;
    font-size: 20px;
    color: black;
    text-decoration: none;
    padding: 10px;
  }

  a:hover {
    background-color: rgb(148, 60, 2);
    color: white;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }

    a {
      font-size: 16px;
    }
  }
</style>
