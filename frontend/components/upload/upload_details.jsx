import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class UploadDetails extends React.Component {
    constructor(props) {
        super(props)

    }

    // handlePreview() {
    //     const file = e.currentTarget.files[0];
    //     const fileReader = new FileReader();

    //     fileReader.onloadend = () => {
    //         this.setState({fileReader.result})
    //     };

    //     fileReader.readAsDataURL();
    // }

    render() {
       
        const { stepNumber, title, handleInput, cancel, handleSubmit,
                 handleFileClick, handlePhotoFile, photoUrl } = this.props;
        const photoPreview = this.props.photoUrl ? 
            <img className="upload-photo-preview" src={photoUrl} /> : null;

        const uploadPhotoButton = !this.props.photoUrl ? 
        <button className="upload-photo" onClick={handleFileClick}>
            <FontAwesomeIcon icon="camera" />
            Upload Image
            <input type="file" id="file" accept="image/*" onChange={handlePhotoFile}/>
        </button> 
        : <button className="upload-photo" onClick={handleFileClick}>
            <FontAwesomeIcon icon="camera" />
            Update Image
            <input type="file" id="file" accept="image/*" onChange={handlePhotoFile}/>
        </button>

        const newTitle = title.split(".")[0];

        if(stepNumber === 2) {
            return (
                <div className="upload-details-main">
                    <div className="upload-details-header">
                        <li>Basic Info</li>
                    </div>
                    <div className="upload-details-form">
                        <div className="song-photo">
                            {photoPreview}
                            {uploadPhotoButton}
                        </div>
                        <div className="song-details">
                            <p>Title <span className="required">*</span></p>
                            <input type="text"
                                value={newTitle}
                                onChange={handleInput("title")}
                                placeholder="Name your track"
                            />
                        <p>Genre</p>
                        <div>
                            <select onChange={handleInput("genre")}>
                                <option value="">None</option>
                                <option value="Custom">Custom</option>
                                <option value="Alternative Rock">Alternative Rock</option>
                                <option value="Ambient">Ambient</option>
                                <option value="Classical">Classical</option>
                                <option value="Country">Country</option>
                                <option value="Dance & EDM">Dance & EDM</option>
                                <option value="Dancehall">Dancehall</option>
                                <option value="Deephall">Deephall</option>
                                <option value="Deep House">Deep House</option>
                                <option value="Disco">Disco</option>
                                <option value="Drum & Bass">Drum & Bass</option>
                                <option value="Dubstep">Dubstep</option>
                                <option value="Electronic">Electronic</option>
                                <option value="Folk & Singer-Songwriter">Folk & Singer-Songwriter</option>
                                <option value="Hip-hop & Rap">Hip-hop & Rap</option>
                                <option value="House">House</option>
                                <option value="Indie">Indie</option>
                                <option value="Jazz & Blues">Jazz & Blues</option>
                                <option value="Latin">Latin</option>
                                <option value="Metal">Metal</option>
                                <option value="Piano">Piano</option>
                                <option value="Pop">Pop</option>
                                <option value="R&B & Soul">R&B & Soul</option>
                                <option value="Reggae">Reggae</option>
                                <option value="Reggaeton">Reggaeton</option>
                                <option value="Rock">Rock</option>
                                <option value="Soundtrack">Soundtrack</option>
                                <option value="Techno">Techno</option>
                                <option value="Trance">Trance</option>
                                <option value="Trap">Trap</option>
                                <option value="Triphop">Triphop</option>
                                <option value="World">World</option>
                            </select>
                        </div>
                        </div>
                        <p>Description</p>
                        <textarea placeholder="Describe your track" 
                            onChange={handleInput("description")}></textarea>
                    </div>
                    <div className="upload-details-footer">
                        <p>
                            <span className="required">*</span>
                            Required fields
                        </p>
                        <div className="upload-detail-buttons">
                            <a onClick={cancel}>Cancel</a>
                            <a className="save-button" onClick={handleSubmit}>
                                Save
                            </a>
                        </div>
                    </div>
                </div>
            )

        } else {
            return null;
        }
    }
};

export default UploadDetails;