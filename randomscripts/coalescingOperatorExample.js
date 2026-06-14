// checks if user has a preference of theme
//  after not seeing one ("null") it chooses a default "light" using the ?? operator

const userSettings = {
 theme: null,
 volume: 0,
 notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme); // light
