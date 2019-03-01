import App from './App.js';
import store from './store.js';

const app1 = new App({
	target: document.getElementsByClassName("app1")[0],
	data: { title: 'Stock Chart' },
	store
});

export default app1;