import {
  Avatar,
  Button,
  Navbar as UINavbar,
  Spacer,
  Text,
  useTheme,
} from "@nextui-org/react";

type Props = {
  brand: string;
};

export function Navbar({ brand }: Props) {
  const { theme } = useTheme();

  return (
    <UINavbar isBordered variant={"static"}>
      <UINavbar.Brand>
        {/* <UINavbar.Toggle aria-label="toggle navigation" /> */}
        <Avatar squared src="img/logo.png" alt="Pokemon app logo" />
        <Spacer />
        <Text b color={theme?.colors.yellow700.value}>
          {brand}
        </Text>
      </UINavbar.Brand>
      <UINavbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Button flat auto rounded color="secondary">
          <Text
            css={{ color: "inherit" }}
            size={12}
            weight="bold"
            transform="uppercase"
          >
            Favorites
          </Text>
        </Button>
      </UINavbar.Content>
      {/* <UINavbar.Collapse>
        <UINavbar.CollapseItem>
          <Text>Favorites</Text>
        </UINavbar.CollapseItem>
      </UINavbar.Collapse> */}
    </UINavbar>
  );
}
