<script lang="ts">
    import Remainder from './Remainder.svelte';
    import TimeInterval from '../ViewModel/TimeInterval';
    import { onMount } from 'svelte';

    export let countdownDate: Date;

    $: timeRemaining = new TimeInterval(new Date(), countdownDate);

    onMount(() => {
        const interval = setInterval(() => {
            timeRemaining.startDate = new Date();
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    });
</script>

<div class="countdown">
    {#each [timeRemaining.days, timeRemaining.hours, timeRemaining.minutes, timeRemaining.seconds] as remaining}
        <Remainder value={remaining} />
    {/each}
</div>

<style>
    .countdown {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-top: 45vh;
        transform: translateY(-80%);
    }
</style>
