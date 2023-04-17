export default function layout({ children }) {
	return (
		<main>
			{/* requirements:
                - images, when clicked, should open a modal
                - url should change to reflect image id
                - opened modal should have prev / next buttons
                - prev next buttons should update url with image id
                - opened modal image should be reshareable via url
                - same behavior with reviews
            */}
			{/* 
                details
                - image preview with clickable thumbnails
                - product details
            */}
			{/*  
                reviews
                - review list with clickable cards
                - review form
            */}
			{children}
		</main>
	);
}
