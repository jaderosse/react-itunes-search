const React = require('react');
const MusicListing = require('./MusicListing');

const MusicSearch = React.createClass({
  getInitialState: function() {
    return {searchTerm: '', results: []}
  },
  onChange: function(e) {
    this.setState({searchTerm: e.target.value});
  },
  search: function(e) {
    e.preventDefault();
    fetch(`/api/search?term=${this.state.searchTerm}`)
      .then(response => {
        response.json().then(data => {
          this.setState({results: data.results});
        });
      }).catch(error => {
        this.setState({results: []});
      });
  },
  render: function() {
    const listings = this.state.results.map(listing => {
      return <MusicListing key={listing.trackId} listing={listing} />
    });

    return (
      <div>
        <h1>iTunes Search</h1>
        <form onSubmit={this.search}>
          <div className="form-group">
            <input type="text"
                   value={this.state.searchTerm}
                   onChange={this.onChange}
                   placeholder="Search for Music"
                   className="form-control" />
            </div>
          <input type="submit" className="btn btn-primary" />
        </form>
        <div>{listings}</div>
      </div>
    );
  }
})

module.exports = MusicSearch;
