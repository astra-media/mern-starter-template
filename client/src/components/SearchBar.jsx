import { useState } from 'react'

const SearchBar = () => {
  const items = ['Apple', 'Orange', 'Strawberry', 'Blueberry', 'Grape']
  const [query, setQuery] = useState('')

  const filtered = items.filter((x) =>
    x.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search...'
        className='border p-2 w-full mb-2'
      />
      <ul>
        {filtered.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar
