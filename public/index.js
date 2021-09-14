// Spa is short for Single Page Application
// Use HashRouter for Routing
function Spa() {
  // below we used UserContext from our context.js
  return (
    <HashRouter>
      <div>
        <NavBar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "job",
                email: "job@mit.edu",
                password: "secret",
                balance: 100,
              },
            ],
          }}
        >
          <div className="container" style={{ padding: "20px" }}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount" component={CreateAccount} />
            <Route path="/Login" component={Login} />
            <Route path="/Deposit" component={Deposit} />
            <Route path="/Withdraw" component={Withdraw} />
            <Route path="/Balance" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
