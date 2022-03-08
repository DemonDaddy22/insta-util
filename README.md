# Find out who's not following you back on IG

-   Go to [Instagram](https://instagram.com/) and login to your account for which you want to find out the list of desired accounts
-   Go to your profile and open up followers or following list
-   Could automate this process in the future, but for now, manually scroll down to the bottom of the list so that all the nodes containing the account names are present on the screen
-   Check the classname of any of the account name by right clicking on it and selecting inspect, which right now will be a span element and containing a class `.se6yk`
-   Select all the elements by typing the following the commands in your browser's console

```javascript
let accountNames = document.querySelectorAll('span .se6yk');
accountNames = [...accountNames].map(val => val.innerText);
```

-   Copy accountNames and if this list corresponds to followers, then create a `followers.js` file and store the copied array in variable named `followers` and export it using the following snippet

```javascript
module.exports = { followers }
```

-   Follow the above two points for other list as well
-   Once you have created both `followers.js` and `following.js`, open up terminal and run the following command to get the list of accounts not following you back

```bash
node index.js
```
