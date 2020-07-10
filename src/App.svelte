<svelte:options immutable={true} />

<script>

  import { timer } from './timer'
  import produce from 'immer'
  import testStore from './stores/testStore'
  const { actions, subscribe: test } = testStore

</script>

  time: {$timer}s
<button on:click={actions.test}>
  Clicked {$testStore.tested} times
</button>