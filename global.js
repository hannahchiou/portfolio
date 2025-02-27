// STEP 1
console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

// STEP 2
// // 2.1
// let navLinks = $$("nav a");

// // 2.2
// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)

// // 2.3
// if (currentLink) { // or if (currentLink !== undefined)
// 	currentLink.classList.add("current");
// }

// STEP 3
// TODO: Remove <nav> menu from all HTML pages!
// TODO: Comment out the step 2 code in this file!

// step 3.1
let pages = [
	{url: "", title: "Home"},
	{url: "projects/", title: "Projects"},
    {url: "resume/", title: "Resume"},
    {url: "contact/", title: "Contact"},
    {url: "https://github.com/hannahchiou", title: "Github"}
];

let nav = document.createElement("nav");

let h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", nav);

// TODO: Inside index.html (our home page), add a class="home" attribute to the <html lang="en"> element!
const ARE_WE_HOME = document.documentElement.classList.contains("home");

// for (let p of pages) {
// 	let url = p.url;
// 	let title = p.title;

// 	// Create link and add it to nav 
//     if (!ARE_WE_HOME && !url.startsWith("http")) {
//         url = `../${url}`;
//     }

// 	nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
// }


// step 3.2
// TODO: Comment out the `for (let p of pages) {...}` loop you made in step 3.1 and uncomment the for loop below! I have helped you restructure the loop a bit in a way that may be confusing from the lab instructions

for (let p of pages) {
	let url = p.url;
	let title = p.title;

    // Create correct relative link and add it to nav  
    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url;
    }

    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    nav.append(a);

    
    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }

    if ((a.host !== location.host)) {
        a.target = "_blank";
    }

} 

// STEP 4
// step 4.1
// TODO: Inside your styles.css file, adjust your navigation menu colors! There is nothing to do in this file in this step.

// step 4.2
// document.body.insertAdjacentHTML("afterbegin", `
// 	<label class="color-scheme">
// 		Theme:
// 		<select>
// 			<option value="light dark">System settings</option>
//             <option value="dark">Dark mode</option>
//             <option value="light">Light mode</option>
// 		</select>
// 	</label>`
// );

// step 4.3
// TODO: Inside your styles.css file, add styling to move the switcher with class .color-scheme to the top right corner. There is nothing to do in this file in this step

// // step 4.4
// let select = document.querySelector("select");

// select.addEventListener("input", function (event) {
// 	console.log("color scheme changed to", event.target.value);

//     // TODO: use document.documentElement.style.setProperty to set the color scheme here! (hint: take a look at the handout)
//     document.documentElement.style.setProperty("color-scheme", event.target.value);

//     // TODO: (step 4.5.1) uncomment the line below!
//     localStorage.colorScheme = event.target.value;
// });

// Insert theme selection dropdown at the top of the page
document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme">
		Theme:
		<select>
			<option value="auto">System settings</option>
            <option value="dark">Dark mode</option>
            <option value="light">Light mode</option>
		</select>
	</label>`
);

let select = document.querySelector("select");
let html = document.documentElement;


// Apply theme to page
function applyTheme(theme) {
    if (theme === "dark") {
        html.classList.add("dark-mode");
    } else {
        html.classList.remove("dark-mode");
    }
    console.log(`Color scheme has changed to ${theme}`);
}

function loadTheme() {
    let savedTheme = localStorage.getItem("colorScheme");

    if (savedTheme === "dark" || savedTheme === "light") {
        select.value = savedTheme;
        applyTheme(savedTheme);
    } else {
        select.value = "auto"; // Default to system preference
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }
    }
}

select.addEventListener("change", function (event) {
    let chosenTheme = event.target.value;

    if (chosenTheme === "auto") {
        localStorage.removeItem("colorScheme");
        loadTheme(); 
    } else {
        localStorage.setItem("colorScheme", chosenTheme);
        applyTheme(chosenTheme);
    }
});

// Automatically apply the theme on page load
loadTheme();


// STEP 5 (OPTIONAL)
// Note: This is an optional part of the lab! If you want to do it, uncomment the lines below and fill in the TODOs. Otherwise, leave the lines commented out.

// TODO: Inside the /contact/index.html, remove the enctype and method attributes from the <form> element. Remove the "Email" label and input as well.

// TODO: uncomment below to select the form element!
// let form = document.querySelector("form");

// form?.addEventListener("TODO: FILL IN EVENT WE ARE WAITING FOR", function (event) {
//     event.preventDefault();
//     let data = new FormData(form);

    // let url = form.action + "?";
    // for (let [name, value] of data) {
	//     url += (name + "=" + value + "&")
	//     console.log(name, value);
    // }

        // TODO: open url here!
// })
