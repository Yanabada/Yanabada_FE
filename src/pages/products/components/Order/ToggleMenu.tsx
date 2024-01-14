import * as React from "react";
import * as Ariakit from "@ariakit/react";
import type { MotionProps } from "framer-motion";
import { AnimatePresence, MotionConfig, motion, MotionStyle } from "framer-motion";

export interface MenuProps extends Ariakit.MenuButtonProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  label: React.ReactNode;
  children?: React.ReactNode;
  animate?: MotionProps["animate"];
  transition?: MotionProps["transition"];
  variants?: MotionProps["variants"];
  initial?: MotionProps["initial"];
  exit?: MotionProps["exit"];
  justifyContent?: string;
  width?: string;
}

const ToggleMenu = React.forwardRef<HTMLDivElement, MenuProps>(function Menu(
  {
    open,
    setOpen,
    label,
    children,
    animate,
    transition,
    variants,
    initial,
    exit,
    justifyContent = "flex-end",
    width = "6rem",
    ...props
  },
  ref
) {
  const menu = Ariakit.useMenuStore({ open, setOpen });
  const currentPlacement = menu.useState("currentPlacement");
  const mounted = menu.useState("mounted");

  const menuStyle = {
    display: "flex",
    justifyContent: justifyContent,
    gap: "0.15rem",
    alignItems: "center",
    width: width
  };

  const listStyle: MotionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    height: "100%",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "1rem 0.7rem",
    zIndex: 999
  };

  return (
    <MotionConfig reducedMotion="user">
      <Ariakit.MenuButton store={menu} ref={ref} {...props} style={menuStyle}>
        {label}
        <Ariakit.MenuButtonArrow />
      </Ariakit.MenuButton>
      <AnimatePresence>
        {mounted && (
          <Ariakit.Menu
            store={menu}
            alwaysVisible
            className="menu"
            data-placement={currentPlacement}
            render={
              <motion.div
                initial={initial}
                exit={exit}
                animate={animate}
                variants={variants}
                transition={transition}
                style={listStyle}
              />
            }
          >
            <Ariakit.MenuArrow className="menu-arrow" />
            {children}
          </Ariakit.Menu>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
});

export interface MenuItemProps extends React.ComponentPropsWithoutRef<typeof MotionMenuItem> {}

const MotionMenuItem = motion(Ariakit.MenuItem);

const ToggleMenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  function MenuItem(props, ref) {
    const itemStyle = {
      width: "100%",
      color: "#9C9C9C",
      fontSize: "15px",
      fontWeight: "400",
      lineHight: "21px",
      cursor: "pointer"
    };
    return (
      <MotionMenuItem
        ref={ref}
        {...props}
        style={itemStyle}
        whileHover={{
          color: "#1A1A1A"
        }}
      />
    );
  }
);

export { ToggleMenu, ToggleMenuItem };
