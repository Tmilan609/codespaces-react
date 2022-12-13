/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import{ Button } from '@material-ui/core';
import style from 'styled-components';
//import { Search } from '@material-ui/icons'

import React from "react";


import { useState } from 'react';

const SearchInput = style.div`
    display: flex;
    align-items: center;
    border: 30px;
    padding 10px 15px;
    width: 500px;
    margin: 0px Auto;
    margin-top: 40px;
    Border-radius: 999px
        input{
            flex: 1;
            padding:8px 13px;
            font-size: Medium;
            border: 0;
            outline: 0;
        }
        .searchicon {
            color:gray;
        }
`;
const SearchButton = styled.div`
        margin-top: 20px;
        display: flex;
        justify-content: center;
        button{
            margin: 5px;
            background: #f8f8f8 !important;
            border: 1px  solid white;
            text-transform: inherit;
            &:hover {
                margin: 5px;
                background: #f8f8f8 !important;
                color:#000;
                border: 1px solid #c6c6c6
            }
        }
`;  


    const Search = ({ hide }) => {
        const [ input, setInput] = useState("");

        return ( 
            <form>
                <SearchInput>
                    <SearchIcon class Name='searchicon'/>
                    <Input value={input} onChange={e => setInput(e.traget.value)}/>
                    <MicIcon />
                    </SearchInput>
                    {!hide && (
                        <SearchButton>
                            <Button type ="submit" variant="outlined">Google Search</Button>
                            <Button variant="outlined">I am Feeling lucky</Button>
                        </SearchButton>
                    )
                }
            
                
            </form>
        )
    }

    export default Search;