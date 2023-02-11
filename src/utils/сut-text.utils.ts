export const cutText = (text: string, n: number) => {
	return text.split('').slice(0, n).join('') + '...';
};
