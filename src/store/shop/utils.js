export const convertCollections = (collections) => {
	const converted = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			title,
			items,
			id: doc.id,
			routeName: encodeURI(title.toLowerCase())
		};
	});

	return converted.reduce((acc, collection) => {
		acc[collection.title.toLowerCase()] = collection;

		return acc;
	}, {});
};
