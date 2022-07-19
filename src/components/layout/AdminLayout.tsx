import NavbarMain from '../common/NavbarMain'
import FooterMain from '../common/FooterMain'
import { Container } from 'react-bootstrap'

const AdminLayout = (props: any) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarMain />
      <Container>{props.children}</Container>
      <FooterMain />
    </div>
  )
}

export default AdminLayout
