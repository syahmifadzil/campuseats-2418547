import { useState } from 'react'

function MenuItemCard({ item, onAdd }) {
  const [showNote, setShowNote] = useState(false)
  const [note, setNote] = useState('')

  if (!item) return null

  function handleAdd() {
    onAdd({ ...item, note: note.trim() })
    setNote('')
    setShowNote(false)
  }

  return (
    <div className="card">
      <span className="tag">{item.category}</span>

      <div className="thumb">
        {item.name ? item.name.charAt(0) : ''}
      </div>

      <h2>{item.name}</h2>
      <p className="muted">{item.description}</p>

      <p className="price">
        RM {item.price.toFixed(2)}
      </p>

      <button
        type="button"
        className="btn note-btn"
        onClick={() => setShowNote(!showNote)}
      >
        {showNote ? 'Hide note' : 'Add note'}
      </button>

      {showNote && (
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="E.g. No spicy sauce, less sugar..."
          rows={3}
        />
      )}

      <button
        type="button"
        className="btn cart-btn"
        disabled={!item.available}
        onClick={handleAdd}
      >
        {item.available ? 'Add to cart' : 'Sold out'}
      </button>
    </div>
  )
}

export default MenuItemCard