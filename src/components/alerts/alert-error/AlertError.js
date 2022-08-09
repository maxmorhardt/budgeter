import React from 'react'
import { useToasts } from 'react-toast-notifications'

export const AlertError = ({ content }) => {
  const { addToast } = useToasts()
  return (
    <Button onClick={() => addToast(content, {
      appearance: 'error',
      autoDismiss: true,
    })}>
      Add Toast
    </Button>
  )
}