import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    
    * {
        box-sizing:border-box;
    }
    html{
        height:100%
    }
    body {
        height:100%;
        background-color:#ffffff;
        color:${props => props.theme.blackColor};
        font-size:14px;
        font-family: "Jua", sans-serif;
    }
    a {
        color:${props => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }

`;
