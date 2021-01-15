import App from './Component/App.svelte';

const app = new App({
    target: document.body,
    props: {
        selectedDate: new Date(window.localStorage.getItem('selectedDate')) ?? new Date(2021, 0, 27),
    }
});

export default app;
