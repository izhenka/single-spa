<script>
  import { EVENT_TYPES, usePersistedBreeds } from "@cats/storage";
  import { onMount } from "svelte";
  const { getPersistedBreeds, persistBreeds } = usePersistedBreeds();
  let breeds = getPersistedBreeds();
  console.log("breeds", breeds);

  onMount(() => {
    console.log("the svelte component has mounted");
    document.addEventListener(EVENT_TYPES.BREED_ADDED, function (e) {
      console.log("breed added", e.detail);
      breeds = getPersistedBreeds();
      console.log("event breeds", breeds);
    });
  });

  const emptyBreeds = () => {
    breeds = [];
    persistBreeds(breeds);
    document.dispatchEvent(new CustomEvent(EVENT_TYPES.BREEDS_CLEARED));
  };
</script>

<div class="sidePanel">
  <div class="sidePanel__container">
    <h2>Favourites &#129505;</h2>
    {#if breeds.length === 0}
      <p>You have no favourites yet</p>
    {/if}
    <ul>
      {#each breeds as breed}
        <li>{breed}</li>
      {/each}
    </ul>
  </div>
  <button class="clear-button secondary" on:click={emptyBreeds}>Clear</button>
</div>

<style>
  .sidePanel {
    background-color: #abd1c6;
    color: #232946;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: left;
    flex: 1 1 auto;
  }

  .sidePanel__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 1 1 auto;
  }

  ul {
    list-style-type: none;
    list-style-position: inside;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li::before {
    content: "•";
    font-size: 130%;
    line-height: 0;
    margin: 0 1rem 0 -0.1rem;
    position: relative;
    top: 0.08rem;
    color: #232946;
  }

  .clear-button {
    justify-self: flex-end;
  }

  .favourites-main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
