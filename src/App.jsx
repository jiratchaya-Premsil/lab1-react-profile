import ProfileCard from "./components/ProfileCard"
function App() {
  return (
    <div style={{ display: 'flex' ,  flexDirection: 'column', alignItems:'center'}}>
      <h1>My first react app</h1>
      <ProfileCard
        name="John Doe"
        role="Software Engineer"
        bio="Passionate about creating efficient and scalable web applications."
      />
      <ProfileCard
        name="Jane Smith"
        role="bakery"
        bio="i love my husbant's cake"
      />
    </div>
  )
}

 export default App