export default function createArrayFromLength(length) {
	return Array.from({ length }, (_, index) => index);
}
