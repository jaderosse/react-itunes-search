const React = require('react');

const MusicListing = React.createClass({
  render: function() {
    const listing = this.props.listing;

    return (
      <div className="well">
        <h2>{listing.trackName}</h2>
        <h3><small> {listing.artistName}</small></h3>
        <img src={listing.artworkUrl100} />
        <div>
          <audio controls src={listing.previewUrl} />
        </div>
      </div>
    );
  }
});

module.exports = MusicListing;
