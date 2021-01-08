<script lang="ts">
    import Remainder from './Remainder.svelte';
    import { onMount } from 'svelte';

    export let countdownDate: Date;

    const milisecondsPerSecond = 1000;
    const milisecondsPerMinute = milisecondsPerSecond * 60;
    const milisecondsPerHour = milisecondsPerMinute * 60;
    const milisecondsPerDay = milisecondsPerHour * 24;

    let today = Date.now();

    $: days = 0;
    $: hours = 0;
    $: minutes = 0;
    $: seconds = 0;

    onMount(() => {
        const interval = setInterval(() => {
            today = Date.now();
            countdownDate.setHours(0, 0, 0, 0);
            if (today >= countdownDate.getTime()) {
                countdownDate = new Date(today);
            }

            let diffMiliseconds = countdownDate.getTime() - today;
            days = Math.floor(diffMiliseconds / milisecondsPerDay);
            diffMiliseconds -= days * milisecondsPerDay;

            hours = Math.floor(diffMiliseconds / milisecondsPerHour) % 24;
            diffMiliseconds -= hours * milisecondsPerHour;

            minutes = Math.floor(diffMiliseconds / milisecondsPerMinute) % 60;
            diffMiliseconds -= minutes * milisecondsPerMinute;

            seconds = Math.floor(diffMiliseconds / milisecondsPerSecond);
            diffMiliseconds -= seconds * milisecondsPerSecond;
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    });
</script>

<h1>
    <Remainder value={days} />:<Remainder value={hours} />:<Remainder value={minutes} />:<Remainder value={seconds} />
</h1>
