import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = e =>{
    setText((prev) => prev+e.emoji);
    setOpen(false);
  };
  console.log(text);
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <span>Anirudh </span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div> 

        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam accusantium eveniet ea reprehenderit repudiandae veritatis, harum, rerum totam explicabo vitae voluptas, quidem atque officia neque culpa corporis corrupti consectetur voluptate.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4BxtcDUblZ6_yWsCUOg7_jflIL6mo7Uqn-IKQgC8poObFKkU" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam accusantium eveniet ea reprehenderit repudiandae veritatis, harum, rerum totam explicabo vitae voluptas, quidem atque officia neque culpa corporis corrupti consectetur voluptate.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam accusantium eveniet ea reprehenderit repudiandae veritatis, harum, rerum totam explicabo vitae voluptas, quidem atque officia neque culpa corporis corrupti consectetur voluptate.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4BxtcDUblZ6_yWsCUOg7_jflIL6mo7Uqn-IKQgC8poObFKkU" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam accusantium eveniet ea reprehenderit repudiandae veritatis, harum, rerum totam explicabo vitae voluptas, quidem atque officia neque culpa corporis corrupti consectetur voluptate.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam accusantium eveniet ea reprehenderit repudiandae veritatis, harum, rerum totam explicabo vitae voluptas, quidem atque officia neque culpa corporis corrupti consectetur voluptate.</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder="Type a message..." value={text} onChange={e=>setText(e.target.value)} />
        <div className="emoji">
          <img src="./emoji.png" alt=""
          onClick={()=> setOpen((prev)=> !prev)}/>
          <div className="picker">

          <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className="sendButton">send</button>
      </div>
    </div>
  );
};

export default Chat;
