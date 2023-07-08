import { Navbar, User, css, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import propic from "../../assets/images/imgpropic.jpg"
import NextModal from '../NextModal';
import { useState, useEffect } from "react";

export default function App() {
  const [activeLink, setActiveLink] = useState("home");
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  const collapseItems = [
    "Home",
    "About",
    "Services",
    "Skills",
    "Projects",
  ];

  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
 


  return (
    <div className="w-full z-50 fixed right-0">
      <Navbar  isBordered={false} maxWidth={"xl"} height={80}>
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
          variant="default"
        >
          <Navbar.Link href="#home" isActive={activeLink === 'home' ? 'true' : 'false'} onPress={() => onUpdateActiveLink('home')}>Home</Navbar.Link>
          <Navbar.Link href="#about" isActive={activeLink === 'about' ? 'true' : 'false'} onPress={() => onUpdateActiveLink('about')}>
            About Me
          </Navbar.Link>
          <Navbar.Link href="#services" isActive={activeLink === 'services' ? 'true' : 'false'} onPress={() => onUpdateActiveLink('services')}>Services</Navbar.Link>
          <Navbar.Link href="#skills" isActive={activeLink === 'skills' ? 'true' : 'false'} onPress={() => onUpdateActiveLink('skills')}>Skills</Navbar.Link>
          <Navbar.Link href="#projects" isActive={activeLink === 'projects' ? 'true' : 'false'} onPress={() => onUpdateActiveLink('projects')}>Projects</Navbar.Link>
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
            <NextModal />
          </Navbar.Item>

        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              onClick={() => handleSmoothScroll(item.toLowerCase().replace(' ', '-'))}
              isActive={activeLink.toLowerCase() === item ? 'true' : 'false'}

            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
