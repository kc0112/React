import './App.css';
import { Button } from '../node_modules/@material-ui/core'
import { SendIcon } from '../node_modules/@material-ui/icons/Send'
import { DeleteIcon } from '../node_modules/@material-ui/icons/Delete'

function App() {
  return (
    // centre
    <>
      
    <div className="App">
      {/* black grey background */}
      <header className="App-header">
        {/*           page k hisab se, dibbe me, */}
          <Button color='inherit' variant='contained' size='large' endIcon={<DeleteIcon />} >click me</Button>
       </header>
      </div>
      </>
  );
}

export default App;
