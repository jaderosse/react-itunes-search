const React = require('react');
const ReactDOM = require('react-dom');
const MusicSearch = require('./components/MusicSearch');

const App = React.createClass({
  render: function() {
    return (
      <div>
        <MusicSearch />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
