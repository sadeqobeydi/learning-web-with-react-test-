import react from "react"
import ReactDOM  from "react-dom/client"
import App from "./App"
import "./style/index.css"
import "./style/layuot.css"
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import { ThemeProvider } from "react-bootstrap"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(

    <ThemeProvider dir="rtl">
        <App/>
    </ThemeProvider>
)