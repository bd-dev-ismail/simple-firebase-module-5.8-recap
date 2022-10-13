import './App.css';

cnst
function App() {
 
  
  return (
    <div className="App">
      {user.uid ? (
        <button onClick={handalSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handalSignInWithGoogle}>Sign In With Google</button>
        </>
      )}
      {user.uid && (
        <div>
          <h3>User Name: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
