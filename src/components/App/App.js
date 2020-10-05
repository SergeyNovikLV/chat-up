import React from 'react'
import RoomList from 'components/RoomList/RoomList'
import MessageList from 'components/MessageList/MessageList'
import SendMessageForm from 'components/SendMessageForm/SendMessageForm'
import NewRoomForm from 'components/NewRoomForm/NewRoomForm'
import './App.css'

function App() {
  return (
    <div className="app">
      <RoomList />
      <MessageList />
      <SendMessageForm />
      <NewRoomForm />
    </div>
  )
}

export default App
