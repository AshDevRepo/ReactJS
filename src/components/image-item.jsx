import React,{  Component} from "react"

class ImageItem extends Component{

  selectItem = (e, item) => {
    e.preventDefault();
    if(item){
      const { onSelect } = this.props;
      onSelect(item)
    }
  }

  render() {
    const { item } = this.props;
    if(!item){
      return <React.Fragment/>
    }

    const { id, author, width, height, url, download_url  } = item;
    return (
      <div className={"image__item"} onClick={(e) => this.selectItem(e, item)}>
        <img src={download_url} alt={author ||  id} className={"img-fluid"}/>
      </div>
    )
  }
}

export default ImageItem;
