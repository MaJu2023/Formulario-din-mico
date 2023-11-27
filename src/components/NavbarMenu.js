import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function NavbarMenu() {
  return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#!">
                    Dynamic <b>Form</b>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collpase className="justify-contet-end">
                    <Navbar.Text>
                        Signed in as: {" "}
                        <a 
                            href="https://github.com/MaJu2023" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                                Judith Cortés
                        </a>
                    </Navbar.Text>
                </Navbar.Collpase >
            </Container>
        </Navbar>
  );
}
