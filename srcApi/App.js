import { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    list: [],
    filter: [],
    loading: true,
    search: "",
    updateing: { id: null, isUpdate: false },
    newValue: "",
  };

  componentDidMount = () => {
    if (localStorage.getItem("list")) {
      this.setState({
        list: JSON.parse(localStorage.getItem("list")),
        filter: JSON.parse(localStorage.getItem("list")),
        loading: false,
      });
    } else {
      axios("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log(res.data);
          this.setState({ loading: false });
          this.setState({ list: res.data, filter: res.data });
          localStorage.setItem("list", JSON.stringify(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  handleSearch = (e) => {
    this.setState({ search: e.target.value });
    this.setState({
      filter: this.state.list.filter((item) =>
        item.title.includes(e.target.value)
      ),
    });
  };
  update = (id, oldValue) => {
    this.setState({ newValue: oldValue });
    this.setState({ updateing: { id: id, isUpdate: true } });
  };
  handleUpdate = () => {
    const newList = this.state.list.map((item) => {
      if (item.id === this.state.updateing.id) {
        item.title = this.state.newValue;
      }
      return item;
    });
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      list: newList,
      filter: newList,
      updateing: { id: null, isUpdate: false },
    });
  };

  handleDelete = (id) => {
    const newList = this.state.list.filter((item) => item.id !== id);
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({ list: newList, filter: newList });
  };

  render() {
    const { search, loading } = this.state;
    return (
      <>
        {loading ? <div>Loading...</div> : null}
        <div>
          <label>Search</label>
          <input type="text" value={search} onChange={this.handleSearch} />
          {this.state?.filter.length > 0 ? (
            <table border={1}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Update/Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state?.filter.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      {this.state.updateing.isUpdate &&
                      item.id === this.state.updateing.id ? (
                        <>
                          <input
                            onChange={(e) =>
                              this.setState({ newValue: e.target.value })
                            }
                            value={this.state.newValue}
                          />
                          <button onClick={this.handleUpdate}>Update</button>
                        </>
                      ) : (
                        <>
                          <td>{item.title}</td>
                          <td>
                            <button
                              onClick={() => this.update(item.id, item.title)}
                            >
                              Update
                            </button>
                            <button onClick={() => this.handleDelete(item.id)}>
                              Delete
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div>No data</div>
          )}
        </div>
      </>
    );
  }
}

export default App;