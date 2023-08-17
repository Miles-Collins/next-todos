import React from 'react'

interface TodoItemProps {
  title: String
}

export default function TodoItem({title}: TodoItemProps) {
  return (
    <li>
      ${title}
    </li>
  )
}
