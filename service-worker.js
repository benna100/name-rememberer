self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});

self.addEventListener("install", (event) => {
  console.log("Service worker installed");
});

self.addEventListener("fetch", (event) => {
  console.log("Service worker fetch called");
});
