import { useQuery } from "@tanstack/react-query";
import List from "react-virtualized/dist/commonjs/List";
import { baseAPI } from "../service/baseAPI";
import { Grid, LinearProgress } from "@mui/material";
import styled from "styled-components";

const GridVirtualized = styled.div`
	.ReactVirtualized__Grid__innerScrollContainer > div {
		display: grid;
		grid-template-columns: 20% 30% 70%;
	}
`;

const ReactVirtualized = () => {
	const { data: comments, isLoading } = useQuery(["comments"], async () => {
		const ressponse = await baseAPI.get(
			"https://jsonplaceholder.typicode.com/comments"
		);
		return ressponse.data;
	});

	function rowRenderer({
		index,
		isScrolling: _scrolling,
		key,
		style,
	}: {
		index: number;
		key: string;
		style: any;
		isScrolling: boolean;
	}) {
		return (
			<div key={key} style={style}>
				<Grid component="span" item xl={2}>
					{comments[index].name}
				</Grid>
				<Grid component="span" item xl={3}>
					{comments[index].email}
				</Grid>
				<Grid component="span" item xl={7}>
					{comments[index].body}
				</Grid>
			</div>
		);
	}

	if (isLoading) return <LinearProgress />;

	return (
		<div>
			<Grid container>
				<Grid component="span" item xl={2}>
					name
				</Grid>
				<Grid component="span" item xl={3}>
					email
				</Grid>
				<Grid component="span" item xl={7}>
					body
				</Grid>
			</Grid>
			<GridVirtualized>
				<List
					height={750}
					rowHeight={50}
					rowCount={comments.length}
					width={1500}
					rowRenderer={rowRenderer}
				/>
			</GridVirtualized>
		</div>
	);
};

export default ReactVirtualized;
