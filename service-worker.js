self.addEventListener("push", function (event) {
  const data = event.data ? event.data.json() : {};

  const title = data.title || "SafeGuard Alert";
  const options = {
    body: data.body || "You have a new message!",
    icon: "images/feature1.jpg",
  };

  event.waitUntil(self.registration.showNotification(title, options));
});