import Nav from "@/components/Nav";
import { navSlice } from "@/store/Nav.store";

const NavBody = (props: { children: Element[] }) => {
  const [navSliceGetter] = navSlice;
  const routes = navSliceGetter.navigation.routes;
  return (
    <main class="w-[100vw] h-[100vh] bg-green-200">
      <Nav routes={routes} />
      <article>{props.children}</article>
    </main>
  );
};

export default NavBody;
