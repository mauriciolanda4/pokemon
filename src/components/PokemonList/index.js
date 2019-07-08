import React from 'react';

class List extends React.Component {
  render() {
    const { list } = this.props;

    if (!list || list.length === 0) {
      return null;
    }

    return (
      <div class="data-container">
        <span>Pokemon Catched:</span>
        {list.map((data, idx) => (
          <div className="pokemon" key={idx}>
            <span>{data.name}</span>
            <img alt="" src={data.image} />
          </div>
        ))}
      </div>
    );
  }
}

export default List;
