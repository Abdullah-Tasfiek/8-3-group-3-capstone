import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Match from "../Components/Match";

const API = process.env.REACT_APP_API_URL;
//id 2 likes id 3, and vice versa so they are matching
export default function Matches({ user }) {
  //   console.log("Context in MATCHES:", user);
  // const [isMatched, setIsMatched] = useState(false);
  const [users, setUsers] = useState([]);
  const [matchedUsers, setMatchedUsers] = useState([]);
  useEffect(() => {
    if (!user) return;
    axios
      .get(`${API}/users`)
      .then((response) => setUsers(response.data.payload));
    users.forEach(async (person) => {
      await axios
        .get(`${API}/likes/mutual?user1=${user.id}&user2=${person.id}`)
        .then((response) => {
          //   matchedUsers.push(response.data.payload);
          setMatchedUsers([matchedUsers, response.data.payload]);
        });
    });
  }, [user]);
  //   console.log(matchedUsers);

  //loop through array of user, make an axios call for /mutuals
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center">
        {matchedUsers.map((match) => {
          return <Match match={match} key={`${match.id} ${match.name}`} />;
        })}
      </div>
    </div>
  );
}
