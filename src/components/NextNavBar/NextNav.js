import { Navbar, User, css, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import propic from "../../assets/images/imgpropic.jpg"

export default function App() {
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <div className="w-full z-50 fixed right-0">
      <Navbar isBordered={false} maxWidth={"xl"} height={80}>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >

          <Text h3 color="inherit" hideIn="xs">
            @moshdev
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Navbar.Item>
            <User
              src={propic}
              size="md"
              pointer
              zoomed
              name="M Shabeer"
              
            >
               <User.Link href="https://nextui.org/">@moshdev2213</User.Link>
            </User>

          </Navbar.Item>

        </Navbar.Content>
      </Navbar>
    </div>
  );
}
