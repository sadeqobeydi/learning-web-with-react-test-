import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/home/home"
import AddArticle from "./pages/AddArticle/AddArticle"
import Edit from "./pages/editArticle/Edit"
import About from "./pages/about/About"
import Articles from "./pages/Articles/Articles"
import MyNavbar from "./componnent/Navbar/MyNavbar"
import Footer from "./componnent/Footer/Footer"
import Courses from "./pages/courses/Courses"
import Article from "./pages/article/Article"


function App (){
    return (
        <BrowserRouter>
            <MyNavbar/>
            <Routes>
                <Route path="/" element= {<Home/>}/>
                <Route path="/add-article" element= {<AddArticle/>}/>
                <Route path="/edit-article/:articleId" element= {<Edit/>}/>
                <Route path="/article/:articleId" element= {<Article/>}/>
                <Route path="/about" element= {<About/>}/>
                <Route path="/courses" element = {<Courses/>}/>
                <Route path="/articles" element= {<Articles/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App