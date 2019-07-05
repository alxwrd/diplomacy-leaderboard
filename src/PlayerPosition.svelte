<script>
  export let position = "";
  export let name = "";
  export let points = "";

  let rankColourMap = {
    "1st": "yellow",
    "2nd": "gray",
    "3rd": "orange"
  };

  let style = "h-16";
  if (position === "1st") {
    style = "text-2xl sm:text-3xl flex rounded shadow-md bg-white -mx-3 mb-6 h-24";
  }
</script>

<div class="flex {style}">
  <div
    class="w-1/4 my-auto font-bold {position === '1st' ? '' : 'text-sm'}
    text-{rankColourMap[position]}-400">
    {#if rankColourMap[position]}
      <i class="fas fa-trophy" />
    {/if}
    <div>{position}</div>
  </div>
  <div class="w-1/2 my-auto">{name}</div>
  <div class="w-1/4 my-auto">{points} pts</div>
</div>
