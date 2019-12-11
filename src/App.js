import React ,{useState, useEffect }from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import SearchComponent from './components/SearchComponent';
import { fetchProduct, searchProduct } from './redux/actions'
function App(props) {

  useEffect(()=>{
    return props.fetchProduct()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <SearchComponent
       onUserInput={props.searchProduct}
       />
      </header>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
      product : state.product
  }
}

const mapDispatchToProps =(dispatch) =>{
  return{
    fetchProduct: () => dispatch(fetchProduct()),
    searchProduct: (keyword)=>dispatch(searchProduct(keyword))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
