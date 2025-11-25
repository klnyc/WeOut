import { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar.jsx";
import { ChatRoom } from "../components/ChatRoom.jsx";
import { listChats } from "../services";
import { firestore } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { CHATS } from "../utility";

export const Home = ({ user, setUser, fetchUser }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState();
  const [loaded, setLoaded] = useState(false);

  const fetchChats = async () => {
    const response = await listChats(user.chats);
    setChats(response);
  };

  // Refresh chats when user adds a new chat
  useEffect(() => {
    console.log("fetching chats");
    fetchChats();
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  // Set current chat when chats are loaded or first chat is added
  useEffect(() => {
    console.log("set current chat");
    if (!chats.length) return;
    if (!currentChat) {
      setCurrentChat(chats[0]);
    } else {
      const updatedChat = chats.find((chat) => {
        if (!chat) return false;
        return chat.id === currentChat.id;
      });
      setCurrentChat(updatedChat);
    }
  }, [chats]); // eslint-disable-line react-hooks/exhaustive-deps

  // If data is loaded, set flag that data is loaded
  useEffect(() => {
    console.log("set load state");
    if (currentChat && !loaded) setLoaded(true);
  }, [currentChat, loaded]);

  // If data is loaded, attach listeners to all chats to display live messages
  useEffect(() => {
    console.log("add message listeners");
    if (loaded && user.chats.length) {
      user.chats.map((chat) => {
        const chatDoc = doc(firestore, CHATS, chat);
        const unsubscribe = onSnapshot(chatDoc, () => {
          fetchChats();
        });
        return () => {
          unsubscribe();
        };
      });
    }
  }, [loaded, user.chats]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="home-page">
      <SideBar
        user={user}
        chats={chats}
        setCurrentChat={setCurrentChat}
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        fetchUser={fetchUser}
      />
      <ChatRoom
        user={user}
        currentChat={currentChat}
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        setChats={setChats}
        fetchUser={fetchUser}
        setUser={setUser}
      />
    </div>
  );
};
