import React from 'react';
import Paginator from './paginator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Paginator viewModel={generateViewModel(4, 10)} />

      </header>
    </div>
  );
}

function generateViewModel(currentPageNumber, totalPageNumber) {
  let viewModel = {
    leftChevronEnabled: true,
    rightChevronEnabled: true,
    data: []
  }
  if(totalPageNumber < 10) {
    for(let i = 1; i <= totalPageNumber; i++) {
      viewModel.data.push(i);
    }
  }

  if(totalPageNumber >= 10 && currentPageNumber < 4) {
    for(let i = 1; i < 5; i++) {
      viewModel.data.push(i);
    }
    viewModel.data.push('...');

    for(let i = totalPageNumber - 3; i <= totalPageNumber; i++) {
      viewModel.data.push(i);
    }
  }
  
  if(totalPageNumber >= 10 && currentPageNumber >= 4 && currentPageNumber <= totalPageNumber - 4) {
    viewModel.data.push(1);
    viewModel.data.push('...')
    for(let i = currentPageNumber - 2; i <= currentPageNumber + 2; i++) {
      viewModel.data.push(i);
    }
    viewModel.data.push('...')
    viewModel.data.push(totalPageNumber)
  }

  if(totalPageNumber >= 10 && currentPageNumber > totalPageNumber - 4) {
    viewModel.data.push(1);
    viewModel.data.push(2);
    viewModel.data.push(3);
    viewModel.data.push(4);
    viewModel.data.push('...');
    for(let i = totalPageNumber - 3; i <= totalPageNumber; i++) {
      viewModel.data.push(i);
    }
  }

  if(currentPageNumber === 1) viewModel.leftChevronEnabled = false;
  if(currentPageNumber === totalPageNumber) viewModel.rightChevronEnabled = false;

  return viewModel;
}

export default App;
