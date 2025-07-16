import Nav from "@/components/Nav";
import { navSlice } from "@/store/Nav.store";

const NavBody = (props: { children: string | Element[] }) => {
  const [nav] = navSlice;
  return (
    <main class="w-[100vw] h-[100vh] bg-green-200">
      <Nav routes={nav.navigation.routes} />
      <article>{props.children}</article>
    </main>
  );
};

export default NavBody;
