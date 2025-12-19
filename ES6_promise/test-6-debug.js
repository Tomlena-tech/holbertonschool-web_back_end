import handleProfileSignup from './6-final-user.js';

handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg").then(result => {
  console.log("Result:", JSON.stringify(result, null, 2));
});
