export default function ObjectToString({ obj }) {
	const keyValuePairs = Object.entries(obj)
		.map(([key, value]) => `${key}: ${value}`)
		.join(", ");

	return <div>{keyValuePairs}</div>;
}
