<script lang="ts">
    export let value: number;
</script>

<span class="remainder-value">
    {#if value < 10}0{/if}{value}
    <!-- <svg>
        <path fill="none" stroke="#ccc" stroke-width="20" d="M 50 150 A 100 100 0 1 0 150 50" />
    </svg> -->
</span>

<style>
    .remainder-value {
        font-size: 14vw;
        color: #ccc;
    }
</style>
