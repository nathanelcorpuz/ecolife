import styles from "./AddToCartIcon.module.css";

export default function AddToCartIcon() {
	return (
		<svg
			className={styles.addToCartIcon}
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				className={styles.rect}
				x="0.45"
				y="0.45"
				width="35.1"
				height="35.1"
				rx="4.05"
			/>
			<path
				d="M9.69858 11.0325C9.39049 11.0818 9.1146 11.2515 8.9316 11.5042C8.74861 11.7569 8.67349 12.072 8.72279 12.3801C8.77208 12.6882 8.94175 12.9641 9.19446 13.1471C9.44717 13.3301 9.76222 13.4052 10.0703 13.3559H13.5553L13.7644 13.9367L14.717 16.8409L15.6695 19.7451C15.7625 20.0471 16.1574 20.3259 16.4595 20.3259H24.5911C24.9164 20.3259 25.2881 20.0471 25.381 19.7451L27.2629 13.9367C27.3559 13.6347 27.2165 13.3559 26.8912 13.3559H16.5756L15.6928 11.6831C15.5987 11.4911 15.4535 11.3288 15.2732 11.214C15.0928 11.0992 14.8843 11.0364 14.6705 11.0325L10.0239 11.0325C9.95429 11.0263 9.88431 11.0263 9.81475 11.0325C9.76833 11.0298 9.72178 11.0298 9.67535 11.0325L9.69858 11.0325ZM17.0403 22.6492C16.3898 22.6492 15.8786 23.1604 15.8786 23.8109C15.8786 24.4614 16.3898 24.9726 17.0403 24.9726C17.6908 24.9726 18.202 24.4614 18.202 23.8109C18.202 23.1604 17.6908 22.6492 17.0403 22.6492ZM24.0103 22.6492C23.3597 22.6492 22.8486 23.1604 22.8486 23.8109C22.8486 24.4614 23.3597 24.9726 24.0103 24.9726C24.6608 24.9726 25.1719 24.4614 25.1719 23.8109C25.1719 23.1604 24.6608 22.6492 24.0103 22.6492Z"
				fill="#FFF7EB"
			/>
		</svg>
	);
}