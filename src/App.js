import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import ProductScreen from './screens/ProductScreen/ProductScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom' 

const App = () => {
  return (
    
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>   
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
