import profilePic from './assets/maryam.jpg'
function Card() {
  return (
    <div className="card">
      {/* <img src="https://via.placeholder.com/150" alt="sample pic" /> */}
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="card-title">Maryam Khodaparast</h2>
      <p className="card-text">I am a developer</p>
    </div>
  );
}
export default Card;