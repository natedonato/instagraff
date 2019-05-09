import React from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../util/user_api_util';

class FeedComments extends React.Component {
    constructor(props) {
        super(props);
        const date = new Date(this.props.date).toString().slice(0, 10).toUpperCase();
        this.state = {
            body: "",
            date: date,
            view: `View all ${this.props.comment_ids.length} comments`
        };
        this.likes = this.likes.bind(this);
        this.deleteLike = this.deleteLike.bind(this);
        this.displayComment=this.displayComment.bind(this);
    }


    update(field) {
        return (
            (e) => this.setState({ [field]: e.target.value })
        );
    }

    handleKeyPress(e){
        if (event.key === 'Enter' && !event.shiftKey) {
            this.handleSubmit(e);
        }
        
    }

    handleSubmit(e) {
        e.preventDefault();
        const comment = {

            body: this.state.body,
            photo_id: this.props.photo_id,
        }
        ;
        this.props.createComment(comment);
        this.setState({ body: "" });
    }

    displayComment(id){
        if(this.props.users[this.props.comments[id].author_id] === undefined){
            this.props.fetchUser(this.props.comments[id].author_id);
        }
        else{
        return(
        <div className="comment" key={id}>
        <Link to={`/users/${this.props.comments[id].author_id}`} className="posterUsername">
            {this.props.users[this.props.comments[id].author_id].username} </Link>
        { this.props.comments[id].body }
        </div>)
        }
    }

    deleteLike(){
        this.props.deleteLike(this.props.photo_id)
    }

    likes(){
        let count;
        if (this.props.like_count===1)
            {count = `${this.props.like_count} like`}
        else{
            count = `${this.props.like_count} likes` 
        }
        if(this.props.liked_by_current_user === false){
            return(<>
                <i className="far fa-heart" id="likeIcon" style={{ cursor: "pointer" }} onClick={() => this.props.createLike(this.props.photo_id)}></i>
                <div className="comment"> <div style={{ cursor: "default" }} className="posterUsername">{count}</div></div>
            </>)}
        else{
            return(<>
                <i className="fas fa-heart" id="likeIcon" onClick={this.deleteLike} style={{
                    color: "#ED4956", cursor: "pointer" }}></i>
                <div className="comment"> <div style={{ cursor: "default"}} className="posterUsername">{count}</div>
</div>
       </> )}
    }

    viewMore(){
        if(this.props.comment_ids.length < 1)
            return(<></>);
        if (this.props.comment_ids.length <= 3){
        return(
            this.props.comment_ids.map(commentId => 
                this.displayComment(commentId)         
        ));
            }else{
        return(<>
        {this.displayComment(this.props.comment_ids[0])}
            <div className='comment' style={{ color: '#999', fontWeight: '500', cursor: 'pointer'}} onClick={this.switchView.bind(this)}
            >{this.state.view}
            </div>
            {this.handleView()}
            {this.displayComment(this.props.comment_ids[this.props.comment_ids.length-2])}
            {this.displayComment(this.props.comment_ids[this.props.comment_ids.length - 1])}
        </>
        )    
    }}

    switchView(){
        if(this.state.view != "Hide comments"){
            this.setState({ view: "Hide comments"})
        }else{
            this.setState({ view: `View all ${this.props.comment_ids.length} comments`} )
        }
    }

    handleView(){

        if(this.state.view === "Hide comments"){
            return(
                this.props.comment_ids.slice(1, -2).map(commentId => 
                this.displayComment(commentId)  ));
        }
    }

    render() {

        const postButton = () =>{
            if(this.state.body === ""){
                return(<div style={ {opacity: 0.6} }    
                        className = "postButton" > Post</div >
                )
                }
            return(
                <div onClick={this.handleSubmit.bind(this)} className="postButton">Post</div>
            )
        }
        return (
            <div className="postFooterComments"> 
                <div>
                    {this.likes()}

                </div>
                <div className="commentList">
                    {this.viewMore()}


                </div> 
                <div className="date" ><Link to={`/photos/${this.props.photo_id}`}>{this.state.date}</Link></div>

                <div className="commentFieldBox">
                
                    <textarea rows='1' className="commentField"
                        value={`${this.state.body}`}
                        onChange={this.update("body")}
                        placeholder="Add a comment..." 
                        onKeyPress={this.handleKeyPress.bind(this)}
                    />
                    {postButton()}
                </div>
            </div>
        );
    }
};


export default FeedComments;