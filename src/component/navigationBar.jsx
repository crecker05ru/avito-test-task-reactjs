import {Navbar,Container} from 'react-bootstrap';

export const NavigationBar = () => {
 return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            Hacker News
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>
 )
}