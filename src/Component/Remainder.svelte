<script lang="ts">
    import Point from "../Entity/Point";

    export let value: number;

    function polarToCartesian(center: Point, radius: number, angleInDegrees: number): Point {
        const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

        return new Point(
            center.x + radius * Math.cos(angleInRadians),
            center.y + radius * Math.sin(angleInRadians)
        );
    }

    function describeArc(center: Point, radius: number, startAngle: number, endAngle: number): string {
        const start = polarToCartesian(center, radius, startAngle);
        const end = polarToCartesian(center, radius, endAngle);
        const largeArcFlag = endAngle + startAngle > 180 ? '1' : '0';

        return [
            'M', start.x, start.y,
            'A', radius, radius, 0, largeArcFlag, 1, end.x, end.y
        ].join(' ');
    }
</script>

<div class="remainder">
    <svg>
        <path d={describeArc(new Point(130, 130), 130, 0, value * ((100 / 60) * (360 / 100)))}></path>
    </svg>
    <span>{#if value < 10}0{/if}{value}</span>
</div>

<style>
    .remainder {
        font-size: 8rem;
        font-weight: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        width: 260px;
        height: 260px;
    }

    svg {
        stroke-width: 3;
        fill: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 280px;
        overflow: visible;
        height: 280px;
    }

    @media (prefers-color-scheme: light) {
        .remainder {
            color: var(--dark);
        }

        svg {
            stroke: var(--dark);
        }
    }

    @media (prefers-color-scheme: dark) {
        .remainder {
            color: var(--light);
        }

        svg {
            stroke: var(--light);
        }
    }
</style>
