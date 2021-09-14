// Hint on Each component to refactor
// only one form and show all the contents inside each component

function CreateAccount() {
  const ctx = React.useContext(UserContext);

  function handle(data) {
    ctx.users.push({
      name: data.name,
      email: data.email,
      password: data.password,
      balance: 100,
    });
    return true;
  }

  return (
    <BankForm
      bgcolor="primary"
      label="Create Account"
      handle={handle}
      hideAmount={true}
      successButton="Add another account"
    />
  );
}
