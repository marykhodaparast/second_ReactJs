function ProfilePicture() {

    const imageUrl = './src/assets/test.png';

    const handleClick = () => console.log('Ouch!');

    return(<img onClick={handleClick} src={imageUrl}></img>)
}
export default ProfilePicture;