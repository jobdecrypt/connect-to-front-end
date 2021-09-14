// Name of the function must be UpperCase in React
function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#" onClick="defaultModule()">
          Badbank
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#CreateAccount"
                onClick="loadCreateAccount()"
                id="createAccount"
              >
                Create Account
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#login"
                onClick="loadLogin()"
                id="login"
              >
                Login
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#deposit"
                onClick="loadDeposit()"
                id="deposit"
              >
                Deposit
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#withdraw"
                onClick="loadWithdraw()"
                id="withdraw"
              >
                Withdraw
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#balance"
                onClick="loadBalance()"
                id="balance"
              >
                Balance
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#alldata"
                onClick="loadAllData()"
                id="alldata"
              >
                AllData
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
