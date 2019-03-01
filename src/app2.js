import App from './App.js';
import store from './store.js';

const app2 = new App({
	target: document.getElementsByClassName("app2")[0],
	data: { title: 'Stock News' },
	store
});

export default app2;