if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("SW registration successful", reg))
    .catch((err) => console.error("Error when trying to register the SW", err));
} else {
  console.log("No service work");
}
