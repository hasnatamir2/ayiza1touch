import { Button } from 'react-bootstrap'
import TenantsTable from './TenantsTable'

const Tenants = (props: any) => {
  const { tenants, isLoading, Navigate } = props
  return (
    <div className="tenants">
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h4 className="m-0">Tenants</h4>
        <Button
          variant="outline-primary"
          disabled
          onClick={() => Navigate('/adminPanel/addTenant')}
        >
          New Tenant
        </Button>
      </div>
      <TenantsTable tenants={tenants} />
    </div>
  )
}

export default Tenants
