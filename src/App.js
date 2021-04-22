import React from 'react';
// import axios from 'axios';
import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { axiosBurgers } from './store/actions/burgers';

import { Header, Footer } from './components';
import { Home, Cart } from './pages';


/* func component without redux store */

// function App() {
  // const [burgers, setBurgers] = React.useState([]);

  // ComponentDidMount (первый рендер)
  // React.useEffect(() => {
  //   axios.get('http://localhost:3000/data.json')
  //     .then(({ data }) => {
  //       console.log(data);
  //       setBurgers(data.burgers);
  //     });

    // fetch('http://localhost:3000/data.json')
    //   .then(response => response.json())
    //   .then(arr => {
    //     setBurgers(arr.burgers);
    //   });
  // }, []); 

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route exact path="/" render={ () => <Home products={ burgers } /> } />
//         <Route exact path="/cart" component={ Cart } />
//       </div>
//     </div>
//   );
// };

/* class component from redux store */

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/data.json')
//       .then(({ data }) => {
//         this.props.setBurgers(data.burgers);
//       });
//   }
//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route exact path="/" render={ () => <Home products={ this.props.burgers } /> } />
//           <Route exact path="/cart" component={ Cart } />
//         </div>
//       </div>
//     );
//   };
// };

// const mapState = (state) => {
//   return {
//     burgers: state.burgersReducer.items,
//   };
// };

// const mapActions = dispatch => {
//   return {
//     setBurgers: (arr) => dispatch(setBurgers(arr)),
//   };
// };

// export default connect(mapState, mapActions)(App);

/* func component from redux store and redux hooks */

function App() {
  // const dispatch = useDispatch(); // mapActions
  
  // получение бургеров один раз при запуске приложения и закидывание их в redux
  // React.useEffect(() => {
  // dispatch(axiosBurgers());
    // axios.get('http://localhost:3001/burgers')
    //   .then(({ data }) => {
    //     dispatch(setBurgers(data));
    //   });
  // }, []); 

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
      </div>
      <Footer />
    </div>
  );
};

export default App;