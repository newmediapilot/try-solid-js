import type { Component } from "solid-js";
import { navSetActive } from "@/store/Nav.store";

const Nav: Component<{ routes: { href: string; label: string }[] }> = ({
  routes,
}) => {
  const onClick = (href: string) => {
    navSetActive(href);
  };
  return (
    <nav class="sticky top-[0] left-[0] flex flex-row justiy-between p-[10px] bg-green-800 text-white">
      {routes.map(({ href, label }) => (
        <a class="pr-[10px]" href={href} onClick={() => onClick(href)}>
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
