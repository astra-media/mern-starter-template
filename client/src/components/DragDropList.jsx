import { useState } from 'react'

const DragDropList = () => {
  const [items, setItems] = useState(['React', 'Next.js', 'Vue', 'Angular'])
  const [draggingIndex, setDraggingIndex] = useState(null)

  const handleDragStart = (index) => {
    setDraggingIndex(index)
  }

  const handleDrop = (index) => {
    const newItems = [...items]
    const draggedItem = newItems.splice(draggingIndex, 1)[0]
    newItems.splice(index, 0, draggedItem)
    setItems(newItems)
    setDraggingIndex(null)
  }

  return (
    <ul>
      {items.map((x, i) => (
        <li
          key={i}
          draggable
          onDragStart={() => handleDragStart(i)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(i)}
          className='p-2 border bg-white rounded shadow cursor-move'
        >
          {x}
        </li>
      ))}
    </ul>
  )
}

export default DragDropList
