import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

function CustomNavbar() {
  return (
    <>
      {/* Main Navbar */}
      <Navbar expand="lg" className="px-3 shadow-sm fixed-top" style={{ backgroundColor: "#0d6efd" }}>
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-4 text-white">Upwork</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavDropdown title={<span className="text-white">Find Talent</span>} id="nav-dropdown">
                <NavDropdown.Item href="#freelancers">Freelancers</NavDropdown.Item>
                <NavDropdown.Item href="#agencies">Agencies</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={<span className="text-white">Find Work</span>} id="nav-dropdown">
                <NavDropdown.Item href="#jobs">Jobs</NavDropdown.Item>
                <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={<span className="text-white">Why Upwork</span>} id="nav-dropdown">
                <NavDropdown.Item href="#success-stories">Success Stories</NavDropdown.Item>
                <NavDropdown.Item href="#how-it-works">How it Works</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={<span className="text-white">Enterprise</span>} id="nav-dropdown">
                <NavDropdown.Item href="#solutions">Solutions</NavDropdown.Item>
                <NavDropdown.Item href="#pricing">Pricing</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Search Bar */}
            <Form className="d-flex flex-grow-1 mx-lg-3 my-2 my-lg-0" style={{ maxWidth: "300px" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>

            {/* Buttons */}
            <div className="d-flex gap-2">
              <Button variant="outline-light" className="fw-semibold px-3">Log In</Button>
              <Button variant="light" className="fw-semibold px-3">Sign Up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Extra Row Below Navbar */}
      <div className="bg-light py-2 shadow-sm mt-5">
        <Container className="d-flex justify-content-between align-items-center">
          <Nav className="gap-3">
            <Nav.Link href="#" className="text-dark fw-semibold">Categories</Nav.Link>
            <Nav.Link href="#" className="text-dark fw-semibold">Contact</Nav.Link>
            <Nav.Link href="#" className="text-dark fw-semibold">Help</Nav.Link>
          </Nav>
          <span className="text-muted">Trusted by millions worldwide</span>
        </Container>
      </div>
    </>
  );
}

export default CustomNavbar;
