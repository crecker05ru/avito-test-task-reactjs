import {Navbar,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {DiHackernews} from 'react-icons/di'

export const NavigationBar = () => {
 return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >
          <Link to="/" className="text-decoration-none text-white">
            Hacker News <DiHackernews/>
            </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>
 )
}