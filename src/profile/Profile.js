const Profile = ({ fullName, bio, profession, handleName, children }) => {
    return (
        <div>
            <h1>{fullName}</h1>
            <h1>{bio}</h1>
            <h1>{profession}</h1>
            {handleName('Anis')}
            <p>{children}</p>
        </div>
    )
}
export default Profile;