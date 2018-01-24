import React from 'react'
import ReactDOM from 'react-dom'
import UserForm from './components/userForm'
import WeightTracker from './components/weightTracker'
import Toaster from './components/toaster/toaster'
import { Line } from 'react-chartjs-2';

class App extends React.Component {
  state = {
    counter: 2,
    list: [{id: 1, item: 'hi'}],
    weightData: {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: "#FF6384",
          label: 'Wendys Weight'
        }
      ]
    },
    showToast: false,
    toastMessage: 'You are getting FAT'
  }

  addToList = (data) => {
    var counter = this.state.counter + 1

    let list = [
      ...this.state.list,
      { id: counter, item: data}
    ]

    this.setState({
      counter,
      list
    })

    this.addDataToChart(data);
  }

  generateTimeNow(weightData) {
    const currentDateTime = new Date()
    weightData['labels'].push(currentDateTime)
  }

  addDataToChart(weight) {
    let { weightData } = this.state

    const currentDateTime = new Date()
    weightData['labels'].push(currentDateTime)

    const lastWeight = weightData.datasets[0].data.pop();
    this.setToastMessage(weight, lastWeight);

    weightData.datasets[0].data.push(weight)
    this.showToast();

    this.setState({
      weightData,
    })
  }
  setToastMessage(currentWeight, lastWeightData){
    let toastMessage;
    if (currentWeight > lastWeightData) {
      toastMessage = "You are getting FAT!!";
    } else {
      toastMessage = "ON your way to supermodel status!"
    }
    this.setState({
      toastMessage
    })
  }
  
  showToast() {
    this.setState({
        showToast: true
    })
    setTimeout(() => {
        this.setState({
            showToast: false
        })
    }, 3000)
}

  removeFromList(id) {
    const list = [...this.state.list].filter(li => li.id !== id)
    this.setState({
      list
    })
  }

  renderList(){
    return this.state.list.map(({ id, item }) => {
      return <li key={id}>{item}<span onClick={this.removeFromList.bind(this, id)}> x</span></li>

    })
  }

  render() {
    return (
      <div>
        <Toaster 
          showToast={this.state.showToast}
          message={this.state.toastMessage}/>
        <WeightTracker 
        addToList={this.addToList}/>
        <ul>
          { this.renderList() }
        </ul>
        <Line data={this.state.weightData} redraw/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
