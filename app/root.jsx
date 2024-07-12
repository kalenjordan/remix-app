import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import { Provider } from "@gadgetinc/react";
import { api } from "./api";

export default function App() {
  return (
    <Provider api={api}>
      <html>
        <head>
          <link rel="icon" href="data:image/x-icon;base64,AA" />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />

          <Scripts />
        </body>
      </html>
    </Provider>
  );
}
