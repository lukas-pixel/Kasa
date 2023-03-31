import { createGlobalStyle } from 'styled-components'
import "@fontsource/montserrat"

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: "Montserrat";
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle