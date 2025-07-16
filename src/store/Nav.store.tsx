import { createStore } from "solid-js/store";
import { modifyMutable, produce } from "solid-js/store";

export type NavType = {
  navigation: {
    routes: {
      href: string;
      label: string;
      active: boolean;
    }[];
  };
};

export const navSlice = createStore({
  navigation: {
    routes: [
      { href: "/", label: "Home", active: false },
      { href: "/about", label: "About", active: false },
      { href: "/contact", label: "Contact", active: false },
    ],
  },
});

export const navSetActive = (href: string) =>
  modifyMutable(
    navSlice[0] as NavType,
    produce((state: NavType) => {
      state.navigation.routes.map((s) => s.href === href);
    }),
  );
