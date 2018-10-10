import React, { Component } from 'react';

export default class Single extends Component {
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
                loading: true,
                question: 0
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
        let question = this.state.question + 1;
        console.log(question);
        this.setState({ left: left, right: right, answer: answer}, () => {
            this.setState({ A: '', B: '', C: '', D: '', answers: this.handleAnswers(), question: question })
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

    handleTimesOut = () => {
        this.handleQuestion();
    }

    handleEndLoading = (e) => {
        if (Math.round(e.elapsedTime) === 1) {
            this.setState(prevState => ({ loading: !prevState.loading }))
        }
    }

    handleLoading = () => {
        return (
            <div onAnimationEnd={ (e) => this.handleEndLoading(e) }>
                <div className='s-loading'>Ready?</div>
                <div className='s-loadingBar'><div className='s-innerLoadingBar'/></div>
            </div>
        )
    }

    handleGame = () => {
        return (
            <div>
                <div className='s-questionContainer'>
                    <h3 className='s-questionStyle'>{ `${this.state.left} + ${this.state.right}` }</h3>
                </div>
                <div className='s-scoreContainer'>
                    <span className='s-scoreCorrect'>{ this.state.correct }</span> - <span className='s-scoreWrong'>{ this.state.wrong }</span>
                </div>
                <div className='s-timerBarContainer'>
                    <div className='s-timerBar'>
                        <div className='s-innerTimerBar' onAnimationIteration={ (e) => this.handleTimesOut(e) }/>
                    </div>
                </div>
                <div className='s-answerContainer'>
                    <div className='s-answerRow'>
                        <div>
                            <button className={ `s-answerStyle` } name='A' onClick={ (e) => this.handleCorrect(this.state.answers[0], e) }>{ this.state.answers[0] }</button>
                            <button className={ `s-answerStyle ` } name='B' onClick={ (e) => this.handleCorrect(this.state.answers[1], e) }>{ this.state.answers[1] }</button>
                        </div>
                        <div>
                            <button className={ `s-answerStyle` } name='C'onClick={ (e) => this.handleCorrect(this.state.answers[2], e) }>{ this.state.answers[2] }</button>
                            <button className={ `s-answerStyle` } name='D' onClick={ (e) => this.handleCorrect(this.state.answers[3], e) }>{ this.state.answers[3] }</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

 	render() {
		return (
			<div className='s-container'>
				<div className='s-wrapper'>
					<div className='s-gameContainer'>
                        { this.state.loading ? this.handleLoading() : this.state.question === 11 ? 'hello' : this.handleGame() }
					</div>
				</div>
			</div>
		);    
	}	
}
