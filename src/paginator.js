import React from 'react';

function Paginator({ viewModel }) {
  return (
    <div className="Paginator">
      <p>Left Chevron Enabled:{ viewModel.leftChevronEnabled + ''} </p>
      <p>Data:{ viewModel.data + ''} </p>
      <p>Right Chevron Enabled:{ viewModel.rightChevronEnabled + ''} </p>
    </div>
  );
}

export default Paginator;
