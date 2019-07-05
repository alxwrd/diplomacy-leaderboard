<script>

export let title = '';
export let image = '';
export let url = '';

</script>

<a
  href="https://www.backstabbr.com/game/{url}"
  target="_blank">
  <div class="shadow rounded overflow-hidden bg-gray-100 mb-4">
    <img
      class="w-full"
      src="{image}"
      alt="{title}" />
    <div class="text-xl font-semibold py-4 px-2">{title}</div>
  </div>
</a>
