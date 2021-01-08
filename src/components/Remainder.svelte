<script lang="ts">
    export let value: number;
</script>

<span>{#if value < 10}0{/if}{value}</span>
