import react from 'react';
import ReactDom from 'react-dom';
import Header from './header';
import Footer from './footer';
import Note from './note';
import notes from '../notes';



function App() {
  return (
    <div className="App">
    <div><Header/>
      {
        notes.map( (noteItem)=>{
        return <Note
        title={noteItem.title} 
        content={noteItem.content}  
      />
    })}
    </div> 
     <Footer/>
    </div>
  );
}     

export default App;
