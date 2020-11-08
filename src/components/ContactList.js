import React from "react";
import Contact from "./Contact";

const messages = [
  {
    name: "Laughing-Man",
    avatar: "https://upload.wikimedia.org/wikipedia/ru/6/63/Laughing-man.gif",
    online: true
  },
  {
    name: "Motoko",
    avatar: "https://i1.sndcdn.com/artworks-000050719822-v2twgg-t500x500.jpg",
    online: false
  },
  {
    name: "Batou",
    avatar:
      "https://otakuusamagazine.com/wp-content/uploads/2017/08/fp-batougits.jpg",
    online: false
  },
  {
    name: "Tachikoma",
    avatar:
      "https://sun9-51.userapi.com/E54VP1d6q2tJ8qc0Zcv8etDpyvBdymqAtofTLw/tpg6LlRsQxs.jpg",
    online: true
  }
];

function ContactList() {
  return (
    <div>
      {messages.map((message, index) => (
        <Contact
          key={index}
          name={message.name}
          avatar={message.avatar}
          online={message.online}
        />
      ))}
    </div>
  );
}

export default ContactList;
