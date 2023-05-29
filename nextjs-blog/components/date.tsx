import { parseISO, format } from "date-fns";
import React from "react";

interface Props {
	dateString: string;
}

export default function Date({ dateString }: Props) {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
