<script>
  import GameCard from "./GameCard.svelte";
  import Title from "./Title.svelte";

  import PlayerPosition from "./PlayerPosition.svelte";
</script>

<div class="flex flex-col lg:flex-row lg:h-auto">
  <div class="w-auto lg:w-1/4" />

  <div
    class="w-auto lg:w-2/4 m-4 bg-gray-100 rounded shadow-lg text-l sm:text-xl
    text-center block h-full">
    <Title />

    <PlayerPosition position="1st" name="Adam" points="117" />
    <PlayerPosition position="2nd" name="Jill" points="109" />
    <PlayerPosition position="3rd" name="Alex" points="106" />
    <PlayerPosition position="4th" name="Steven" points="48" />
    <PlayerPosition position="5th" name="Chris" points="3" />
    <PlayerPosition position="6th" name="Guillermo" points="2" />
    <PlayerPosition position="7th" name="Dale" points="1" />
    <PlayerPosition position="8th" name="Lewis" points="-1" />
  </div>

  <div class="w-auto lg:w-1/4 m-4 p-4 bg-gray-100 rounded shadow-lg">
    <!--
    <div class="mb-4">
        <p class="text-3xl font-semibold">Upcoming Game</p>

    </div>
    -->

    <div class="mb-4">
      <p class="text-3xl font-semibold">Current Game</p>
      <GameCard
        title="War never changes"
        image="https://i.imgur.com/8cJkBGy.png"
        url="War-never-changes/5949957893259264" />
    </div>

    <div class="mb-4">
      <p class="text-3xl font-semibold">Previous Games</p>

      <GameCard
        title="There can be only one"
        image="https://i.imgur.com/9YVLyBc.png"
        url="There-can-be-only-one/4898731797774336" />
      <GameCard
        title="I'm the captain now"
        image="https://i.imgur.com/m3IM0XJ.png"
        url="Im-the-captain-now/5756378583400448" />
      <GameCard
        title="All your base"
        image="https://i.imgur.com/j0vqSdh.png"
        url="All-your-base/6265356610437120" />
      <GameCard
        title="As yet untitled"
        image="https://upload.wikimedia.org/wikipedia/en/3/3f/As_Yet_Untitled.jpg"
        url="As-yet-untitled/5981894724812800" />
    </div>
  </div>
</div>
