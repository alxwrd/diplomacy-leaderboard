<script>
 
import GameCard from './GameCard.svelte'
import Title from './Title.svelte'


</script>

<div class="flex flex-col lg:flex-row lg:h-auto">
  <div class="w-auto lg:w-1/4" />

  <div
    class="w-auto lg:w-2/4 m-4 bg-gray-100 rounded shadow-lg text-l sm:text-xl
    text-center block h-full">
    <Title />

    <div
      class="text-2xl sm:text-3xl flex rounded shadow-md bg-white -mx-3 mb-6
      h-24">
      <div class="w-1/4 my-auto font-bold text-yellow-400">
        <i class="fas fa-trophy" />
        <div>1st</div>
      </div>
      <div class="w-1/2 my-auto">Adam</div>
      <div class="w-1/4 my-auto">119 pts</div>
    </div>
    <div class="flex h-16">
      <div class="w-1/4 my-auto font-bold text-sm text-gray-400">
        <i class="fas fa-trophy" />
        <div>2nd</div>
      </div>
      <div class="w-1/2 my-auto">Jill</div>
      <div class="w-1/4 my-auto">68 pts</div>
    </div>
    <div class="flex h-16">
      <div class="w-1/4 my-auto font-bold text-sm text-orange-400">
        <i class="fas fa-trophy" />
        <div>3rd</div>
      </div>
      <div class="w-1/2 my-auto">Alex</div>
      <div class="w-1/4 my-auto">67 pts</div>
    </div>
    <div class="flex h-16">
      <div class="w-1/4 my-auto font-bold text-sm">4th</div>
      <div class="w-1/2 my-auto">Steven</div>
      <div class="w-1/4 my-auto">3 pt</div>
    </div>
    <div class="flex h-16">
      <div class="w-1/4 my-auto font-bold text-sm">5th</div>
      <div class="w-1/2 my-auto">Guillermo</div>
      <div class="w-1/4 my-auto">2 pt</div>
    </div>
    <div class="flex h-16">
      <div class="w-1/4 my-auto font-bold text-sm">6th</div>
      <div class="w-1/2 my-auto">Chris</div>
      <div class="w-1/4 my-auto">1 pts</div>
    </div>
    <div class="flex h-16">
      <div class="w-1/4 my-auto font-bold text-sm">6th</div>
      <div class="w-1/2 my-auto">Dale</div>
      <div class="w-1/4 my-auto">1 pts</div>
    </div>
    <div class="flex h-16">
      <div class="w-1/4 my-auto font-bold text-sm">7th</div>
      <div class="w-1/2 my-auto">Lewis</div>
      <div class="w-1/4 my-auto">-1 pts</div>
    </div>
  </div>

  <div class="w-auto lg:w-1/4 m-4 p-4 bg-gray-100 rounded shadow-lg">
    <!-- <div class="mb-4">
        <p class="text-3xl font-semibold">Upcoming Game</p>

      </div> -->

    <div class="mb-4">
      <p class="text-3xl font-semibold">Current Game</p>
      <GameCard
        title="There can be only one"
        image="https://i.imgur.com/9YVLyBc.png"
        url="There-can-be-only-one/4898731797774336" />
    </div>

    <div class="mb-4">
      <p class="text-3xl font-semibold">Previous Games</p>

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
