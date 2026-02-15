<script>
  import { base } from '$app/paths';
</script>

<div class="stylingDiv">

  <h1>Website Development</h1>

  <p>
    During college, I have learned to use HTML, CSS, JavaScript, and Svelte.
    Most of my web work comes from coursework and personal projects, and this
    portfolio itself was built using Svelte. Below are the main websites I have
    worked on so far.
  </p>

  <div class="projectGrid">

    <div class="project">
      <h2>The World of Whales</h2>
      <p class="tech">Designed using HTML, CSS, JavaScript and Svelte</p>
      <p>
        This was a group project where we created a full website based around whales. I was the team leader, my job was responsiveness, the home page, Moby Dick and also generally managing the project.
      </p>
      <img id="Whale" src="{base}/worldWhales.png" alt="World Of Whales homescreen sceenshot">
      <a href="https://liamcmtreacy.github.io/WebUI_LiamMikeyJess_groupProject/" target="_blank">
        Visit The World of Whales
      </a>
    </div>

    <div class="project">
      <h2>Hotel Booking App</h2>
      <p class="tech">Designed using Flutter and Dart</p>
      <p>
        A hotel booking app which I built for my module, "Advanced UI Programming" I tried give the hotel some personality and made sure it had features I would want in a good hotel.
      </p>
        <img id="hotel" src="{base}/liamLounge.png" alt="Second screen after log in of Hotel Booking App">
        <a href="https://www.c00298242.candept.com/hotel_app_liam/" target="_blank">
        Visit Hotel Booking App
      </a>
    </div>

    <div class="project">
      <h2>John Treacy Driving Lessons</h2>
      <p class="tech">Designed using Wordpress and Plug ins</p>
      <p>
        This website was designed for my father, who is a driving instructor, with the goal of him being eventually able to use it to take bookinsg for lessons.
      </p>
        <img id="JTL" src="{base}/JohnTLessons.png" alt="Home screen for website created for John Treacy's driving lessons">
        <a href="https://www.c00298242.candept.com/JohnTLessons/" target="_blank">
        Visit Driving Lessons Website
      </a>
    </div>

    <div class="project">
      <h2>Web Zine</h2>
      <p class="tech">Designed in HTML, CSS, JavaScript and Svelte</p>
      <p>
        This was for a module called Creative Studio, the assignment was to create a zine, I tried to stand out by doing a Web Zine, overall very hapyp with this one
        <img id="zine" src="{base}/oceanZine.png" alt="Catalouge portion of Web Zine">
      </p>
      <a href="https://liamcmtreacy.github.io/CreativeStudio_assignment03/" target="_blank">
        Visit Web Zine
      </a>
    </div>

  </div>
</div>

<style>
  .stylingDiv {
    display: flex;
    gap: 20px;
    background-color: #ffffff88;
    padding: 30px;
    width: 100%;
    max-width: 1200px;
    justify-content: center;
    border: solid black 2px;
    flex-direction: column;
    margin: 0 auto;
  }

  h1 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 32px;
    font-weight: bold;
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
    padding: 10px 0;
  }

  .tech {
    font-style: italic;
    font-size: 16px;
  }

  .projectGrid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .project {
    border-bottom: solid black 2px;
    padding-bottom: 20px;
  }

  /* -------- Image Styling -------- */

  img {
    display: block;
    width: 100%;
    max-width: 700px;
    height: auto;
    margin: 20px auto;
    border: solid black 2px;
    background-color: white;
  }

  #Whale,
  #hotel,
  #JTL,
  #zine {
    border-radius: 4px;
  }

  /* -------- Links -------- */

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

  /* -------- Responsive -------- */

  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
      margin-top: 50px;
    }

    h2 {
      font-size: 22px;
    }

    p {
      font-size: 18px;
    }

    img {
      max-width: 100%;
    }
  }

  @media (max-width: 500px) {
    .stylingDiv {
      width: 85%;
      margin-top: 80px;
    }

    h1 {
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
