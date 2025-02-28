import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ExampleTable from './GenerateTable/ExampleTable'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExampleTable/>
  </StrictMode>,
)
