

function Signup() {

  return (
    <div className="container col-6 mt-5">
      <h2>Signup To ChapApp</h2>
      <form className="border-sm">
        <div className="form-group">
          <input type="text" name="username" className="form-control" placeholder="Username" />
          <small className="form-text text-muted">Just Test...</small>
        </div>

        <div className="form-group">
          <input type="password" name="password" className="form-control" placeholder="Password" />
          <small className="form-text text-muted">Just Test...</small>
        </div>

        <div className="form-group">
          <input type="password" name="password-conf" className="form-control" placeholder="Retype password" />
          <small className="form-text text-muted">Just Test...</small>
        </div>

        <input type="submit" value="Validate" className="btn btn-secondary col"/>
      </form>
    </div>
  )
}

export default Signup;
