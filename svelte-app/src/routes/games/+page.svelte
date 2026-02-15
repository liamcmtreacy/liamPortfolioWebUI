<script>
  import { base } from '$app/paths';
</script>

<div class="stylingDiv">

  <h1>Game Development</h1>

  <p>
    Here are the main games I have created during my time studying at SETU Carlow.
    These projects range from solo work to group projects, and were built using
    a mix of web technologies and C++.
  </p>

  <div class="projectGrid">

    <!-- ANGRY MAN'S UTOPIA -->
    <div class="project">
      <h2>Angry Man's Utopia</h2>
      <p class="tech">HTML, CSS & JavaScript</p>

      <p>
        Angry Man's Utopia is a game I created for my second-year module
        <em>UI Programming</em>. The goal of the game is to collect fruit to feed
        the residents of a utopian city, while avoiding enemies that attempt to
        stop you.
      </p>

      <img class="projectImage" src="{base}/AMU.png"
        alt="Screenshot of Angry Man's Utopia gameplay">

      <p>
        The black-and-white enemy resets your score to zero, which can actually
        be used strategically if your score drops into the negatives. Other
        enemies simply deal damage. The game includes both a good and bad ending,
        depending on whether your final score is above or below zero.
      </p>

      <img class="projectImage" src="{base}/goodEnding.png"
        alt="Good ending screen from Angry Man's Utopia">

      <p>
        The game also includes a simple ranking system ranging from E to S+,
        determined using score thresholds. Audio is present throughout, and the
        game redirects the player to different ending screens based on their
        final performance.
      </p>

      <a href="https://ui-programming-24-25.codeberg.page/Liam_Treacy_C00298242_ProgProject/" target="_blank">
        Play Angry Man's Utopia
      </a>

      <a href="https://codeberg.org/UI-Programming-24-25/Liam_Treacy_C00298242_ProgProject" target="_blank">
        View Codeberg Repository
      </a>
    </div>

    <!-- MAGNET MISADVENTURE -->
    <div class="project">
      <h2>Magnet Misadventure</h2>
      <p class="tech">C++ & SFML</p>

      <p>
        Magnet Misadventure was my final project for the first-year module
        <em>Introduction to Object-Oriented Programming</em>. It is a 2D arcade
        score-attack game where the player controls a magnet and shoots enemies
        approaching from all directions.
      </p>

      <img class="projectImage" src="{base}/endScreen1.png"
        alt="Title screen for Magnet Misadventure">

      <p>
        The player can move in four directions, and enemies respawn faster as the
        score increases, gradually ramping up the difficulty. The game includes
        a health bar system that visually changes colour from green to yellow to
        red as the player takes damage.
      </p>

      <img class="projectImage" src="{base}/mmCode.png"
        alt="Code snippet from Magnet Misadventure">

      <p>
        The player has five lives, losing one each time they are hit. The goal is
        to survive as long as possible and achieve the highest rank available.
      </p>

      <a href="https://github.com/KenPowerClassroom/programming-project-semester-2-liamcmtreacy" target="_blank">
        View GitHub Repository
      </a>
    </div>

    <!-- ARTEFACT BRAWLER -->
    <div class="project">
      <h2>Artefact Brawler</h2>
      <p class="tech">Group Project – Game Design</p>

      <p>
        Artefact Brawler was our final group project for the <em>Game Design</em>
        module. We worked in a team of four and achieved a perfect grade. The game
        is inspired by Super Smash Bros' Home Run Contest.
      </p>

      <img class="projectImage" src="{base}/ABsplash.png"
        alt="Artefact Brawler title screen">

      <p>
        It is a 2D beat ’em up arcade game where the objective is to attack a
        sandbag and achieve the highest hit combo possible. For this project, I
        primarily worked on the art direction, programmed some attacks and
        bounce pads, and edited the project trailer.
      </p>

      <img class="projectImage" src="{base}/gameplayAB.png"
        alt="Artefact Brawler gameplay">

      <img class="projectImage" src="{base}/shopForAB.png"
        alt="Artefact Brawler shop background">

      <p>
        The game includes a countdown timer to create urgency, a shop system
        where players can purchase stronger attacks using coins earned from
        combos, and a percentage-based sandbag system with no upper limit to
        encourage replayability.
      </p>

      <a href="https://setuo365-my.sharepoint.com/personal/c00298242_setu_ie/_layouts/15/stream.aspx" target="_blank">
        Watch Artefact Brawler Trailer
      </a>

      <a href="https://github.com/PeterLowe/prototype24-yellow.git" target="_blank">
        View GitHub Repository
      </a>
    </div>

  </div>
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

  .tech {
    font-size: 16px;
    font-style: italic;
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

  @media (max-width: 600px) {
    h1 {
      font-size: 22px;
    }

    p {
      font-size: 16px;
    }

    a {
      font-size: 16px;
    }
  }
</style>
