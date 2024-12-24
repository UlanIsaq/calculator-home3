import './App.css';
import styles from './app.module.css';
import { useState } from 'react';

let numbers = '';
export const App = () => {
	const [operand1, setOperand1] = useState(null);
	const [operator, setOperator] = useState(null);
	const [operand2, setOperand2] = useState(null);
	const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	const [totalAmount, setTotalAmount] = useState(null);
	let count = 0;
	const onDigitClick = (event) => {
		//setTotalAmount(null);
		console.log('count', count, 'operator', operator);

		numbers += event.target.innerText;

		console.log('numbers', numbers);
		operator === null ? setOperand1(numbers) : setOperand2(numbers);

		count++;
		console.log('text:', event.target.innerText, '');
		console.log('operand1', operand1, 'totalAmount', totalAmount);
		if (operand1 !== null) {
			setTotalAmount((prevValue) => null);
		}
	};

	const onOperatorclick = (event) => {
		numbers = '';
		setOperator(event.target.innerText);
		console.log('onOperatorclick', event.target.innerText);
		if (operand1 !== null) {
			setTotalAmount((prevValue) => null);
		}
	};

	const onEqualClick = () => {
		switch (operator) {
			case '+':
				console.log(
					'operator:',
					operator,
					'total:',
					Number(totalAmount),
					'operand1:',
					Number(operand1),
					'operand2',
					Number(operand2),
				);
				setTotalAmount(
					(operator !== null && totalAmount !== null
						? Number(totalAmount)
						: Number(operand1)) + Number(operand2),
				);
				setOperand1(null);
				setOperand2(null);
				setOperator(null);
				numbers = '';
				break;
			case '-':
				setTotalAmount(
					(operator !== null && totalAmount !== null
						? Number(totalAmount)
						: Number(operand1)) - Number(operand2),
				);
				setOperand1(null);
				setOperand2(null);
				setOperator(null);
				numbers = '';
				break;
			default:
				setTotalAmount(0);
		}
	};

	const onResetClick = (event) => {
		setOperator(null);
		setOperand1(null);
		setOperand2(null);
		setTotalAmount(null);
		numbers = '';
		console.log('onResetClick', event.target.innerText);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Calculator</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						{'total' + totalAmount !== null &&
						operand1 !== null &&
						operator === null
							? null
							: totalAmount}{' '}
						{operand1}
						{operand1 !== null || totalAmount !== null ? operator : null}
						{operand2}
					</div>
					<>
						<ul className={styles['steps-list']}>
							{NUMS.map((item, index) => (
								<li
									className={styles['steps-item']}
									onClick={onDigitClick}
									key={index}
								>
									<button className={styles['steps-item-button']}>
										{item}
									</button>
								</li>
							))}
						</ul>
					</>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={onEqualClick}>
							=
						</button>

						<button className={styles.button} onClick={onResetClick}>
							C
						</button>
						<button className={styles.button} onClick={onOperatorclick}>
							-
						</button>
						<button className={styles.button} onClick={onOperatorclick}>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
