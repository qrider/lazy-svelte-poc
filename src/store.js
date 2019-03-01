import { Store } from 'svelte/store.js';

if(!window.store){
    window.store = new Store({ ticker: 'MSFT' });
}
export default window.store;