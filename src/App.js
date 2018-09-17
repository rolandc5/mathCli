import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
		super();
		this.state = {
			left: 0,
			right: 0,
			answer: 0,
			answers: [],
			A: false,
			B: '',
			C: '',
			D: '',
			correct: 0,
			wrong: 0,
			timer: 3,
		
	  }
	  this.handleQuestion = this.handleQuestion.bind(this);
	  this.handleCorrect = this.handleCorrect.bind(this);
  }

  componentDidMount() {
	  this.handleQuestion();
  }

  handleQuestion() {
	let left = Math.floor(Math.random() * Math.floor(10));
	let right = Math.floor(Math.random() * Math.floor(10));
	let answer = left + right;
	this.setState({ left: left, right: right, answer: answer}, () => {
		this.setState({ A: '', B: '', C: '', D: '', answers: this.handleAnswers() })
	});
  }

  handleAnswers() {
	const answerArr = [];
	let random = 0;
	while(answerArr.length !== 4) {
		random = Math.floor(Math.random() * Math.floor(10)) + Math.floor(Math.random() * Math.floor(10));
		if (random !== this.state.answer && answerArr.includes(random) === false) {
			answerArr.push(random);
		}			
	}
	answerArr[Math.floor(Math.random() * (3 - 0)) + 0] = this.state.answer;
	return answerArr;
  }
  
  handleCorrect(answer, e) {
	let name = e.target.name;
	let correct = this.state.correct;
	let wrong = this.state.wrong;
	if (answer === this.state.answer) {
		correct++
		this.setState({ [name]: true, correct: correct }, () => {
			this.handleQuestion();
			return;
		});
	}
	if (answer !== this.state.answer) {
		wrong++
		this.setState({ [name]: false, wrong: wrong }, () => {
			this.handleQuestion();
			return;
		});
	}
  }

 	render() {
		return (
			<div className='container'>
				<div className='wrapper'>
					<div className='gameContainer'>
						<div className='questionContainer'>
							<span className='questionStyle'>{ `${this.state.left} + ${this.state.right}` }</span>
						</div>
						<div style={{ height: '3em' }}/>
						<div style={{ fontSize: '2em'}}><span style={{ color: 'green' }}>{ this.state.correct }</span> - <span style={{ color: 'red' }}>{ this.state.wrong }</span></div>
						<div style={{ height: '3em' }}/>
						<div className='answerContainer'>
							<div className='answerRow'>
								<div>
									<button className={ `answerStyle` } name='A' onClick={ (e) => this.handleCorrect(this.state.answers[0], e) }>{ this.state.answers[0] }</button>
									<button className={ `answerStyle ` } name='B' onClick={ (e) => this.handleCorrect(this.state.answers[1], e) }>{ this.state.answers[1] }</button>
								</div>
								<div>
									<button className={ `answerStyle` } name='C'onClick={ (e) => this.handleCorrect(this.state.answers[2], e) }>{ this.state.answers[2] }</button>
									<button className={ `answerStyle` } name='D' onClick={ (e) => this.handleCorrect(this.state.answers[3], e) }>{ this.state.answers[3] }</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);    
	}	
}

export default App;


/*
change color when wrong or correct


create function for setTimeout add to 
*/