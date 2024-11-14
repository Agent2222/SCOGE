import { } from "../main.js";

export function router() {
    
  document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("div a")) {
      return;
    }
    e.preventDefault();
    urlRoute(e);
  });

  const urlRoutes = {
    404: {
      template: "./templates/404.html",
      title: "404 - Page Not Found",
      description: "The page you are looking for does not exist"
    },
    "test": {
      template: "./templates/index.html",
      templateHtml: `
        <div id="intro">
        </div>
      `,
      title: "Home",
      description: "This is the home page"
    },
    "dashboard": {
      template: "./templates/index.html",
      templateHtml: `
        <div id="dashboard">
        </div>`,
      title: "Dashboard",
      description: "This is the dashboard"
    }
  };

  const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    
    // Use hash routing by setting window location to `#<route>`
    const href = event.target.getAttribute("href");
    window.location.hash = href.startsWith("#") ? href : `#${href}`;
  };

  const urlLocationHandler = async () => {    
    let location = window.location.hash.substring(1);  // Get the hash without `#`
    
    // Use the location or fallback to root if empty
    if (location.length === 0) {
      location = "";
    }

    const route = urlRoutes[location] || urlRoutes[404];
    
    // Choose mobile template if needed, else load templateHtml
    let html;
    if (window.isMobile) {
      html = urlRoutes.mobileTemp;
    } else {
      html = route.templateHtml;
    }
    
    // Set the inner HTML of the app element
    // document.getElementById("app").innerHTML = html;

    // Handle additional actions for specific routes
    switch (location) {
      case "dashboard":
        console.log("dashboard");
        break;
      default:
        console.log("default");
        break;
    }
  };

  window.onpopstate = urlLocationHandler;
  window.addEventListener("hashchange", urlLocationHandler);  // Listen for hash changes
  urlLocationHandler();  // Initial load
}
