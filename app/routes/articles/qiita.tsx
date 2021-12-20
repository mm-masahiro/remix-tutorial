import { useLoaderData } from "remix";

// export const loader = async () => {
// 	const userName = process.env.QIITA_USER_ID
// 	console.log(userName)
// 	// const url = `https://qiita.com/api/v2/users/${userName}/items`;

// 	// const res = await fetch(url);
// 	// return res
// };

export default function QiitaArticles() {
	// const article = useLoaderData()
	// console.log(article);
	return (
		<div>Qiita</div>
	)
}
