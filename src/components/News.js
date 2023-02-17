import React, { Component } from "react";
import Newsitem from "./Newsitem";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2023-02-16&to=2023-02-16&sortBy=popularity&apiKey=dc79fdf1f1fd4df49cb6065d72188386";
    let data = await fetch(url);
    console.log("parseData"+ JSON.stringify(data));
    this.setState({articles: data.articles});
    console.log("thisState"+this.state)
  }
  render() {
    return (
      <div className="container my-4">
        <h1>NewsMonket-TopHeadlines</h1>
        <div className="row my-4">
          {this.state.article.map((element) => {
            return (
              <div className="col-md-4 " key={element.url}>
                <Newsitem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  newsurl={element.url}
                  urlImage={element.urlToImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
