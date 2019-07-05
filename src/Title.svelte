<script>
  function getTagline() {
    let taglines = [
      "I hope we can still be friends",
      "All's fair in work and war",
      "It's nothing personal"
    ];
    return taglines[Math.floor(Math.random() * taglines.length)];
  }
  let tagline = getTagline();
</script>

<div class="text-center pt-4 pb-8 cursor-pointer select-none"
    on:click={() => {
      tagline = getTagline();
    }}>
  <p class="text-6xl font-semibold font-yesteryear">Diplomacy</p>
  <p class="text-sm -mt-3">
    {tagline}
  </p>
</div>
