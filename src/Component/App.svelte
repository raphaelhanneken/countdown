<script lang="ts">
    import Countdown from './Countdown.svelte';
    import Datepicker from 'svelte-calendar';
    import { afterUpdate } from 'svelte';

    export let selectedDate: Date;

    afterUpdate(() => {
        window.localStorage.setItem('selectedDate', selectedDate.toString());
    })
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
