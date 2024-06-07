import React, { useEffect, useState } from "react";

const ProgressLine = ({
	label,
	backgroundColor = "#e5e5e5",
	// expected format for visual parts
	visualParts = [
		{
			percentage: "0%",
			color: "white"
		}
	]
}) => {
	const [widths, setWidths] = useState(
		visualParts.map(() => {
			return 0;
		})
	);

	useEffect(() => {
		requestAnimationFrame(() => {
			setWidths(
				visualParts.map(item => {
					return item.percentage;
				})
			);
		});
	}, [visualParts]);

	return (
		<>
			<div className="progressLabel">{label}</div>
			<div
				className="progressVisualFull"
				style={{
					backgroundColor
				}}
			>
				{visualParts.map((item, index) => {
					return (
						<div
							key={index}
							style={{
								width: widths[index],
								// backgroundColor: item.color
							}}
							className="progressVisualPart"
						/>
					);
				})}
			</div>
		</>
	);
};

export default ProgressLine;
