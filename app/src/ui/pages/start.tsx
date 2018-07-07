import * as React from 'react'

interface IStartProps {
  /**
   * Event trigger when the moused clicked.
   */
  readonly onClick: () => void

  readonly updatedState
}

interface IStartState {
  /**
   * component state
   */
  readonly updatedState: Boolean
}

class Start extends React.Component<IStartProps, IStartState> {
  public constructor(props: IStartProps) {
    super(props)
    this.state = {
      updatedState: false,
    }
  }

  public DispatchButton = () => {
    this.setState({ updatedState: true })
  }

  public render() {
    return <button onClick={this.DispatchButton}>Atualizar Estado</button>
  }
}

export default Start
