import { d as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload) {
  $$payload.out += `<div class="stylingDiv svelte-ijst6u"><h1 class="svelte-ijst6u">Game Development</h1> <p class="svelte-ijst6u">Here are the main games I have created during my time studying at SETU Carlow.
    These projects range from solo work to group projects, and were built using
    a mix of web technologies and C++.</p> <div class="projectGrid svelte-ijst6u"><div class="project svelte-ijst6u"><h2 class="svelte-ijst6u">Angry Man's Utopia</h2> <p class="tech svelte-ijst6u">HTML, CSS &amp; JavaScript</p> <p class="svelte-ijst6u">Angry Man's Utopia is a game I created for my second-year module <em>UI Programming</em>. The goal of the game is to collect fruit to feed
        the residents of a utopian city, while avoiding enemies that attempt to
        stop you.</p> <img class="projectImage svelte-ijst6u"${attr("src", `${stringify(base)}/AMU.png`)} alt="Screenshot of Angry Man's Utopia gameplay"> <p class="svelte-ijst6u">The black-and-white enemy resets your score to zero, which can actually
        be used strategically if your score drops into the negatives. Other
        enemies simply deal damage. The game includes both a good and bad ending,
        depending on whether your final score is above or below zero.</p> <img class="projectImage svelte-ijst6u"${attr("src", `${stringify(base)}/goodEnding.png`)} alt="Good ending screen from Angry Man's Utopia"> <p class="svelte-ijst6u">The game also includes a simple ranking system ranging from E to S+,
        determined using score thresholds. Audio is present throughout, and the
        game redirects the player to different ending screens based on their
        final performance.</p> <a href="https://ui-programming-24-25.codeberg.page/Liam_Treacy_C00298242_ProgProject/" target="_blank" class="svelte-ijst6u">Play Angry Man's Utopia</a> <a href="https://codeberg.org/UI-Programming-24-25/Liam_Treacy_C00298242_ProgProject" target="_blank" class="svelte-ijst6u">View Codeberg Repository</a></div> <div class="project svelte-ijst6u"><h2 class="svelte-ijst6u">Magnet Misadventure</h2> <p class="tech svelte-ijst6u">C++ &amp; SFML</p> <p class="svelte-ijst6u">Magnet Misadventure was my final project for the first-year module <em>Introduction to Object-Oriented Programming</em>. It is a 2D arcade
        score-attack game where the player controls a magnet and shoots enemies
        approaching from all directions.</p> <img class="projectImage svelte-ijst6u"${attr("src", `${stringify(base)}/endScreen1.png`)} alt="Title screen for Magnet Misadventure"> <p class="svelte-ijst6u">The player can move in four directions, and enemies respawn faster as the
        score increases, gradually ramping up the difficulty. The game includes
        a health bar system that visually changes colour from green to yellow to
        red as the player takes damage.</p> <img class="projectImage svelte-ijst6u"${attr("src", `${stringify(base)}/mmCode.png`)} alt="Code snippet from Magnet Misadventure"> <p class="svelte-ijst6u">The player has five lives, losing one each time they are hit. The goal is
        to survive as long as possible and achieve the highest rank available.</p> <a href="https://github.com/KenPowerClassroom/programming-project-semester-2-liamcmtreacy" target="_blank" class="svelte-ijst6u">View GitHub Repository</a></div> <div class="project svelte-ijst6u"><h2 class="svelte-ijst6u">Artefact Brawler</h2> <p class="tech svelte-ijst6u">C++ &amp; SFML</p> <p class="svelte-ijst6u">Artefact Brawler was our final group project for the <em>Game Design</em> module. We worked in a team of four and achieved a perfect grade. The game
        is inspired by Super Smash Bros' Home Run Contest.</p> <img class="projectImage svelte-ijst6u"${attr("src", `${stringify(base)}/ABsplash.png`)} alt="Artefact Brawler title screen"> <p class="svelte-ijst6u">It is a 2D beat ’em up arcade game where the objective is to attack a
        sandbag and achieve the highest hit combo possible. For this project, I
        primarily worked on the art direction, programmed some attacks and
        bounce pads, and edited the project trailer.</p> <img class="projectImage svelte-ijst6u"${attr("src", `${stringify(base)}/gameplayAB.png`)} alt="Artefact Brawler gameplay"> <img class="projectImage svelte-ijst6u"${attr("src", `${stringify(base)}/shopForAB.png`)} alt="Artefact Brawler shop background"> <p class="svelte-ijst6u">The game includes a countdown timer to create urgency, a shop system
        where players can purchase stronger attacks using coins earned from
        combos, and a percentage-based sandbag system with no upper limit to
        encourage replayability.</p> <a href="https://setuo365-my.sharepoint.com/personal/c00298242_setu_ie/_layouts/15/stream.aspx" target="_blank" class="svelte-ijst6u">Watch Artefact Brawler Trailer</a> <a href="https://github.com/PeterLowe/prototype24-yellow.git" target="_blank" class="svelte-ijst6u">View GitHub Repository</a></div> <div class="project svelte-ijst6u"><h2 class="svelte-ijst6u">An Phiast's Decisions</h2> <p class="tech svelte-ijst6u">HTML, CSS &amp; JavaScript</p> <p class="svelte-ijst6u">An Phiast's Decisions was a project for the third-year module <em>Interactive Content Creation</em>. It was created for the Dingle Animation festival competition, although our game was not selected, it was a great experience</p> <p class="svelte-ijst6u">The player controls An Phiast, the idea of the game is a choose your own adventure game, the game has 3 levels, each level is supposed to demonstrate different aspects of the game.</p> <img class="projectImage svelte-ijst6u"${attr("src", `${stringify(base)}/APD_Image.png`)} alt="An Phiast's Decisions"> <a href="https://github.com/liamcmtreacy/LiamJeffreyOla_AnPhiast" target="_blank" class="svelte-ijst6u">View GitHub Repository</a></div></div></div>`;
}
export {
  _page as default
};
