import React, {Component} from 'react'
export class Newsitem extends Component {
  render(){
  let {title,description,urlImage,newsurl} = this.props;
    return (   
     <div>
        <div className="card" style={{width: "18rem"}}>
        <img src= {!urlImage? "https://imgs.hipertextual.com/wp-content/uploads/2023/01/gafas-realidad-mixta-apple-scaled.jpeg" : urlImage} alt=" "/>
       <div className="card-body">
       <h5 className="card-title"> {title}.....</h5>
       <p className="card-text">{description}....</p>
       <a href= {newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
       </div>
       </div>
      </div>
    )
  }
}

export default Newsitem
