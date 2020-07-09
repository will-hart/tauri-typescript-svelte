<script>
  import { timer } from './timer';

  let count = 0;

  $: if (count >= 10) {
    alert(`count is dangerously high!`);
    count = 9;
  }

  function handleClick() {
    count += 1;
  }
</script>

  time: {$timer}s
<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>