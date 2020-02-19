import React from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/ImageList/ImageList";
import apiClient from "./api/apiClient";

class App extends React.Component {
	state = {
		images: []
	}

	onSearchSubmit = async searchTerm => {
		const response  = await apiClient.get("/search/photos", {
			params: {
				query: searchTerm
			}
		});

		this.setState({ images: response.data.results});
		
	}
	
	render() {
		return (
			<div className="ui container" style={{marginTop: "10px"}}>
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
