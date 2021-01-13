<script lang="ts">
    export let value: number;

    function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number): { x: number, y: number } {
        const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians)
        };
    }

    function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number): string {
        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

        return [
            'M',
            start.x,
            start.y,
            'A',
            radius,
            radius,
            0,
            largeArcFlag,
            0,
            end.x,
            end.y
        ].join(' ');
    }
</script>

<div class="remainder">
    <svg>
        <path fill="none" stroke="#ddd" stroke-width="8" d={describeArc(52, 52, 48, 0, 360 - value)} width="100" height="100"></path>
    </svg>
    <span>{#if value < 10}0{/if}{value}</span>
</div>

<style>
    .remainder {
        color: #ddd;
        font-size: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        line-height: 30px;
        margin: 10px;
        padding-top: 1px;
        position: relative;
        width: 100px;
        height: 100px;
    }

    svg {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
