import { Navbar, Nav } from 'react-bootstrap';

const AppLayout = (props: any) => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
                <Navbar.Brand>Ayiza</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link href="/company">Add Company</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {props.children}
        </>
    );
}

export default AppLayout;