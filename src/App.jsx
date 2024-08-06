import { useEffect } from "react";
import Chat from "./components/chat/Chat";
//import { ToastContainer } from "react-toastify";

import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/lib/firebase";
import { useUserStore } from "./components/lib/userStore";
import { useChatStore } from "./components/lib/chatStore";

const App = () => {
  // const user = true;
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      unsub();
    };
  }, [fetchUserInfo]);
  console.log(currentUser);

  if (isLoading) return <div className="loading">Loading...</div>;
  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId &&<Chat />}
          {chatId &&<Detail />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};
export default App;
