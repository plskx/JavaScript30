const pressed = [];
const secret = "cookie";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.length > secret.length ? pressed.shift() : "";
  if (pressed.join("").includes(secret)) {
    cornify_add();
  }
});
