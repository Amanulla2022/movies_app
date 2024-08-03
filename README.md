# Movie Search Application

This is a React-based movie search application that allows users to search for movies, view details, and navigate through paginated results. The application fetches movie data from the OMDB API and displays it in a user-friendly interface.

# [Hosted_Link](https://movies-app-kappa-neon.vercel.app/)

## Features

    - Search Movies: Users can search for movies by title.
    - Movie List: Displays a list of movies based on the search query.
    - Movie Details: View detailed information about a selected movie.
    - Pagination: Navigate through multiple pages of search results.
    - Loading Spinner: Indicates loading state while fetching data.
    - Error Handling: Displays errors when movie data cannot be fetched.

## Technologies Used

React
OMDB API
Tailwind CSS
react-spinners (ClipLoader for loading spinner)

## Getting Started

To get a local copy up and running follow these steps:

### Installation

#### Clone the repository

"git clone https://github.com/Amanulla2022/movies_app.git"

#### Navigate to the project directory

cd movie-search-app

#### Install dependencies

npm install or yarn install

### Setup API Key

#### Obtain an API key from [OMDB Api](https://www.omdbapi.com/)

Create a .env file in the root of your project and add your API key
REACT_APP_API_KEY=your_api_key_here

#### Running the Application

Start the development server

### Components

Header: Displays the application header with a logo and title.
Search: Contains the search input and button to fetch movies.
MovieList: Renders a list of MovieCard components.
MovieCard: Displays a single movie's poster, title, and year.
MovieDetails: Shows detailed information about a selected movie in a modal.
Pagination: Handles navigation between pages of search results.
