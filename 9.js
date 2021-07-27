// We want to create a page with a button that fetches dynamic data
// from a server.  However, we want to make sure only the last click (and
// call) is taken into account. That is, no stale data (relatively to the last
// click) is ever displayed.
// How can we achieve that result?

import React from "react";

const FetchButton = () => {
  // const lastFetchedData;

  const onClick = () => {
    return fetchSomeData();
  };

  return (
    <div>
      <button onClick={onClick}>Fetch latest data</button>
      <div>{lastFetchedData}</div>
    </div>
  );
};

export default FetchButton;
