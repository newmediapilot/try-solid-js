/* @refresh reload */
import "@/index.css";
import "solid-devtools";
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import NavBody from "@/layouts/NavBody";

render(
  () => (
    // @ts-expect-error type
    <Router root={NavBody}>
      <Route path="/" component={lazy(() => import("@/pages/Root"))} />
      <Route path="/about" component={lazy(() => import("@/pages/About"))} />
      <Route
        path="/contact"
        component={lazy(() => import("@/pages/Contact"))}
      />
    </Router>
  ),
  document.getElementById("root")!,
);
