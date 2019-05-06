import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class PhotoOptions extends React.Component {
    constructor(props){
        super(props);
        this.state={ confirmation: false};
        this.showDelete = this.showDelete.bind(this);
    }

    handleDelete(){
        this.setState({ confirmation: true })
    }

    showDelete(){
        if(this.props.photo.poster_id !== this.props.currentUser){
            return;
        }
        else{
            return (
                <div className="optionsMiddle" onClick={this.handleDelete.bind(this)}>
                    Remove Photo
                </div>
            )
        }

    }

    render(){
        if(this.state.confirmation === false){
        return(
            <>
            <Link className="optionsHead" to={`/photos/${this.props.photo.id}`} onClick={this.props.closeModal}>Go to post</Link>
            {this.showDelete()}
            <div className="optionsFoot" onClick={this.props.closeModal}>
                Cancel
            </div>
            </>
            )
        } else{
            return(
                <div />
            )
        }
    }
}
export default withRouter(PhotoOptions);