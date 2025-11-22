function App() {
  const handleClick = () => {
    alert("New DevOps Feature Button clicked!");
  };

  return (
    <div>
      <h1>Hello DevOps from React! This is Branch commit</h1>
      <button onClick={handleClick}>
        New Feature Button
      </button>
    </div>
  );
}

export default App;