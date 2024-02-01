import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from './App';

describe('App', () => {
	it('should render App', () => {
		render(<App />)
		screen.debug()
		expect(screen.getByRole('heading')).toBeInTheDocument()
	})
})