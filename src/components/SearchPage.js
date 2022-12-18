// eslint-disable-next-line

import React from "react";
import { Link } from "react-router-dom";
import Search from './Search'
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";
import { useStateValue } from "../SearchProvider";
import useGoogle from "../useGoogle";


const SearchPageHeader = styled.div`
display: flex;
position: sticky;
top:0;
z-index: 100;
background-color: white;
align-items: flex-start;
padding:30px;
border-bottom: 1px solid lightgray;
img {
    height: 50px;
    margin-right: 50px;
    }
`
const SearchPageOptions = styled.div`
    display: flex;
    align-items: center;
    color:gray;
    margin-top: 30px;
    a {
        text-dicoration: none;
        color:gray;
        marign-left: 5px;
       }
`
const Options = styled.div`
    margin-left: ${props => props.right ? "80px": "0px"};
    display: flex;
    align-items: center;
`
const SearchPageOption = styled.div`
    dispaly: flex;
    align-items: center;
    margin-right: 20px;
`

const SearchPageResults = styled.div`
        max-width: 650px;
        margin-top: 20px;
        margin-left: 240px;
        margin-bottom:100px;
        .resultCount {
            color:#70757a;
            font-size: 14px; 
        }
        .result {
            margin: 40px 0px;
        }
`

const SearchPagelink = styled.a`
        display: flex;
        align-items: center;
        text-decoration: none;
        color:#000;
        margin-bottom: 3px;
        img {
            height: 50px;
            width: 50px;
            object-fit: contain;
            margin-right: 10px;
        }
`

const SearchPageResultsTitle = styled.a`
        text-decoration: none;
        h2{
            font-weight: 500;
        }
        &:hover{
            text-decoration: underline;
        }
`

const SearchPageResultDesc = styled.p`
        margin-top: 10px;
`
    const SearchPage = () => {
        const [ {term} ] = useStateValue();
        const { data } = useGoogle(term);
        console.log(data);

        
        return (
            <div>
            <SearchPageHeader>
                <Link to="/">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Google_2011_logo.png/640px-Google_2011_logo.png'alt=""/>
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
                        <MoreVertIcon /><Link to="/all">More</Link>
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
            {term && (
            <SearchPageResults>
                <p className="resultCount">
                    About {data?.searchInformation.formattedTotaResults} results ({data?.searachInformation.formattedSearchTime}) for {term}
                    </p>
                    {data?.items.map(item => (
                    <div className="result">
                        <SearchPagelink href={item.link}>
                           {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                <img src={item.pagemap?.cse_image[0]?.src} alt="" /> 
                                )}
                            {item.displayLink}
                        </SearchPagelink>
                        <SearchPageResultsTitle href="item.link">
                            <h2>{item.title}</h2>
                        </SearchPageResultsTitle>
                        <SearchPageResultDesc>{item.snippet}</SearchPageResultDesc>
                </div>
            ))}
            </SearchPageResults>
            )}
            </div>
        )
    }
    
    export default SearchPage;