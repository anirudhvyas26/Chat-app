import "./detail.css"

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Anirudh</h2>
        <p>Dreamer: often found in his bed
          mostly with a book by his side  </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
             <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKC7iVyIC4SKbJyV_HQta_3-heqAqemWaTg&s" alt="" /> 
             <span>photo_2024_.png</span>
            </div>
            <img src="./download.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>photos</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Detail
