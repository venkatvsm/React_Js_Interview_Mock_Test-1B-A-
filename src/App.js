import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  BgContainer,
  CardContainer,
  CounterResultContainer,
  CounterTextContainer,
  CounterPara,
  TextInputContainer,
  TextInputPara,
  InputContainer,
  InputEl,
  AddBtn,
  FailureviewContainer,
  FailureviewImage,
  UlListContainer,
  ListItems,
  ItemsHeading,
} from './styledComponents'
// Replace your code here

class App extends Component {
  state = {textInput: '', textList: []}

  onChangeTextField = event => {
    this.setState({textInput: event.target.value})
  }

  onClickSubmitBtn = event => {
    event.preventDefault()
    const {textInput} = this.state
    if (textInput !== '') {
      const textEl = {
        id: uuidv4(),
        name: textInput,
        count: textInput.length,
      }
      this.setState(prevState => ({
        textInput: '',
        textList: [...prevState.textList, textEl],
      }))
    }
  }

  renderFailureview = () => (
    <FailureviewContainer>
      <FailureviewImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </FailureviewContainer>
  )

  renderSuccessview = () => {
    const {textList} = this.state
    return (
      <UlListContainer>
        {textList.map(eachItem => (
          <ListItems key={eachItem.id}>
            <ItemsHeading>
              {eachItem.name}: {eachItem.count}
            </ItemsHeading>
          </ListItems>
        ))}
      </UlListContainer>
    )
  }

  render() {
    const {textInput, textList} = this.state
    return (
      <BgContainer>
        <CardContainer>
          <CounterResultContainer>
            <CounterTextContainer>
              <CounterPara>
                Count the characters like a <br /> boss...
              </CounterPara>
            </CounterTextContainer>
            {textList.length === 0
              ? this.renderFailureview()
              : this.renderSuccessview()}
          </CounterResultContainer>
          <TextInputContainer onSubmit={this.onClickSubmitBtn}>
            <TextInputPara>Character Counter</TextInputPara>
            <InputContainer>
              <InputEl
                type="text"
                value={textInput}
                placeholder="Enter the Characters here"
                onChange={this.onChangeTextField}
              />
              <AddBtn type="submit">Add</AddBtn>
            </InputContainer>
          </TextInputContainer>
        </CardContainer>
      </BgContainer>
    )
  }
}

export default App
//  this.renderSuccessview()
