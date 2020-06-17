import React from "react";
import styles from "./styles.module.css";
class Form extends React.Component {
  state = {
    notes: [],
    filter: "all",
    title: "",
    status: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddHandler = () => {
    const { title, status, notes } = this.state;
    if (this.state.title === "" || this.state.value === "") return;
    this.setState({
      notes: [...notes, { title, status }],
      title: "",
      status: ""
    });
  };
  updateFilter = filter => this.setState({ filter });

  render() {
    let { notes, filter } = this.state;
    if (filter === "completed") {
      notes = notes.filter(n => n.status.toLowerCase() === "completed");
    }
    if (filter === "active") {
      notes = notes.filter(n => n.status.toLowerCase() === "active");
    }
    if (filter === "all") {
      let act = [],
        comp = [],
        oth = [];
      notes.forEach(el => {
        if (el.status.toLowerCase() === "active") {
          act.push(el);
        } else if (el.status.toLowerCase() === "completed") {
          comp.push(el);
        } else {
          oth.push(el);
        }
      });
      notes = [...act, ...comp, ...oth];
    }

    return (
      <div className={styles.container}>
        <p data-testid="app-title">Notes Application</p>
        <div className={styles.form}>
          <input
            data-testid="input-note-name"
            name="title"
            placeholder="Note Title"
            className={styles.input}
            onChange={e => this.onChange(e)}
            value={this.state.title}
          />
          <input
            data-testid="input-note-status"
            name="status"
            placeholder="Note Status"
            className={styles.input}
            onChange={e => this.onChange(e)}
            value={this.state.status}
          />
          <button onClick={this.onAddHandler} data-testid="submit-button">
            Add Note
          </button>
        </div>
        <div className={styles.bottomMenu}>
          <button
            onClick={() => this.updateFilter("all")}
            data-testid="allButton"
          >
            All
          </button>
          <button
            onClick={() => this.updateFilter("active")}
            data-testid="activeButton"
          >
            Active
          </button>
          <button
            onClick={() => this.updateFilter("completed")}
            data-testid="completedButton"
          >
            Completed
          </button>
        </div>
        <div className={styles.notesContainer}>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((el, i) => (
                <tr key={i}>
                  <td>{el.title}</td>
                  <td>{el.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// const styles = {
//   container: {
//     width: 360,
//     margin: "0 auto",
//     borderBottom: "1px solid #ededed"
//   },
//   form: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   input: {
//     height: 35,
//     width: "360px",
//     border: "none",
//     outline: "none",
//     marginLeft: 10,
//     fontSize: 20,
//     padding: 8,
//     marginRight: 10
//   },
//   bottomMenu: {
//     display: "flex",
//     marginTop: 10,
//     justifyContent: "center"
//   },
//   notesContainer: {
//     width: "360px",
//     margin: "0 auto"
//   }
// };

export default Form;
