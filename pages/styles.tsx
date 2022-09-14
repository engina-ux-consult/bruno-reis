function ST(){
    const css = `

    body {
        font-family: 'Open Sans';
    }
    .Link{
       color: #382B57;
       font-weight: bold;
    }
    .Link:visited {
        color: #382B57;
    }
    .Button {
        color: #FFFFFF;
        background-color: #382B57;
        border-radius: 0.25rem;
        text-transform: none;
    }
    .Button:hover{
        background-color: #584389;
  }
  .Button:focus{
        background-color: #7C65B3;
  }
  
  a{
    color: #A09E9E;
    text-decoration:none;
  }
  a:active{
    color: #382B57;
  }

  .indice{
    float: left;
  }

  .subT{
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
  }

  .text{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #535353;
  }
          `;
          return(
            <style>
        {css}
      </style>
          );
          
};

export default ST