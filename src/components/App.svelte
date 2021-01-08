<script lang="ts">
    import Countdown from './Countdown.svelte';
    export let name: string;
</script>

<main>
    <Countdown countdownDate={new Date(2021, 0, 27, 0, 0, 0, 0)} />
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
