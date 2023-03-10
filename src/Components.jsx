import React from "react";


// State indicator components
export const Loading = () => <div>Loading...</div>;
export const Error = ({ message }) => (
  <div class="alert alert-danger" role="alert">
    <b>Error:</b> {message}
  </div>
);

// Layout components


export const Footer = () => (
  <footer className="App-footer displayFlex">
    <div className="container hasura-logo">
      <a href="https://hasura.io" target="_blank" rel="noopener noreferrer">
        <img
          className="hasura-logo"
          alt="hasura logo"
          src="https://graphql-engine-cdn.hasura.io/img/powered_by_hasura_black_200px.png"
        />
      </a>
      &nbsp; | &nbsp;
      <a href="https://realtime-poll.hasura.app/console" target="_blank">
        Backend
      </a>
      &nbsp; | &nbsp;
      <a
        href="https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/realtime-poll"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
      <div className="footer-small-text">
        <span>(The database resets every 24 hours)</span>
      </div>
    </div>
  </footer>
);