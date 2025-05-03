import { StrictMode } from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { muiTheme } from './tokens/theme'

const cache = createCache({
    key: 'mui',
    prepend: true,
    stylisPlugins: [],
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={muiTheme}>
            <CacheProvider value={cache}>
                <CssBaseline />
                <App />
            </CacheProvider>
        </ThemeProvider>
    </StrictMode>
)
