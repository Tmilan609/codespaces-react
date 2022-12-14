import React from "react";
import { Link } from "react-router-dom";
import Search from './Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import RoomIcon from "@material-ui/icons/Room";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from 'styled-components';
const SearchPageHeader = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    z-index: 100;
    bachground-color: white;
    align-items: flex-start;
    padding: 30px;
    border-bottom: 1px solid lightgray;
    img{
        height: 50px;
        margin-right: 50px;
    }
`;
const SearchPageOptions = styled.div`
    display: flex;
    align-items: center;
    color: gray;
    margin-top: 30px;
    a {
        text-decoration: none;
        color: gray;
        margin-left: 5px;
    }
`;
const Options = styled.div`
    margin-left: ${props => props.right ? "80px" : "0px"};
    display: flex;
    align-items: center;
`;
const SearchPageOption = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`;
const SearchPage = () => {
    return (
        <div>
            <SearchPageHeader>
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Google_2011_logo.png/640px-Google_2011_logo.png" />
                </Link>
                <div>
                    <Search hide />
                    <SearchPageOptions>
                        <Options>
                            <SearchPageOption>
                                <SearchIcon /><Link to="/all">All</Link>
                            </SearchPageOption>
                            <SearchPageOption>
                                <DescriptionIcon /><Link to="/all">News</Link>
                            </SearchPageOption>
                            <SearchPageOption>
                                <ImageIcon /><Link to="/all">Images</Link>
                            </SearchPageOption>
                            <SearchPageOption>
                                <LocalOfferIcon /><Link to="/all">Shopping</Link>
                            </SearchPageOption>
                            <SearchPageOption>
                                <RoomIcon /><Link to="/all">Maps</Link>
                            </SearchPageOption>
                            <SearchPageOption>
                                <MoreVertIcon /> <Link to="/all">More</Link>
                            </SearchPageOption>
                        </Options>
                        <Options right>
                            <SearchPageOption>
                                <Link to="/settings">Settings</Link>
                            </SearchPageOption>
                            <SearchPageOption>
                                <Link to="/tools">Tools</Link>
                            </SearchPageOption>
                        </Options>
                    </SearchPageOptions>
                </div>
            </SearchPageHeader>
        </div>
    )
};
export default SearchPage;