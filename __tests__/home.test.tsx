import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

test('renders the UserForm component', () => {
  render(<Home />);
  
  
    const string = "Este é o conteúdo da página com um footer no final.";
    
    expect(string).toMatch(/footer/);
 
});