import { writable } from 'svelte/store';

export const user = writable({
  id: 0,
  email: '',
  name: '',
  theme: '',
  photoURL: ''
});
export const isLoggedIn = writable(false);
