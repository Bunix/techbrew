/* @flow */
import React from 'react'
import styled, {css} from 'styled-components'
import FA from '../../components/FA'
import Jumbotron from '../../components/Jumbotron'
import Container from '../../components/Container'
import vars from '../../variables'

const Wrapper = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 70px 0px;
  background: #fff;
  border-radius: 8px;
  padding: 48px 24px;
  padding-bottom: 16px;
  margin-left: -80px;
  margin-right: -80px;
  margin-bottom: -120px;
  z-index: 100;
`
const WrapperJumbotron = styled.div`
  height: 200px;
  margin-bottom: 32px;
`
const CardWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 24px;
  padding-bottom: 8px;
  width: 100%;
  cursor: pointer;
`
const CardCircle = styled.div`
  height: 12px;
  width: 12px;
  background: ${vars['color-gray']};
  border-radius: 50%;
  margin-bottom: 16px;

  ${props => props.active && css`
    ${Card}:first-child & {
      background: rgb(66, 196, 241);
    }

    ${Card}:nth-child(2) & {
      background: rgb(0, 176, 140);
    }

    ${Card}:nth-child(3) & {
      background: rgb(233, 207, 81);
    }

    ${Card}:nth-child(4) & {
      background: rgb(234, 83, 35);
    }
  `}
`
const CardTitle = styled.h4`
  text-transform: uppercase;
  font-size: 12px;
  font-family: ${vars['font-family-heading']};
`

type Process = {
  title: string,
  icon: string,
  description: string
}

const list: Array<Process> = [{
  title: 'Prototyping',
  description: `Before the cogs start rolling, we sit down with our clients, pinpoint the problem, and research to  gather information. Based on those requirements, we will make user flows and present them with mockups.`,
  icon: 'th-large'
}, {
  title: 'Design',
  description: 'In this stage, we visualize how our product will look like and feel for the users. We will formalize the specification on how each part of the software will work.',
  icon: 'object-ungroup'
}, {
  title: 'Development',
  description: 'As the blueprints are set to stone, we make sure to create our visions to life with proper engineering practices and sensible technology choices.',
  icon: 'code'
}, {
  title: 'Iteration',
  description: 'As we launch our product into the wild, we make sure not only improve its existing features, but to also build more upon them. We go back to our whiteboard and rethink the product.',
  icon: 'code'
}]

type State = {
  active: boolean
}

class ProcessSection extends React.Component<void, void, State> {
  state = {
    active: 0
  }

  render() {
    const process: Process = list[this.state.active]
    
    return (
      <Container>
        <Wrapper>
          <WrapperJumbotron>
            <Jumbotron headline="Our Process" alignment="center" description={process.description} padding={false} />
          </WrapperJumbotron>

          <CardWrapper>
            {list.map((process, i) => (
              <Card key={i} title={`${i + 1}. ${process.title}`} onClick={() => this.handleChange(i)}>
                <CardCircle active={i === this.state.active} />
                <CardTitle>{process.title}</CardTitle>
              </Card>
            ))}
          </CardWrapper>
        </Wrapper>
      </Container>
    )
  }

  handleChange = (index) => {
    this.setState({
      active: index
    })
  }
}

export default ProcessSection
