import createKindeClient from "@kinde-oss/kinde-auth-pkce-js";
import { inject } from "@vercel/analytics"

  const kinde = await createKindeClient({
    client_id: "8b225b4c0cdc4e78b7b5486d1020653d",
    domain: "https://nairaversey.kinde.com",
    redirect_uri: window.location.origin
  });


let login = document.getElementById("logBtn");

login.addEventListener("click", async () => {
    await kinde.login();
  });
  
let sign = document.getElementById("signBtn");

sign.addEventListener("click", async () => {
    await kinde.register();
  });

  const user = await kinde.getUser();
  await render(user);

  on_redirect_callback: (user, appState) => {
    console.log({user, appState});
    if (user) {
      // render logged in view
    } else {
      // render logged out view
    }
  };
on_error_callback: (error) => {
    console.log(error);
  };