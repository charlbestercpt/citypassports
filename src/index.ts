import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Charl Bester2';
  greetUser(name);
});
