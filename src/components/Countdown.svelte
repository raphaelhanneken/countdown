<script lang="ts">
    import Remainder from './Remainder.svelte';
    import { onMount } from 'svelte';
    import TimeInterval from '../ViewModel/TimeInterval';

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
    <Remainder value={timeRemaining.days} />
    <Remainder value={timeRemaining.hours} />
    <Remainder value={timeRemaining.minutes} />
    <Remainder value={timeRemaining.seconds} />
</div>

<style>
    .countdown {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        margin-top: 50vh;
        transform: translateY(-80%);
    }
</style>
