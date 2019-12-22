import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes/index';
import Header from './components/header/header';

import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index.toString()}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          );
        })}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;













// import React from 'react';
// import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// import routes from './routes/index';
// import Header from './components/header/header';
// import Footer from './components/footer/footer';
// import './App.css';
// function App() {
//   return (
//     <Router>
//       <Switch>
//         {routes.map((route, index) => {
//           if (route.path === "/roles" || route.path === "/verify") {
//             return (
//               <React.Fragment key={index.toString()}>
//               <Route
//                 path={route.path}
//                 exact={route.exact}
//                 component={route.main}
//               />
//               </React.Fragment >
//             );
//           }
//           return (
//             <React.Fragment key={index.toString()}>
//               <Header />
//               <Route
//                 path={route.path}
//                 exact={route.exact}
//                 component={route.main}
//               />
//               <Footer />
//             </React.Fragment>
//           );
//         })}
//       </Switch>
//     </Router>
//   );
// }
//
// export default App;
