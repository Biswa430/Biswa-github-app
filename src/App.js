import logo from './logo.svg';
import './App.css';
import UseStateHookExample from './basics/UseStateHookExample';
import UseEffectHookExample from './basics/UseEffectHookExample';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import User from './Pages/User';
import NotFound from './Pages/NotFound';
import {GithubProvider} from './context/github/GithubContext';
import {AlertProvider} from './context/alert/AlertContext';
import Alert from './component/layout/Alert'

function App() {
  return (
    ///////////////////// 1st ///////////////////////////////
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
   
    //////////////////// 2nd ////////////////////////
   //<>
     
   // <h1>test1</h1>
   // <h2>test2</h2>
   // <UseStateHookExample/>
   //  <br/><br/>
    // <UseEffectHookExample/>
    //</>

    /////////////////////// 3rd /////////////////////////

   // <h1 class="text-3xl font-bold underline">
   // Hello world!
   // </h1>

   ///////////////// 4th //////////////////////////

   <>
  <GithubProvider>
        <AlertProvider>
          <Router>
            <div className='flex flex-col justify-between h-screen'>
              <Header />
              <main className='container mx-auto px-3 pb-12'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/notfound' element={<NotFound />} />
                  <Route path='/*' element={<NotFound />} />
                  <Route path='/user/:login' element={<User/>} />
                </Routes>
                <Alert />
              </main>
              <Footer />
            </div>
          </Router>
        </AlertProvider>
      </GithubProvider>
 </>
  );
}

export default App;
