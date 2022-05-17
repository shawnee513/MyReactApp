import React from 'react';

export const Greeting = ({ name, numberOfMessages }) => {
  if (!name) return null;

    let isMorning = (new Date()).getHours() < 12;
    let GreetingHeader = isMorning
      ? <h3>Good Morning {name}!</h3>
      : <h3>Good Evening {name}!</h3>;

      return (
        <>
          {GreetingHeader}
          {numberOfMessages === 0
            ? null
            : <p>You have {numberOfMessages} new messages</p>}
        </>
      )
}

export default Greeting;