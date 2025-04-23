import "../styles/cards.css";

export interface dataI {
	id: number;
	logo: string;
	name: string;
	description: string;
	isActive: boolean;
}

interface CardsProps {
	filterData: dataI[];
	fullData: dataI[];
	setData: React.Dispatch<React.SetStateAction<dataI[]>>;
}

function Cards({ filterData, fullData, setData }: CardsProps) {
	const handleCheckboxChange = (
		idActive: number,
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const updatedData = fullData.map((card) =>
			card.id === idActive ? { ...card, isActive: event.target.checked } : card,
		);
		setData(updatedData);
	};

	const handleRemoveCard = (idRemove: number) => {
		const updateData = fullData.filter((card) => card.id !== idRemove);
		setData(updateData);
	};

	return (
		<main className="container-zone-cards">
			{filterData.map((el, index) => {
				return (
					<section
						key={el.id}
						className="container-extension"
						style={{ animationDelay: `${index * 100}ms` }}
					>
						<div>
							<picture>
								<img src={el.logo} alt={el.name} />
							</picture>
							<article>
								<h3>{el.name}</h3>
								<p>{el.description}</p>
							</article>
						</div>
						<div>
							<button type="button" onClick={() => handleRemoveCard(el.id)}>
								Remove
							</button>
							<label htmlFor={`switch-${index}`} className="switch">
								<input
									type="checkbox"
									id={`switch-${index}`}
									name="switch"
									checked={el.isActive}
									onChange={(event) => handleCheckboxChange(el.id, event)}
								/>
								<span className="slider round" />
							</label>
						</div>
					</section>
				);
			})}
		</main>
	);
}

export default Cards;
