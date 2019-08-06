import React, { Component } from 'react';
import './style.css'
import {Button} from 'antd-mobile'
class OrderItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      editing: true,
      stars: props.data.stars || 0,
      comment: props.data.comment || ''
    }
  }
  render() {
    const {shop,product,price,picture,ifCommented} = this.props.data
    return (
      <div className="orderItem">
        {/* BEM模块信息 */}
        <div className="orderItem__picContainer">
          <img className="orderItem__pic" src={picture} alt=""/>
        </div>
        <div className="orderItem__content">
          <div className="orderItem__product">{product}</div>
          <div className="orderItem__shop">{shop}</div>
          <div className="orderItem__detail">
            <div className="orderItem__price">{price}</div>
            <div>
              {
                ifCommented ?
                <button className="orderItem__btn orderItem__btn--grey">已评价</button>
                :
                <button className="orderItem__btn orderItem__btn--red" onClick={this.handleOpenEditArea}>评价</button>
              }
            </div>
          </div>
        </div>
        <div className="orderItem__editarea">
        {this.state.editing?this.renderEditArea(): ''}
        </div>
      </div>
    );
  }
  renderEditArea() {
    return (
      <div className="orderItem__commentContainer">
        <textarea onChange={this.handleCommentChange} value={this.state.comment} className="orderItem__comment"/>
        {this.renderStars()}
        <Button type="primary" size="small" className="orderItem__btn orderItem__btn-red" onClick={this.handleSubmitComment}>提交</Button>
        <Button size="small" className="orderItem__btn orderItem__btn--grey" onClick={this.handleCancelComment}>取消</Button>
      </div>
    )
  }
  renderStars() {
    const { stars } = this.state;
      return(
        <div className="orderItem__star-container">
          {
            [1,2,3,4,5].map((item,index)=>{
              const lightClass = stars >= item ? 'orderItem_star--light' : '';
              return (
                <span key={index} className={"orderItem_star " + lightClass} onClick={this.handleClickStars.bind(this,item)}>★</span>
              )
            })
          }
          <span></span>
        </div>
      )
    }
    handleOpenEditArea = () => {
      this.setState({
        editing: true
      })
    }
    handleCommentChange = (e) => {
      this.setState({
        comment: e.target.value
      })
    }
    handleClickStars = (stars) => {
      this.setState({
        stars: stars
      })
    }
    handleCancelComment = () => {
      this.setState({
        editing: false,
        comment: this.props.data.comment || '',
        stars: this.props.data.stars || 0
      })
    }
    handleSubmitComment = () =>{
      const {id} = this.props.data
      const {comment,stars} = this.state
      this.setState({
        editing: false
      })
      this.props.onSubmit(id, comment, stars)
    }
  }

export default OrderItem;