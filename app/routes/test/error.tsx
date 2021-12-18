interface ErrorObj {
	error: ErrorDetail;
}

interface ErrorDetail {
	message?: string;
}

export function ErrorBoundary({ error }: ErrorObj) {
	return (
		<div>Error occured. {error.message}</div>
	)
}

export default function Gists() {
	throw new Error('Error')
	return (
		<div>
			<h2>Public gists</h2>
		</div>
	)
}
