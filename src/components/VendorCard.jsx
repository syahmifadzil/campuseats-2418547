import { Link } from 'react-router'

function VendorCard({ vendor }) {
  return (
    <article className="card vendor-card">
      <div className="thumb">
        {vendor.name.charAt(0)}
      </div>

      <div className="vendor-info">
        <h3>{vendor.name}</h3>

        <p className="muted">{vendor.location}</p>
        <p className="muted">{vendor.openHours}</p>

        <span className={vendor.isOpen ? 'status open' : 'status closed'}>
          {vendor.isOpen ? 'Open now' : 'Closed'}
        </span>

        <Link to={`/vendor/${vendor.id}`}>
          View Menu
        </Link>
      </div>
    </article>
  )
}

export default VendorCard