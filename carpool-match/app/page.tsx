'use client';

import { useState } from 'react';

interface Match {
  firstName: string
  lastName: string
  employer: string
  startLocation: string
  endLocation: string
  startDistanceDelta: number
  endDistanceDelta: number
}

const matchList: Match[] = [
  {
    firstName: "Sally",
    lastName: "Ride",
    employer: "SharkNinja",
    startLocation: "Mission Hill, MA",
    endLocation: "Natick, MA",
    startDistanceDelta: 0.5,
    endDistanceDelta: 3
  },
  {
    firstName: "Neil",
    lastName: "Armstrong",
    employer: "Tesla",
    startLocation: "Cambridge, MA",
    endLocation: "Somerville, MA",
    startDistanceDelta: 2,
    endDistanceDelta: 1.5
  },
  {
    firstName: "Ada",
    lastName: "Lovelace",
    employer: "Google",
    startLocation: "Boston, MA",
    endLocation: "Waltham, MA",
    startDistanceDelta: 1,
    endDistanceDelta: 2.2
  },
  {
    firstName: "Grace",
    lastName: "Hopper",
    employer: "Amazon",
    startLocation: "Quincy, MA",
    endLocation: "Burlington, MA",
    startDistanceDelta: 3.4,
    endDistanceDelta: 4.1
  },
  {
    firstName: "Alan",
    lastName: "Turing",
    employer: "Meta",
    startLocation: "Newton, MA",
    endLocation: "Cambridge, MA",
    startDistanceDelta: 1.8,
    endDistanceDelta: 0.9
  },
  {
    firstName: "Margaret",
    lastName: "Hamilton",
    employer: "MIT",
    startLocation: "Somerville, MA",
    endLocation: "Lexington, MA",
    startDistanceDelta: 2.5,
    endDistanceDelta: 3.3
  },
  {
    firstName: "Tim",
    lastName: "Berners-Lee",
    employer: "World Wide Web Consortium",
    startLocation: "Concord, MA",
    endLocation: "Boston, MA",
    startDistanceDelta: 4,
    endDistanceDelta: 5.2
  }
];

var emptyMatch: Match = {
  firstName: "",
  lastName: "",
  employer: "",
  startLocation: "",
  endLocation: "",
  startDistanceDelta: 0,
  endDistanceDelta: 0
}

interface ButtonProps {
  className: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
}

function Button({ className, onClick, title }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>{title}</button>
  );
}

export default function Home() {
  const [curMatch, setMatch] = useState(emptyMatch);

  function selectMatch() {
    console.log(matchList);
    if (matchList.length === 0) {

      setMatch(emptyMatch);
    } else {
      const i = Math.floor(Math.random() * matchList.length);
      const m = matchList.splice(i, 1)[0];
      setMatch(m);
    }
  }

  function Profile({ firstName, lastName, employer, startLocation, endLocation,
    startDistanceDelta, endDistanceDelta }: Match) {

    if (firstName === "" && lastName === "" && employer === "" && startLocation === ""
      && endLocation === "" && startDistanceDelta === 0 && endDistanceDelta === 0) {
      return (
        <p className='profile'>No matches currently available</p>
      );
    }
    return (
      <div className="profile">
        <p>Name: {firstName.concat(" ").concat(lastName)}</p>
        <p>Employer: {employer}</p>
        <p>Start Location: {startLocation} - {startDistanceDelta} mile(s) away</p>
        <p>End Location: {endLocation} - {endDistanceDelta} mile(s) away</p>
      </div>

    );
  }
  function handleAccept() {
    selectMatch();
  }
  function handleReject() {
    selectMatch();
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 style={{ fontSize: 36 }}> Match with another co-op student to create a carpool </h1>
      <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
        <Profile {...curMatch} />
        <ol className="list-inside flex flex-row gap-[600px] text-sm/6 text-center sm:text-left">
          <li><Button className="buttonAccept" onClick={handleAccept} title="Accept" /></li>
          <li><Button className="buttonReject" onClick={handleReject} title="Reject" /></li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">

        </div>
      </main>

    </div >
  );
}
