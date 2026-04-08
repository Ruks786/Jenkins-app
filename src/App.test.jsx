import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import '@testing-library/jest-dom'
import App from './App'

describe('App Component', () => {
  test('checks if name is displayed', () => {
    render(<App />)

    const text  = screen.getByText(/This is my Jenkins App/i)
    expect(text).toBeInTheDocument()
  })
})