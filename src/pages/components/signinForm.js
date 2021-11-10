import React, {useState, useEffect} from "react";

function Form(props) {
    let [state, setState] = useState({
        username: "",
        password: "",
        passwordConf: ""
    })

    let title;

    if (props.title) {
        title = <h2>Signup To ChapApp</h2>;
    }

    function handleSubmit(e) {
        e.preventDefault();

        return null;
    }

    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        let newValue = {}

        console.log(".");
        switch (name) {
            case "username":
                console.log("eeee");
                if (value.length > 4) {
                    e.target.classList.add("border-success");
                }else {
                    e.target.classList.add("border-danger");
                }
                break;
            default:

        }

        newValue[name] = value;
        setState({...state, ...newValue});
    }

    return (
        <div className="container col-6 mt-5">
            {title}

            <form className="border-sm" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                    type="text"
                    name="username"
                    value={state.username}
                    className="form-control"
                    placeholder="Username"
                    onChange={handleChange}
                />

                <small className="form-text text-muted">Just Test...</small>
              </div>

              <div className="form-group">
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    className="form-control"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <small className="form-text text-muted">Just Test...</small>
              </div>

              <input type="submit" value="Signup" className="btn col"/>
            </form>
        </div>
    )
}

export default Form;
