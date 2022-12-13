import React from "react";
import { Link } from "react-router-dom";
import Search from './Search'
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";


const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" alt="google-logo" />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hide />
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon /><Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon /><Link to= "/all">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon /><Link to= "/all">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon /><Link to= "/all">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon /><Link to= "/all">Maps</Link>
                            </div>
                    <div className="searchPage__option">
                                <MoreVertIcon /><Link to="/all">More</Link>
                    </div>
                    </div>
                    <div className="searchPage__optionsRight">
                        <div className="searchPage__option">
                            <Link to="/settings">Settings</Link>
                    </div>
                    <div className="searchPage__option">
                        <Link to="/tools">Tools</Link>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SearchPage;