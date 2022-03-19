import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  
  {
    title: "Make Request",
    href: "/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Request Details",
    href: "/table",
    icon: "bi bi-people",
    
  },
  

  {
    title: "Admin",
    href: "/about",
    icon: "bi bi-key",
  },
  
  
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="bg-dark">
      <div className="d-flex">
        <Button
          color="white"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button
            color="success"
            tag="a"
            target="_blank"
            className="mt-3"
            href="#"
          >
            Upgrade To Pro
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
