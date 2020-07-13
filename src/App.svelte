<svelte:options immutable={true} />

<script>
  import Tailwindcss from './Tailwindcss.svelte'
  import { timer } from './timer'
  import produce from 'immer'
  import testStore from './stores/testStore'
  const { actions, subscribe: test } = testStore

</script>

<style>
h1 {
  @apply text-4xl bg-black text-white p-4 mb-6;  
}
</style>

<Tailwindcss />

<h1>Tauri / Svelte / Tailwind CSS</h1>

  time: {$timer}s
<button on:click={actions.test}>
  Clicked {$testStore.tested} times
</button>