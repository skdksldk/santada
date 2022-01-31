import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing/Landing';
import Search from './pages/Search/Search';
import Community from './pages/Community/Community';
import WritingForm from './pages/Community/WritingForm';
import CommunityDetail from './pages/Community/Detail';
import './App.less';



const App = () => {
  return (
    <BrowserRouter basename="mountain">
      <Navbar />
      <Route path="/" exact component={Landing} />
      <Route path="/search" exact component={Search} />
      <Route path="/community" exact component={Community} />
      <Route path="/form" exact component={WritingForm} />
      <Route path="/detail/:id" component={CommunityDetail} />
    </BrowserRouter>
  );
};

export default App;