<script lang="ts">
    import Countdown from './Countdown.svelte';
    import Datepicker from 'svelte-calendar';

    export let selectedDate: Date = new Date(2021, 0, 27, 0, 0, 0, 0);
</script>

<countdown>
    <Datepicker start={new Date()} bind:selected={selectedDate} />
    <Countdown countdownDate={selectedDate} />
</countdown>

<style>
    countdown {
        padding: 1vw 5vw;
    }
</style>
