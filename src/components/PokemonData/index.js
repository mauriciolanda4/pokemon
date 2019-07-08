import React from 'react';

class Data extends React.Component {
  render() {
    const { name, image, onCatch } = this.props;
    return (
      <div className="data-container">
        <p>{name}</p>
        <img alt="" src={image} />
        <button onClick={onCatch}>Catch</button>
      </div>
    );
  }
}

export default Data;
