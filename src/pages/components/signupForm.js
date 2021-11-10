import React, {useState, useEffect} from "react";

function Form(props) {
    let [state, setState] = useState({
        username: "",
        password: "",
        passwordConf: "",
        validates: {
            username: false,
            password: false,
            passwordConf: false
        }
    })

    let allIsValide;
    let title;

    function handleSubmit(e) {
        e.preventDefault();

        if (allIsValide) {
            if (e.target.previousSibling && e.target.previousSibling.tagName != "H2") {
                e.target.parentNode.removeChild(e.target.previousSibling);
            }

            // fetch("http://localhost:8080/")
            // .then((res) => res.json())
            // .then((res) => alert(res.d));
            //
        }else {
            if (!e.target.previousSibling || e.target.previousSibling.tagName === "H2") {
                let ele = document.createElement("div");
                    ele.className = "box box-danger";

                ele.innerText = "One of inputs is Invalide";

                e.target.parentNode.insertBefore(ele, e.target);
            }
        }
    }

    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        let newValue = {}
        let validate = false;
        let validates = state.validates;
        let logMsg = "";
        let node = e.target.nextSibling;

        switch (name) {
            case "username":
                if (value.length > 6) {
                    validate = true;
                }else {
                    logMsg = "Username must be minimum 7 characters"
                }
                break;
            case "password":
                if (value.length > 6) {
                    validate = true;
                }else {
                    logMsg = "Password must be minimum 7 characters"
                }
                break;
            case "passwordConf":
                if (validates.password && state.password === value) {
                    validate = true;
                }else {
                    if (state.password.length <= value.length) {
                        logMsg = "No correspondance into the first password"
                    }else {
                        logMsg = "This second password must be minimum 7 characters"
                    }
                }

            default:

        }


        if (validate) {
            e.target.classList.remove("border-danger");
            e.target.classList.add("border-success");

            node.innerText = logMsg;
            node.classList.remove("color-danger");
            node.classList.add("color-success");

        }else {
            e.target.classList.remove("border-success");
            e.target.classList.add("border-danger");

            node.innerText = logMsg;
            node.classList.remove("color-success");
            node.classList.add("color-danger");
        }

        validates[name] = validate;

        newValue[name] = value;
        setState({...state, ...newValue, validates: validates});
    }

    allIsValide = true;
    for (let i in state.validates) {
        allIsValide &= state.validates[i]
    }

    if (props.title) { // Just degug
        title = <h2>Signup To ChapApp</h2>;
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

              <div className="form-group">
                <input
                    type="password"
                    name="passwordConf"
                    value={state.passwordConf}
                    className="form-control"
                    placeholder="Password again"
                    onChange={handleChange}
                />
                <small className="form-text text-muted">Just Test...</small>
              </div>

              <input type="submit" value="Signup" className="btn-pers col"/>
            </form>
        </div>
    )
}

export default Form;
